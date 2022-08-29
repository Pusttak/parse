import { IoMdCloudUpload } from 'react-icons/io';
import { ButtonLoader } from './FileLoader.styled';
import Box from 'components/Box';

const REGEX = new RegExp('(.*?).(csv)$', 'i');

const FileLoader = ({ setNewFile }) => {
  function handleFile(e) {
    const uploadedFile = e.target.files[0];

    if (uploadedFile && REGEX.test(uploadedFile.name)) {
      const reader = new FileReader();
      localStorage.removeItem('questions');
      reader.onload = e => {
        setNewFile(e.target.result);
      };
      reader.readAsText(uploadedFile);
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
