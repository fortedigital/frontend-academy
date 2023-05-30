import Link from "next/link";

import Button from "components/Button";
import Icon from "components/Icon";
import Head from "next/head";

type QA = {
  question: string;
  answer: string;
};

const questionsAndAnswers: QA[] = [
  {
    question: "Når skal akademiet holdes?",
    answer:
      "Oppstart er 2. februar. Akademiet holdes i faggruppetiden, og det vil kjøres vanlig faggruppesamling hver 3. gang. Se tidsplan for mer detaljer.",
  },
  {
    question: "Hva slags forkunnskaper må man ha?",
    answer:
      "Det kan være en fordel om du har vært borti React og grunnleggende stilsetting med CSS, men dette er ingen krav. Alle som ønsker skal kunne melde seg på akademiet.",
  },
  {
    question: "Går det utover fagtimer?",
    answer:
      "Akademiet tar over for frontend-faggruppa de dagene det skal være sesjoner, så det skal være timeførbart på samme måte som faggrupper er.",
  },
  {
    question: "Når er påmeldingsfristen?",
    answer:
      "Det har vært stor interesse for akademiet, så vi tar dessverre ikke imot flere påmeldinger.",
  },
];

const QABlock = ({ item }: { item: QA }) => (
  <div className="py-6 first:pt-0 last:pb-0">
    <h2 className="mb-2 text-lg font-bold text-red-300">{item.question}</h2>
    <p>{item.answer}</p>
  </div>
);

export default function FAQ() {
  return (
    <div>
      <Head>
        <title>FAQ</title>
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
      <h1 className="mb-8 text-4xl font-bold">FAQ</h1>
      <div className="grid max-w-6xl divide-y divide-zinc-500">
        {questionsAndAnswers.map((item, index) => (
          <QABlock item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
