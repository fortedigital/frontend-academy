export default function Plan() {
  const planData = [
    {
      date: "02. februar 2023",
      topic: "Introduksjon med felles middag i kantinen etterpå.",
    },
    {
      date: "16. februar 2023",
      topic: "Hva leverer Forte? Verdier og strategier",
    },
    {
      date: "02. mars 2023",
      topic: "Faggruppesamling",
    },
    {
      date: "16. mars 2023",
      topic: "Kvalitetssikring på høyt nivå",
    },
    {
      date: "xx. april 2023",
      topic: "Universell utforming v. Kristoffer Lium (NRK)",
    },
    {
      date: "xx. april 2023",
      topic: "Faggruppesamling",
    },
    {
      date: "xx. mai 2023",
      topic: "Sikkerhet",
    },
    {
      date: "xx. mai 2023 (Etter arbeidstid med sosialt)",
      topic: "Autentisering",
    },
    {
      date: "xx. mai 2023",
      topic: "TBD",
    },
    {
      date: "xx. juni 2023",
      topic: "Faggruppesamling",
    },
    {
      date: "xx. juni 2023",
      topic: "Avsluttende oppgave",
    },
  ];

  return (
    <div className="">
      <h1 className="mb-6 text-2xl font-bold">Plan</h1>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Dato</th>
            <th>Tema</th>
          </tr>
        </thead>
        <tbody>
          {planData.map((item, index) => (
            <tr key={`plan-item_${index}`}>
              <td>{item.date}</td>
              <td>{item.topic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
