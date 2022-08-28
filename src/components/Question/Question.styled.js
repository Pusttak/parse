import styled from 'styled-components';

export const Title = styled.p`
  color: ${p => p.theme.colors.title};
  font-size: ${p => p.theme.fontSizes[6]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  margin-bottom: ${p => p.theme.space[5]}px;
  text-align: center;
`;

export const Answer = styled.button`
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  color: ${p => p.theme.colors.title};
  background-color: transparent;

  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
  border: solid 2px ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii[2]}px;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.text};
  }

  &.active {
    background-color: ${p =>
      p.correct ? p.theme.colors.green : p.theme.colors.red};
    border: solid 2px
      ${p => (p.correct ? p.theme.colors.green : p.theme.colors.red)};
    transition: ${p => p.theme.transitions[0]};
  }

  &.should {
    color: ${p => p.theme.colors.muted};
    background-color: ${p => p.theme.colors.yellow};
    border: solid 2px ${p => p.theme.colors.yellow};
    transition: ${p => p.theme.transitions[0]};
  }
`;

export const Example = styled.p`
  text-align: center;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
