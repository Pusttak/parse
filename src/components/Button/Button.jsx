import { ButtonStyled } from './Button.styled';

const Button = ({
  children,
  icon: Icon,
  type = 'button',
  ...rest
}) => {
  return (
    <ButtonStyled type={type} {...rest}>
      {children}
      <Icon />
    </ButtonStyled>
  );
};

export default Button;
