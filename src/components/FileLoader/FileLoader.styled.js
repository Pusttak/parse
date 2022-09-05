import styled from 'styled-components';

export const ButtonLoader = styled.label`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.muted};
  background-color: ${p => p.theme.colors.text};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii[1]}px;
  transition: ${p => p.theme.transitions[0]};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.title};
  }

  & svg {
    display: block;
    font-size: ${p => p.theme.fontSizes[5]}px;
    margin-left: ${p => p.theme.space[2]}px;
  }

  @media screen and (max-width: 400px) {
    display: none;
  }
`;
