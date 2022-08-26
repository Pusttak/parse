import styled from 'styled-components';

export const ButtonLoader = styled.label`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii[0]}px;
  cursor: pointer;

  color: ${p => p.theme.colors.muted};
  background-color: ${p => p.theme.colors.text};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii[1]}px;
  transition: ${p => p.theme.transitions[0]};

  &:hover {
    background-color: ${p => p.theme.colors.title};
  }

  & svg {
    display: block;
    font-size: ${p => p.theme.fontSizes[5]}px;
    margin-left: ${p => p.theme.space[2]}px;
  }
`;
