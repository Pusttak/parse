import { useState } from 'react';
import { Button } from './Question.styled';
import { useQuestionGenerator, useAnswersMixer } from 'hooks';

const Question = ({ data, setData }) => {
  const { currentQuestion, answerList } = useQuestionGenerator(data);
  const answerMixedList = useAnswersMixer(answerList);
  const [example, setExample] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e, id) => {
    if (!isActive) {
      const correctAnswer = currentQuestion.id;
      e.target.classList.add('active');

      if (id === correctAnswer) {
        answerMixedList.map(answer => {
          if (answer.id === correctAnswer) {
            return {
              ...answer,
              answerCounter: (answer.answerCounter += 1),
            };
          } else {
            return answer;
          }
        });
      } else {
        answerMixedList.map(answer => {
          if (answer.id === correctAnswer) {
            return {
              ...answer,
              answerCounter:
                answer.answerCounter > 0
                  ? (answer.answerCounter -= 1)
                  : 0,
            };
          } else {
            return answer;
          }
        });

        const shouldAnswer = document.querySelector(
          `#${correctAnswer}`
        );
        shouldAnswer.classList.add('should');
      }

      setExample(currentQuestion.example);
      setIsActive(true);
    }
  };

  const start = () => {
    document.querySelector('.active').classList.remove('active');
    const shouldAnswer = document.querySelector('.should');

    if (shouldAnswer) {
      shouldAnswer.classList.remove('should');
    }
    setIsActive(false);
    setExample(null);

    setData(prev => {
      return { ...prev };
    });
  };

  return (
    <>
      <p>{currentQuestion?.eng}</p>
      {answerMixedList.map(answer => {
        return (
          <Button
            onClick={e => handleClick(e, answer.id)}
            key={answer.id}
            correct={currentQuestion.id === answer.id}
            id={`${answer.id}`}
          >
            {answer.rus}
          </Button>
        );
      })}
      <p>{example}</p>
      <button type="button" onClick={start} disabled={!isActive}>
        Next
      </button>
    </>
  );
};

export default Question;
