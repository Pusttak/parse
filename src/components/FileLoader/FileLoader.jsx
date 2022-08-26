import { useEffect, useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';
import ApiGetFile from 'services/api';
import myFile from 'data/rrrd2.csv';
import { useDataMaker } from 'hooks/useDataMaker';
import { ButtonLoader } from './FileLoader.styled';
import Box from 'components/Box';

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
    <Box bg="muted" display="flex" justifyContent="flex-end" p={3}>
      <ButtonLoader>
        Upload File <IoMdCloudUpload />
        <input
          style={{ display: 'none' }}
          type="file"
          name="readable"
          accept=".csv"
          onChange={handleFile}
        />
      </ButtonLoader>
    </Box>
  );
};

export default FileLoader;
