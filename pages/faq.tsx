import Link from "next/link";

import Button from "components/Button";
import Icon from "components/Icon";

const questionsAndAnswers = [
  {
    question: "Når skal akademiet holdes? Konkret tidspunkt.",
    answer: "Svar",
  },
  {
    question: "Hva slags forkunnskaper må man ha?",
    answer: "Svar",
  },
  {
    question: "Går det utover fagtimer?",
    answer: "Svar",
  },
  {
    question: "Hva skal man lære?",
    answer: "Svar",
  },
];

export default function FAQ() {
  const QuestionText = ({ children }: { children?: React.ReactNode }) => (
    <h2 className="mb-2 text-lg font-bold">{children}</h2>
  );

  const AnswerText = ({ children }: { children?: React.ReactNode }) => (
    <p className="">{children}</p>
  );

  return (
    <div className="">
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
      <h1 className="mb-6 text-4xl font-bold">FAQ</h1>
      <ul className="flex flex-col gap-y-8">
        {questionsAndAnswers.map((item, index) => (
          <li key={index}>
            <QuestionText>{item.question}</QuestionText>
            <AnswerText>{item.answer}</AnswerText>
          </li>
        ))}
      </ul>
    </div>
  );
}
