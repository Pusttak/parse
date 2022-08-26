import { useState } from 'react';
import FileLoader from './FileLoader';
import Question from './Question';
import Box from 'components/Box';

const App = () => {
  const [data, setData] = useState(null);

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
      <FileLoader setData={setData} />
      {data && <Question data={data} setData={setData} />}
    </Box>
  );
};

export default App;
