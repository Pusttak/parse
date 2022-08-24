import { useEffect, useState } from 'react';

export const useAnswersMixer = answerList => {
  const [answerMixedList, setAnswerMixedList] = useState([]);

  useEffect(() => {
    const newList = [...answerList];

    for (let i = newList.length - 1; i >= 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));
      [newList[i], newList[j]] = [newList[j], newList[i]];
    }
    setAnswerMixedList(newList);
  }, [answerList]);

  return answerMixedList;
};
