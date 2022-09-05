import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[3]}px;
`;

export const File = styled.button`
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  color: ${p => p.theme.colors.title};
  background-color: ${p => p.theme.colors.background};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
  border: solid 2px ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii[2]}px;
  transition: ${p => p.theme.transitions[0]};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.primary};
  }
`;
