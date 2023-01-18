export default function Plan() {
  const planData = [
    {
      date: "01.01.23",
      topic: "Introduksjon",
    },
    {
      date: "01.01.23",
      topic: "Introduksjon",
    },
    {
      date: "01.01.23",
      topic: "Introduksjon",
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
