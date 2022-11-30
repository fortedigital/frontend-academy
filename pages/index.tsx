import Icon from "components/Icon";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center">
        <h1 className="mb-14 text-center text-4xl font-bold md:mb-20 md:text-6xl">
          Velkommen til <br /> Forte Frontend Academy
        </h1>
        <p className="mb-14 text-center md:text-lg">
          Ønsker du å utvikle deg enda mer innenfor frontendteknologier,
          deriblant universell utforming, kvalitet, sikkerhet og
          konsulentvirksomhet? Meld deg på Forte Frontend Academy, der vi utover
          våren arrangerer 8 til 10 ettermiddager med kurs, workshops og
          gruppeoppgaver.
        </p>
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=nv06Bstf0kinacoxsPW0Qyz1_fHV7sxIpo8188t8HX5UOEZHRFRBMEg0S1VERTY4OUtWTzhFRlZIQyQlQCN0PWcu"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-10 items-center gap-x-2 rounded-sm bg-red-600 pl-3 pr-5 font-bold transition-colors hover:bg-red-700 active:bg-red-800"
        >
          Meld deg på
          <Icon
            name="ArrowRightIcon"
            className="transition-transform group-hover:translate-x-2"
          />
        </a>
      </div>
    </div>
  );
}
