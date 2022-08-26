import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  color: ${p => p.theme.colors.title};
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px
    ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
  border: none;
  border-radius: ${p => p.theme.radii[1]}px;
  transition: ${p => p.theme.transitions[0]};
  cursor: pointer;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 0;
    height: 400%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: ${p => p.theme.transitions[0]};
    transform: translate(0, -50%);
  }

  &:hover:hover:before {
    width: 100%;
  }

  & svg {
    display: block;
    font-size: ${p => p.theme.fontSizes[5]}px;
    margin-left: auto;
  }
`;
