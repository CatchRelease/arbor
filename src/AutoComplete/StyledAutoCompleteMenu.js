import PropTypes from 'prop-types';
import { withTheme } from '@emotion/react';

import Card from '../Card';

const StyledAutoCompleteMenu = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cx,
  innerProps,
  children,
  ...props
}) => (
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
  cx: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  innerProps: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withTheme(StyledAutoCompleteMenu);
