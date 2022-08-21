import styled from 'styled-components';

export const Button = styled.button`
  &.isActive {
    background-color: ${p => (p.correct ? 'green' : 'red')};
  }
`;
