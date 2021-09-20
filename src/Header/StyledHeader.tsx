import Grid, { GridProps } from '../Grid';

const StyledHeader = (props: GridProps) => <Grid {...props} />;

StyledHeader.defaultProps = {
  as: 'header'
};

export default StyledHeader;
