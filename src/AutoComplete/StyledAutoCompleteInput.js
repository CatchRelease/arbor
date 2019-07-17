import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Flex from '../Flex';

const StyledFlex = styled(Flex)`
  font-family: ${({ theme }) => theme.brandFont};
  font-size: ${({ theme }) => theme.fontSizes.size4};
`;

const StyledAutoCompleteInput = ({ innerRef, innerProps, ...props }) => (
  <StyledFlex
    as="input"
    border="none"
    flex="1"
    ref={innerRef}
    {...{ ...innerProps, ...props }}
  />
);

StyledAutoCompleteInput.propTypes = {
  innerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  innerRef: PropTypes.func.isRequired
};

StyledAutoCompleteInput.defaultProps = {
  innerProps: {}
};

export default StyledAutoCompleteInput;
