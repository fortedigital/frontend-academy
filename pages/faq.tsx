import Link from "next/link";

import Button from "components/Button";
import Icon from "components/Icon";

type QA = {
  question: string;
  answer: string;
};

const questionsAndAnswers: QA[] = [
  {
    question: "Når skal akademiet holdes? Konkret tidspunkt.",
    answer: "Svar",
  },
  {
    question: "Hva skal man lære?",
    answer: "Svar",
  },
  {
    question: "Hva slags forkunnskaper må man ha?",
    answer:
      "Det kan være en fordel om du har vært borti React og grunnleggende stilsetting med CSS, men dette er ingen krav. Alle som ønsker skal kunne melde seg på akademiet.",
  },
  {
    question: "Går det utover fagtimer?",
    answer:
      "Akademiet tar over for frontend-faggruppa de dagene det skal være sesjoner, så det skal være timeførbart på samme måte som faggrupper er. Det blir ca. én vanlig faggruppe per to akademisesjoner.",
  },
];

const QuestionText = ({ children }: { children: string }) => (
  <h2 className="mb-2 text-lg font-bold text-red-300">{children}</h2>
);

const AnswerText = ({ children }: { children: string }) => (
  <p className="">{children}</p>
);

const QABlock = ({ item }: { item: QA }) => (
  <div className="py-6 first:pt-0 last:pb-0">
    <QuestionText>{item.question}</QuestionText>
    <AnswerText>{item.answer}</AnswerText>
  </div>
);

export default function FAQ() {
  return (
    <div>
      <Link href="/">
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
