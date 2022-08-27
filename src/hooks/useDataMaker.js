import { useState, useEffect } from 'react';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet(
  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
  8
);

const initialState = {
  questions: [],
  // questionsIds: [],
};

export const useDataMaker = file => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    setData(initialState);
    if (file) {
      file.split(/\r\n|\r|\n/).map(row => {
        if (row === '') {
          return null;
        }
        const id = nanoid();
        const newQuestion = { id, answerCounter: 0 };

        row.split(/;/).map((cell, idx) => {
          switch (idx) {
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
            // questionsIds: [...prev.questionsIds, id],
          };
        });
      });
    }
  }, [file]);

  return data;
};
