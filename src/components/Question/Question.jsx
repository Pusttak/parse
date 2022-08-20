const Question = ({ question }) => {
  const questionList = [...question];
  const currentIdx = Math.floor(Math.random() * (question.length - 1) + 1);

  for (let i = questionList.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1));

    [questionList[i], questionList[j]] = [questionList[j], questionList[i]];
  }

  const handleClick = id => {
    console.log(question[currentIdx].id === id);
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
    </>
  );
};

export default Question;
