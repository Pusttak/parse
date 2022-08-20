import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import myFile from '../rrrd2.csv';

const state = {
  questions: [],
  questionsIds: [],
};

// Регулярное выражение для проверки расширения файла.
const REGEX = new RegExp('(.*?).(csv)$', 'i');

export const App = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(state);
  const [currentQuestion, setCurrentQuestion] = useState('');

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

  // Функция, отрабатывающая при выборе файла.
  function handleFile(e) {
    // Выбираем первый файл из списка файлов.
    const newFile = e.target.files[0];

    // Если файл выбран и его расширение допустимо,
    // то читаем его содержимое и отправляем
    // в функцию отрисовки таблицы.
    if (newFile && REGEX.test(newFile.name)) {
      // Создаем экземпляр объекта.
      const reader = new FileReader();

      // Чтение файла асинхронное, поэтому
      // создание таблицы привязываем к событию `load`,
      // которое срабатывает при успешном завершении операции чтения.
      reader.onload = e => {
        setFile(e.target.result);
      };

      // Читаем содержимое как текстовый файл.
      reader.readAsText(newFile);
    } else {
      // Мизерная обработка ошибок.
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

  useEffect(() => {
    const hundlerQuestion = () => {
      const currentIdx = Math.floor(
        Math.random() * (data.questionsIds.length - 1) + 1
      );

      setCurrentQuestion(data.questions[currentIdx]?.eng);
    };

    hundlerQuestion();
  }, [data]);

  return (
    <>
      <input type="file" name="readable" accept=".csv" onChange={handleFile} />
      <div id="preview">
        {currentQuestion && currentQuestion}
        {/* {file && (
          <table className="table">
            <tbody>
              {file.split(/\r\n|\r|\n/).map((row, index) => {
                return (
                  <tr key={index}>
                    {row.split(/;/).map((cell, index) => (
                      <td key={index}>{cell}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )} */}
      </div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
    </>
  );
};
