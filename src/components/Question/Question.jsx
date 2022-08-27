import { useState, useMemo } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { Title, Answer, Example } from './Question.styled';
import { useQuestionGenerator, useAnswersMixer } from 'hooks';
import SuccessIndicator from 'components/SuccessIndicator';
import Button from 'components/Button';
import Box from 'components/Box';

const Question = ({ data, setData }) => {
  const { currentQuestion, answerList, lastQuestions } =
    useQuestionGenerator(data);
  const answerMixedList = useAnswersMixer(answerList);
  const [example, setExample] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const currentLang = useMemo(
    () => currentQuestion?.answerCounter % 2 === 0,
    [currentQuestion]
  );

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
    // setExample(null);
    setData(prev => {
      localStorage.setItem('questions', JSON.stringify(data));
      return { ...prev };
    });
  };

  return (
    answerList.length > 0 && (
      <Box
        p={[3, 4, 5]}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Title>
          {currentLang ? currentQuestion?.eng : currentQuestion?.rus}
        </Title>
        <SuccessIndicator
          all={data.questions.length}
          last={lastQuestions.length}
        />
        <Box
          display="flex"
          justifyContent="center"
          alignContent="flex-start"
          flexWrap="wrap"
          width={[1, 3 / 4, 1 / 2]}
          gap="8px"
          mb={5}
          p={[3, 4, 4]}
          bg="muted"
          borderRadius={2}
        >
          {answerMixedList.map(answer => {
            return (
              <Answer
                type="button"
                onClick={e => handleClick(e, answer.id)}
                key={answer.id}
                correct={currentQuestion.id === answer.id}
                id={`${answer.id}`}
              >
                {!currentLang ? answer.eng : answer.rus}
              </Answer>
            );
          })}
        </Box>
        {isActive && (
          <>
            <Example>{example}</Example>
            <Button onClick={start} icon={MdOutlineNavigateNext}>
              Next
            </Button>
          </>
        )}
      </Box>
    )
  );
};

export default Question;
