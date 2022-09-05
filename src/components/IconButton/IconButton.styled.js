import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.text};
  background-color: transparent;
  padding: ${p => p.theme.space[2]}px;
  border: 2px solid ${p => p.theme.colors.title};
  border-radius: ${p => p.theme.radii[1]}px;
  transition: ${p => p.theme.transitions[0]};
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.title};
    border: 2px solid ${p => p.theme.colors.text};
  }

  & svg {
    display: block;
  }
`;
