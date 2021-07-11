import PropTypes from 'prop-types';

import Grid from '../Grid';

const StyledAutoCompleteIndicatorsContainer = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cx,
  innerProps,
  children,
  ...props
}) => (
  <Grid
    alignItems="center"
    gridAutoFlow="column"
    gridGap="smaller"
    {...{ ...innerProps, ...props }}
  >
    {children}
  </Grid>
);

StyledAutoCompleteIndicatorsContainer.propTypes = {
  cx: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  innerProps: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

StyledAutoCompleteIndicatorsContainer.defaultProps = {
  innerProps: {}
};

export default StyledAutoCompleteIndicatorsContainer;
