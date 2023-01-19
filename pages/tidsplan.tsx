import Link from "next/link";

import Button from "components/Button";
import Icon from "components/Icon";
import clsx from "clsx";

export default function Plan() {
  const tableHeaders = ["Dato", "Tema", "Detaljer"];

  const planData = [
    {
      date: "02. februar",
      topic: "Introduksjon",
      details: "Felles middag i kantina",
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
      date: "april (TBA)",
      topic: "Universell utforming v. Kristoffer Lium (NRK)",
    },
    {
      date: "april (TBA)",
      topic: "Faggruppesamling",
    },
    {
      date: "mai (TBA)",
      topic: "Sikkerhet",
    },
    {
      date: "mai (TBA)",
      topic: "Autentisering",
      details: "Etter arbeidstid med sosialt",
    },
    {
      date: "mai (TBA)",
      topic: "TBA",
    },
    {
      date: "juni (TBA)",
      topic: "Faggruppesamling",
    },
    {
      date: "juni (TBA)",
      topic: "Avsluttende oppgave",
    },
  ];

  return (
    <div>
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
              <td className="py-4 pl-4 font-bold text-zinc-300 lg:pr-20">
                {item.details}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}