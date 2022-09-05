import { Button } from './IconButton.styled';

const IconButton = ({ children, type = 'button', onClick }) => {
  return (
    <Button onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

export default IconButton;
