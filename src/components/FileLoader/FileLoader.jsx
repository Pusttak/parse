import { useEffect, useState } from 'react';
import ApiGetFile from 'services/api';
import myFile from 'data/rrrd2.csv';
import { useDataMaker } from 'hooks/useDataMaker';

const REGEX = new RegExp('(.*?).(csv)$', 'i');

const FileLoader = ({ setData }) => {
  const [newFile, setNewFile] = useState(null);
  const data = useDataMaker(newFile);

  useEffect(() => {
    ApiGetFile(myFile).then(setNewFile);
  }, []);

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  function handleFile(e) {
    const newFile = e.target.files[0];

    if (newFile && REGEX.test(newFile.name)) {
      const reader = new FileReader();
      reader.onload = e => {
        setNewFile(e.target.result);
      };
      reader.readAsText(newFile);
    } else {
      alert('Upload CSV File');
    }
  }

  return (
    <input
      type="file"
      name="readable"
      accept=".csv"
      onChange={handleFile}
    />
  );
};

export default FileLoader;
