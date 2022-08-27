import styled from 'styled-components';
import {
  typography,
  space,
  color,
  layout,
  flexbox,
  border,
  shadow,
  position,
} from 'styled-system';

const Box = styled('div')(
  { gap: p => (p.gap ? p.gap : null) },
  typography,
  space,
  color,
  layout,
  flexbox,
  border,
  shadow,
  position
);

export default Box;
