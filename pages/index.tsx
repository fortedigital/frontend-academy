import Link from "next/link";

import Icon from "components/Icon";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center">
        <h1 className="mb-20 text-center text-6xl font-bold">
          Velkommen til <br /> Frontend Academy
        </h1>
        <p className="mb-16 text-center text-lg">
          Ønsker du å utvikle deg enda mer innenfor frontendteknologier,
          deriblant universell utforming, kvalitet, sikkerhet og
          konsulentvirksomhet? Meld deg på Frontendakademiet der vi utover våren
          arrangerer 8 til 10 ettermiddager med kurs, workshops og
          gruppeoppgaver.
        </p>
        <Link
          href="/pamelding"
          className="group flex h-10 items-center gap-x-2 rounded-sm bg-red-600 pl-3 pr-5 font-bold transition-colors hover:bg-red-700 active:bg-red-800"
        >
          Meld deg på
          <Icon
            name="ArrowRightIcon"
            className="transition-transform group-hover:translate-x-2"
          />
        </Link>
      </div>
    </div>
  );
}
