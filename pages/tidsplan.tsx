import Link from "next/link";
import Head from "next/head";

import Button from "components/Button";
import Icon from "components/Icon";
import clsx from "clsx";

export default function Plan() {
  const tableHeaders = ["Dato", "Tema", "Detaljer"];

  const planData = [
    {
      date: "02. februar",
      topic: "Introduksjon",
      details: "Rom 103. Felles middag i kantina.",
    },
    {
      date: "16. februar",
      topic: "Hva leverer Forte? Verdier og strategier",
    },
    {
      date: "02. mars",
      topic: "Faggruppesamling",
    },
    {
      date: "16. mars",
      topic: "Kvalitetssikring på høyt nivå",
    },
    {
      date: "30. mars",
      topic: "Universell utforming v. Kristoffer Lium (NRK)",
    },
    {
      date: "13. april",
      topic: "Faggruppesamling",
    },
    {
      date: "27. april",
      topic: "Sikkerhet",
    },
    {
      date: "11. mai",
      topic: "VS Code: tips og triks",
    },
    {
      date: "31. mai",
      topic: "Autentisering",
      details: "Etter arbeidstid med sosialt",
    },
    {
      date: "25. mai",
      topic: "Faggruppesamling",
    },
    {
      date: "juni (TBA)",
      topic: "Avsluttende oppgave",
    },
  ];

  return (
    <div>
      <Head>
        <title>Tidsplan</title>
      </Head>
      <Link href="/" className="block max-w-fit">
        <Button
          variant="ghost"
          icon={<Icon name="ArrowLeftIcon" />}
          iconPosition="start"
          className="mb-8"
        >
          Tilbake
        </Button>
      </Link>
      <h1 className="mb-8 text-4xl font-bold">Tidsplan</h1>

      <table className="">
        <thead>
          <tr className="border-b border-zinc-500 text-red-300">
            {tableHeaders.map((header, index) => (
              <th className="py-4 pl-4 text-left" key={`table-header_${index}`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-500">
          {planData.map((item, index) => (
            <tr
              className={clsx(
                item.topic === "Faggruppesamling" && "bg-zinc-900 bg-opacity-70"
              )}
              key={`plan-item_${index}`}
            >
              <td className="py-4 pl-4 lg:pr-20">{item.date}</td>
              <td className="py-4 pl-4 lg:pr-20">{item.topic}</td>
              <td className="py-4 pl-4 text-zinc-200 lg:pr-20">
                {item.details}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
