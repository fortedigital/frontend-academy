import Button from "components/Button/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  const { callbackUrl, error } = router.query;

  return (
    <>
      {error === "SessionRequired" && (
        <p className="mb-4">Du må logge inn for å se dette innholdet</p>
      )}
      <Button
        onClick={() =>
          signIn("azure-ad", { callbackUrl: callbackUrl?.toString() })
        }
      >
        Logg inn
      </Button>
    </>
  );
}
