import styled from 'styled-components';

export const FileName = styled.div`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  margin-left: ${p => p.theme.space[4]}px;
  margin-right: auto;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
