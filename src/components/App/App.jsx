import { useState } from 'react';
import FileLoader from '../FileLoader';
import Question from '../Question';

const App = () => {
  const [data, setData] = useState(null);

  return (
    <>
      <FileLoader setData={setData} />
      <div id="preview">
        {data && <Question data={data} setData={setData} />}
      </div>
    </>
  );
};

export default App;
