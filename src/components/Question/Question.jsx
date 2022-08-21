import { useState, useEffect } from 'react';
import { Button } from './Question.styled';

const Question = ({ question, startTask }) => {
  const [questionsList, setQuestionsList] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(null);
  const [example, setExample] = useState(null);
  const [isActive, setIsActive] = useState(false);

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

  const handleClick = (e, id) => {
    if (!isActive) {
      e.target.classList.add('active');
      if (questionsList[currentIdx].id === id) {
      } else {
        const should = document.querySelector(
          `[data-action=Q${questionsList[currentIdx].id}]`
        );
        should.classList.add('should');
      }
      setExample(questionsList[currentIdx].example);
      setIsActive(true);

      setTimeout(() => {
        document.querySelector('.active').classList.remove('active');
        const x = document.querySelector('.should');
        if (x) {
          x.classList.remove('should');
        }
        startTask();
        setIsActive(false);
      }, 2000);
    }
  };

  return (
    <>
      <p>{questionsList[currentIdx]?.eng}</p>
      {questionsList.map(q => {
        return (
          <Button
            onClick={e => handleClick(e, q.id)}
            key={q.id}
            correct={questionsList[currentIdx].id === q.id}
            data-action={`Q${q.id}`}
          >
            {q.rus}
          </Button>
        );
      })}
      <p>{example}</p>
    </>
  );
};

export default Question;
