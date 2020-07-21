import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Flex from '../Flex';
import { inputStyles } from '../Input';

const StyledFlex = styled(Flex)`
  ${inputStyles};
`;

const StyledAutoCompleteControl = ({
  cx,
  innerRef,
  innerProps,
  children,
  ...props
}) => (
  <StyledFlex ref={innerRef} {...{ ...innerProps, ...props }}>
    {children}
  </StyledFlex>
);

StyledAutoCompleteControl.propTypes = {
  cx: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  innerProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  innerRef: PropTypes.func.isRequired
};

export default StyledAutoCompleteControl;
