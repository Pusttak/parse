import { useState, useEffect } from 'react';

const Question = ({ question }) => {
  const [questionsList, setQuestionsList] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(null);
  const [example, setExample] = useState(null);

  useEffect(() => {
    setExample(null);
    const newQuestions = [...question];

    for (let i = newQuestions.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));

      [newQuestions[i], newQuestions[j]] = [newQuestions[j], newQuestions[i]];
    }
    setQuestionsList(newQuestions);
    setCurrentIdx(Math.floor(Math.random() * (question.length - 1) + 1));
  }, [question]);

  const handleClick = id => {
    if (questionsList[currentIdx].id === id) {
      setExample(questionsList[currentIdx].example);
    }
  };

  return (
    <>
      <p>{questionsList[currentIdx]?.eng}</p>
      {questionsList.map(q => {
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
