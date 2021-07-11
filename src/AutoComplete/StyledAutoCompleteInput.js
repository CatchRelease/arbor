import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Flex from '../Flex';

const StyledFlex = styled(Flex)`
  font-family: ${({ theme }) => theme.brandFont};
  font-size: ${({ theme }) => theme.fontSizes.size4};

  &:focus {
    outline: none;
  }
`;

const StyledAutoCompleteInput = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cx,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getStyles,
  innerProps,
  innerRef,
  isDisabled,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isHidden,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  theme,
  ...props
}) => {
  return (
    <StyledFlex
      as="input"
      border="none"
      flex="1"
      disabled={isDisabled}
      ref={innerRef}
      {...{ ...innerProps, ...props }}
    />
  );
};

StyledAutoCompleteInput.propTypes = {
  cx: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired,
  innerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  innerRef: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isHidden: PropTypes.bool,
  selectProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

StyledAutoCompleteInput.defaultProps = {
  innerProps: {},
  isHidden: undefined,
  isDisabled: undefined
};

export default StyledAutoCompleteInput;
