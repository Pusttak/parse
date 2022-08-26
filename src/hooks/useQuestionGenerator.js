import { useState, useEffect, useMemo } from 'react';

export const useQuestionGenerator = data => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answerList, setAnswerList] = useState([]);
  // const [endList, setEndList] = useState(false);
  const lastQuestions = useMemo(
    () => data.questions.filter(q => q.answerCounter < 3),
    [data]
  );

  useEffect(() => {
    if (lastQuestions.length > 0) {
      // setEndList(false);

      const currentIdx = Math.floor(
        Math.random() * lastQuestions.length
      );
      setCurrentQuestion(lastQuestions[currentIdx]);
    } else {
      // alert('OVER');
      // setEndList(true);
    }
  }, [lastQuestions]);

  useEffect(() => {
    if (currentQuestion) {
      let newAnswersList = [currentQuestion];
      for (let i = 1; newAnswersList.length < 6; i += 1) {
        const currentIdx = Math.floor(
          Math.random() * data.questions.length
        );
        const currentAnswer = data.questions[currentIdx];

        if (!newAnswersList.includes(currentAnswer)) {
          newAnswersList = [...newAnswersList, currentAnswer];
        }
      }
      setAnswerList(newAnswersList);
    }
  }, [data, currentQuestion]);

  return { currentQuestion, answerList };
};
