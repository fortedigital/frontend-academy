import Icon from "components/Icon";
import Button from "components/Button";

export default function Home() {
  const EmphasizedText = ({ children }: { children?: React.ReactNode }) => (
    <span className="font-bold text-red-300">{children}</span>
  );

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-y-14">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          Velkommen til <br /> Forte Frontend Academy
        </h1>
        <p className="text-center md:text-lg">
          Ønsker du å utvikle deg enda mer innenfor frontendteknologier,
          deriblant <EmphasizedText>universell utforming</EmphasizedText>,{" "}
          <EmphasizedText>kvalitet</EmphasizedText>,{" "}
          <EmphasizedText>sikkerhet</EmphasizedText> og{" "}
          <EmphasizedText>konsulentvirksomhet</EmphasizedText>?
          <br />
          <br />
          Bli med på Forte Frontend Academy, der vi utover våren arrangerer 8
          ettermiddager med kurs, workshops og gruppeoppgaver. Sesjonene vil
          være innenfor arbeidstid, og oppstart er 02. februar 2023.
        </p>

       
      </div>
    </div>
  );
}
