import { IoMdCloudUpload } from 'react-icons/io';
import { ButtonLoader } from './FileLoader.styled';
// import Box from 'components/Box';

const REGEX = new RegExp('(.*?).(csv)$', 'i');

const FileLoader = ({ setNewFile, setIsOpen }) => {
  function handleFile(e) {
    setIsOpen(false);
    const uploadedFile = e.target.files[0];

    if (uploadedFile && REGEX.test(uploadedFile.name)) {
      const reader = new FileReader();
      // localStorage.removeItem('questions');
      reader.onload = e => {
        setNewFile({
          name: uploadedFile.name.replace(/\..+$/, ''),
          data: e.target.result,
        });
      };
      reader.readAsText(uploadedFile);
    } else {
      alert('Upload CSV File');
    }
  }

  return (
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
  );
};

export default FileLoader;
