import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet(
  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
  10
);

export const dataParse = file => {
  let data = [];

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

    return (data = [...data, newQuestion]);
  });

  return data;
};
