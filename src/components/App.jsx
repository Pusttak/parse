import { useState, useEffect } from 'react';
import myFile from '../rrrd2.csv';

// Регулярное выражение для проверки расширения файла.
const REGEX = new RegExp('(.*?).(csv)$', 'i');

export const App = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});

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
      setData({});
      file.split(/\r\n|\r|\n/).map((row, index) => {
        setData(prev => {
          return { ...prev, [index]: {} };
        });
        return row.split(/;/).map((cell, i) => {
          return setData(prev => {
            switch (i) {
              case 0:
                return { ...prev, [index]: { ...prev[index], eng: cell } };
              case 1:
                return { ...prev, [index]: { ...prev[index], ru: cell } };
              case 2:
                return {
                  ...prev,
                  [index]: { ...prev[index], example: cell },
                };
              default:
                return { ...prev };
            }
          });
        });
      });
    }
  }, [file]);

  // console.log(data);

  return (
    <>
      <input type="file" name="readable" accept=".csv" onChange={handleFile} />
      <div id="preview">
        {file && (
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
        )}
      </div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
    </>
  );
};
