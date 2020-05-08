import React from 'react';

import Grid from '../Grid';

const StyledHeader = (props) => <Grid {...props} />;

StyledHeader.defaultProps = {
  as: 'header'
};

export default StyledHeader;
