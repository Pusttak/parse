import { useState } from 'react';
import Box from 'components/Box';
import FileLoader from 'components/FileLoader';
import FilesList from 'components/FilesList';
import {} from './Menu.styled';

const Menu = ({ setNewFile }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box
      bg="muted"
      display="flex"
      justifyContent="space-between"
      p={3}
      height="56px"
    >
      <p
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Menu
      </p>
      {isOpen && (
        <Box
          position="absolute"
          left="0"
          top="36px"
          padding="25px"
          // height="25%"
          // width="200px"
          bg="white"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <FilesList setNewFile={setNewFile} />
        </Box>
      )}
      {true && <FileLoader setNewFile={setNewFile} />}
    </Box>
  );
};

export default Menu;
