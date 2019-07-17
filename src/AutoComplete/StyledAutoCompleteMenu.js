import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

import Card from '../Card';

const StyledAutoCompleteMenu = ({ innerProps, children, ...props }) => (
  <Card
    mt="smaller"
    position="absolute"
    top="100%"
    zIndex="1"
    {...{ ...innerProps, ...props }}
  >
    {children}
  </Card>
);

StyledAutoCompleteMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  innerProps: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withTheme(StyledAutoCompleteMenu);
