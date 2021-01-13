import React, { useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionState } from './API'
import QuestionCard from './components/QuestionCard'
import { GlobalStyles, Wrapper } from './App.styles'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.HARD
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <div className="App">
          <h1 className="header">Quiz Time</h1>
          {gameOver ? (
            <>
              <p>Hello, it is quiz time. Press the button below to begin.</p>
              <button className="start" onClick={startTrivia}>
                <text style={{ color: '#000' }}>Start Quiz</text>
              </button>
            </>
          ) : null}
          {userAnswers.length === TOTAL_QUESTIONS ? (
            <>
            <p>Yikes. Better luck next time.</p>
            <button className="start" onClick={startTrivia}>
              <text style={{ color: '#000' }}>Start Quiz</text>
            </button>
            </>
          ) : null}
          {!gameOver ? <p className="score">Score: {score} / {TOTAL_QUESTIONS}</p> : null}
          {loading ? <p>Loading ...</p> : null}
          {!loading && !gameOver && (
            <QuestionCard
              questionNumber={number + 1} 
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            /> 
          )}
          {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next
            </button>
          ) : null}
        </div>
      </Wrapper>
    </>
  );
}

export default App;
