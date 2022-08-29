import { useState, useEffect } from 'react';
import FileLoader from './FileLoader';
import Question from './Question';
import Box from 'components/Box';
import { useDataMaker } from 'hooks/useDataMaker';
import ApiGetFile from 'services/api';
import myFile from 'data/rrrd2.csv';

const App = () => {
  const [state, setState] = useState(null);
  const [newFile, setNewFile] = useState(null);
  const data = useDataMaker(newFile);

  useEffect(() => {
    const localState = localStorage.getItem('questions');
    if (localState) {
      setState(JSON.parse(localState));
    } else {
      if (!newFile) {
        ApiGetFile(myFile).then(setNewFile);
      } else {
        setState(data);
      }
    }
  }, [data, newFile]);

  useEffect(() => {
    if (state) {
      localStorage.setItem('questions', JSON.stringify(state));
    }
  }, [state]);

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
      <FileLoader setNewFile={setNewFile} />
      {state && <Question state={state} setState={setState} />}
    </Box>
  );
};

export default App;
