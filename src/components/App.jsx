import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import myFile from '../rrrd2.csv';
import Question from './Question';

const state = {
  questions: [],
  questionsIds: [],
};

const REGEX = new RegExp('(.*?).(csv)$', 'i');

export const App = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(state);
  const [currentQuestion, setCurrentQuestion] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(myFile);
        const text = await resp.text();
        setFile(text);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function handleFile(e) {
    const newFile = e.target.files[0];

    if (newFile && REGEX.test(newFile.name)) {
      const reader = new FileReader();
      reader.onload = e => {
        setFile(e.target.result);
      };
      reader.readAsText(newFile);
    } else {
      alert('Файл не выбран либо его формат не поддерживается.');
    }
  }

  useEffect(() => {
    if (file) {
      file.split(/\r\n|\r|\n/).map(row => {
        if (row === '') {
          return null;
        }
        const id = nanoid(5);
        const newQuestion = { id };

        row.split(/;/).map((cell, i) => {
          switch (i) {
            case 0:
              return (newQuestion.eng = cell);
            case 1:
              return (newQuestion.rus = cell);
            case 2:
              return (newQuestion.example = cell);
            default:
              return newQuestion;
          }
        });
        return setData(prev => {
          return {
            ...prev,
            questions: [...prev.questions, newQuestion],
            questionsIds: [...prev.questionsIds, id],
          };
        });
      });
    }
  }, [file]);

  const startTask = () => {
    let newQuestion = [];

    for (let i = 1; newQuestion.length < 4; i += 1) {
      const currentIdx = Math.floor(
        Math.random() * (data.questionsIds.length - 1) + 1
      );
      if (!newQuestion.includes(data.questions[currentIdx])) {
        newQuestion = [...newQuestion, data.questions[currentIdx]];
      }
    }
    setCurrentQuestion(newQuestion);
  };

  return (
    <>
      <input type="file" name="readable" accept=".csv" onChange={handleFile} />
      <div id="preview">
        <button type="button" onClick={startTask}>
          START
        </button>
        <Question question={currentQuestion} startTask={startTask} />
      </div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
    </>
  );
};
