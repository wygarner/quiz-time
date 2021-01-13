import React from 'react';
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

const QeustionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestions}) => (
  <Wrapper>
    <div>
      <p className="number">
        Question: {questionNumber}
      </p>
      < p dangerouslySetInnerHTML={{__html: question }} />
      <div>
        {answers.map(answer => (
          <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: answer}} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </div>
  </Wrapper>
);

export default QeustionCard;