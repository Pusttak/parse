import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: relative;
  display: flex;
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

  &:hover {
    transform: scale(1.06);
  }

  & svg {
    display: block;
    font-size: ${p => p.theme.fontSizes[5]}px;
    margin-left: auto;
  }
`;
