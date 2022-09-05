import { useState, useEffect } from 'react';
import Menu from './Menu';
import Question from './Question';
import Box from 'components/Box';
import { dataParse } from 'hooks/dataParse';

const App = () => {
  const [newFile, setNewFile] = useState(null);
  const [state, setState] = useState(null);

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
      width="100vw"
      height="100vh"
      fontFamily="body"
      fontWeight="body"
      fontSize={2}
      lineHeight="body"
      color="text"
      bg="background"
    >
      <Menu setNewFile={setNewFile} />

      {state ? (
        <Question state={state} setState={setState} />
      ) : (
        'Choose an exercise to get started.'
      )}
    </Box>
  );
};

export default App;
