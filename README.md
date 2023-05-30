# Forte Frontend Academy NextAuth.js workshop med Azure AD

## Kjør applikasjonen

```bash
npm run dev
```

## Oppsett av Azure Active Directory

Logg inn i Azure Portal: https://portal.azure.com/

Søk opp `App registrations`

Trykk `New Registration`

Gi appen et navn, og trykk `Register`.

Opprett en ny `Client Secret` under `Certificates & secrets`. Husk å kopiere verdien (value). Det er ikke mulig å hente den ut igjen senere.

Opprett `.env.local` på rot i prosjektet med følgende:

```bash
AZURE_AD_CLIENT_SECRET=<Value>
```

Legg også til følgende i `.env.local`:

```bash
AZURE_AD_CLIENT_ID=<Application (client) ID>
AZURE_AD_TENANT_ID=<Directory (tenant) ID>
AUTH_SECRET=<Finn på noe eget. Brukes til å kryptering>
```

## Oppsett av next auth

Installer next-auth i prosjektet:

```bash
npm install next-auth
```

Opprett følgende fil `pages/api/auth/[...nextauth].js`

```javascript
import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions = {
  // Configure AzureAD provider
  secret: process.env.AUTH_SECRET,
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
export default NextAuth(authOptions);
```

Dette er en dynamisk url, der kall mot `/api/auth/* (signIn, callback, signOut, etc.)` håndteres av next-auth.

Gå til http://localhost:3000/api/auth/signin/azure-ad, og logg inn.

Det skal oppstå en feil med denne meldingen: `AADSTS500113: No reply address is registered for the application.`

Vi må fortelle Azure AD om hvor vi håndterer callback i løsningen, som nå ligger på den dynamiske ruten
`http://localhost:3000/api/auth/callback/azure-ad`

Legg til dette som gyldig `Redirect URI` for web i appen gjennom Azure Portalen.

### Delt sesjon i appen

For å kunne kunne hente ut innlogget sesjon i appen, må vi legge til en delt sesjon på rot i applikasjonen.

Endre `pages/_app.tsx` med følgende kode:

```typescript
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "styles/globals.css";

import Layout from "components/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
```

## API bak innlogging

Vi skal sette opp et API som krever innlogging.

Opprette en ny fil `pages/api/restricted.ts` med følgende kode:

```typescript
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  content?: string;
  error?: string;
};

export default async function restrictedAPI(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    res.send({
      content: "Alle Forte Digital sine forettningshemmeligheter.",
    });
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
}
```

Gå til http://localhost:3000/api/restricted og sjekk om du er logget inn. Hvis ikke, gå til http://localhost:3000/api/auth/signin/, og hvis du er logget inn, kan du prøve å logge ut på http://localhost:3000/api/auth/signout/

## Bruk av React Hook for client-side komponenter

Vi ønsker å lage en knapp i `Header` for å enkelt kunne logge inn, eller å enkelt kunne logge ut dersom man allerede er logget inn. I tillegg ønsker vi å vise navnet til innlogget bruker. Vi kan gjøre dette ved å bruke `useSession()`

Gå til `components/Header/Header.tsx`

Legg til

```typescript
import { useSession, signIn, signOut } from "next-auth/react";
```

Vi trenger også `signIn` og `signOut` for å logge brukeren inn og ut.

Vi kan hente ut innlogget sesjon på følgende måte

```typescript
const { data: session } = useSession();
```

Rediger `links` med følgende kode:

```typescript
const links = (
  <>
    <HeaderLink href="/tidsplan">Tidsplan</HeaderLink>
    <HeaderLink href="/faq">FAQ</HeaderLink>
    {session ? (
      <>
        <HeaderLink href="#">{session.user?.name}</HeaderLink>
        <Button onClick={() => signOut({ callbackUrl: "/" })}>Logg ut</Button>
      </>
    ) : (
      <Button onClick={() => signIn("azure-ad")}>Logg inn</Button>
    )}
  </>
);
```
