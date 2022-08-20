import { useState, useEffect, useMemo } from 'react';

const Question = ({ question }) => {
  const [example, setExample] = useState(null);

  const currentIdx = useMemo(() => {
    return Math.floor(Math.random() * (question.length - 1) + 1);
  }, [question]);

  const questionList = useMemo(() => {
    return [...question];
  }, [question]);

  useEffect(() => {
    setExample(null);
    for (let i = questionList.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));

      [questionList[i], questionList[j]] = [questionList[j], questionList[i]];
    }
  }, [question, questionList]);

  const handleClick = id => {
    if (question[currentIdx].id === id) {
      setExample(question[currentIdx].example);
    }
  };

  return (
    <>
      <p>{question[currentIdx]?.eng}</p>
      {questionList.map(q => {
        return (
          <button onClick={() => handleClick(q.id)} key={q.id}>
            {q.rus}
          </button>
        );
      })}
      <p>{example}</p>
    </>
  );
};

export default Question;
