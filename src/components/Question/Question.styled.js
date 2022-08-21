import styled from 'styled-components';

export const Button = styled.button`
  color: #000;
  background-color: white;
  transition: all 0.05s ease;

  &.active {
    color: #fff;
    background-color: ${p => (p.correct ? 'green' : 'red')};
  }

  &.should {
    background-color: orange;
  }
`;
