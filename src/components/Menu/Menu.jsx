import { useState } from 'react';
import { BsMenuUp } from 'react-icons/bs';
import Box from 'components/Box';
import FileLoader from 'components/FileLoader';
import FilesList from 'components/FilesList';
import IconButton from 'components/IconButton';
import { FileName } from './Menu.styled';

const Menu = ({ setNewFile, fileName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      position="relative"
      bg="muted"
      display="flex"
      justifyContent="space-between"
      p={3}
      height="56px"
      pl={[4]}
      pr={[4]}
    >
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <BsMenuUp size={28} color="inherit" />
      </IconButton>
      <FileName>{fileName}</FileName>
      {isOpen && (
        <Box
          position="absolute"
          left="0"
          top="100%"
          padding={[4]}
          width="100%"
          bg="muted"
          borderTop="2px solid"
          borderColor="background"
        >
          <FilesList setNewFile={setNewFile} />
        </Box>
      )}
      <FileLoader setNewFile={setNewFile} setIsOpen={setIsOpen} />
    </Box>
  );
};

export default Menu;
