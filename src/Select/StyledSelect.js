import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { createWithComponent } from '../utils';
import StyledInput from '../Input/StyledInput';

const StyledSelectInput = styled(createWithComponent(StyledInput, 'select'))`
  appearance: none;
`;

const StyledSelectWrapper = styled.div`
  position: relative;

  &:after {
    align-items: center;
    bottom: 0;
    color: ${props => props.theme.colors.icon.default};
    content: '${props => props.theme.icons.caret}';
    display: flex;
    font-family: ${props => props.theme.fonts.icon};
    font-size: ${props => props.theme.fontSizes.size5};
    position: absolute;
    right: ${props => props.theme.space.smaller};
    top: 0;
  }
`;

const StyledSelect = ({ children, ...props }) => {
  const { large } = props;

  return (
    <StyledSelectWrapper large={large}>
      <StyledSelectInput {...props}>{children}</StyledSelectInput>
    </StyledSelectWrapper>
  );
};

StyledSelect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default StyledSelect;
