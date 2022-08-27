import { useState, useEffect, useMemo } from 'react';

export const useQuestionGenerator = data => {
  const [answerList, setAnswerList] = useState([]);
  const lastQuestions = useMemo(
    () => data.questions.filter(q => q.answerCounter < 6),
    [data]
  );

  const currentQuestion = useMemo(() => {
    const currentIdx = Math.floor(
      Math.random() * lastQuestions.length
    );
    return lastQuestions[currentIdx];
  }, [lastQuestions]);

  // useEffect(() => {
  //   if (lastQuestions.length > 0) {
  //   } else {
  //   }
  // }, [lastQuestions]);

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

  return { currentQuestion, answerList, lastQuestions };
};
