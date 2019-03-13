import styled from '@emotion/styled';

import Grid from '../Grid';

const Pane = styled(Grid)`
  width: 100%;
`;

Pane.defaultProps = {
  bg: 'background.white',
  boxShadow: 'elevation0'
};

export default Pane;
