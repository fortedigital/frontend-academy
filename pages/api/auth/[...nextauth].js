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
      authorization: {
        params: { scope: "openid profile email offline_access" },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
export default NextAuth(authOptions);
