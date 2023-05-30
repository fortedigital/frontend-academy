import { signIn, signOut } from "next-auth/react";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Button from "components/Button";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Auth from "components/Auth/Auth";

export default function User({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //const { data: session } = useSession();
  if (user) {
    return (
      <Auth>
        <p className="mb-4">Logget inn som {user.email} </p>
        <p>{user.city}</p>
        <Button onClick={() => signOut()}>Logg ut</Button>
      </Auth>
    );
  }
  return (
    <>
      Ikke innlogget
      <br />
      <Button onClick={() => signIn("azure-ad")}>Logg inn</Button>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}
