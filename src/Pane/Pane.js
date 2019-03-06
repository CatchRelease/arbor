import styled from '@emotion/styled';

import Grid from '../Grid';
import { createWithComponent } from '../utils';

const Pane = styled(
  createWithComponent(Grid, 'div', {
    defaultProps: {
      bg: 'background.white',
      boxShadow: 'elevation0'
    }
  })
)`
  width: 100%;
`;

export default Pane;
