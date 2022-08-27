import styled from 'styled-components';

const width = num => {
  if (num > 80) {
    return 'green';
  }
  if (num > 50) {
    return 'yellow';
  }
  return 'primary';
};

export const Indicator = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const IndicatorLilne = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  /* transform: translate(-50%); */
  background-color: ${p => p.theme.colors[width(p.width)]};
  height: 5px;
  width: ${p => p.width}%;
  transition: ${p => p.theme.transitions[0]};
`;
