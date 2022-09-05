import { useState, useEffect } from 'react';
import Menu from './Menu';
import Question from './Question';
import Box from 'components/Box';
import { dataParse } from 'hooks/dataParse';

const App = () => {
  const [newFile, setNewFile] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    const localFile = localStorage.getItem('currentFile');
    if (localFile) {
      setNewFile(JSON.parse(localFile));
    }
  }, []);

  useEffect(() => {
    if (newFile) {
      const localData = localStorage.getItem('appState');
      if (localData) {
        const localState = JSON.parse(localData);
        if (localState[newFile.name]) {
          setState(localState[newFile.name]);
        } else {
          setState(dataParse(newFile.data));
          localStorage.setItem(
            'appState',
            JSON.stringify({
              ...localState,
              [newFile.name]: [...dataParse(newFile.data)],
            })
          );
        }
      } else {
        setState(dataParse(newFile.data));
        localStorage.setItem(
          'appState',
          JSON.stringify({
            [newFile.name]: [...dataParse(newFile.data)],
          })
        );
      }
    }
  }, [newFile]);

  useEffect(() => {
    if (state) {
      localStorage.setItem('currentFile', JSON.stringify(newFile));
      const localState = JSON.parse(localStorage.getItem('appState'));
      localStorage.setItem(
        'appState',
        JSON.stringify({
          ...localState,
          [newFile.name]: [...state],
        })
      );
    }
  }, [newFile, state]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100vw"
      height="100vh"
      fontFamily="body"
      fontWeight="body"
      fontSize={2}
      lineHeight="body"
      color="text"
      bg="background"
    >
      <Menu setNewFile={setNewFile} fileName={newFile?.name} />

      {state ? (
        <Question state={state} setState={setState} />
      ) : (
        <h3
          style={{
            display: 'inline-flex',
            margin: '10% auto',
            padding: '80px',
            border: '3px solid #303135',
            borderRadius: '12px',
          }}
        >
          Choose an exercise to get started.
        </h3>
      )}
    </Box>
  );
};

export default App;
