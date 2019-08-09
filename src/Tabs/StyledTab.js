import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Box from '../Box';

const activeStyles = ({ active, theme }) => {
  const color = theme.colors.intent.brand.dark;

  return (
    active &&
    css`
      color: ${color};
      border-color: ${color};

      &:focus,
      &:hover {
        background: transparent;
      }
    `
  );
};

const StyledTab = styled(Box)`
  cursor: pointer;
  outline: none;

  &:last-child {
    margin-right: 0;
  }

  &:focus,
  &:hover {
    background: ${props => props.theme.colors.background.muted};
  }

  ${activeStyles};
`;

StyledTab.propTypes = {
  active: PropTypes.bool,
  tabIndex: PropTypes.string
};

StyledTab.defaultProps = {
  active: false,
  alignItems: 'center',
  borderBottom: '2px solid transparent',
  borderColor: 'border.default',
  color: 'text.muted',
  display: 'inline-block',
  fontSize: 'size4',
  justifyContent: 'center',
  mb: '-4px',
  mr: 'regular',
  overflow: 'hidden',
  py: 'regular',
  tabIndex: '0',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

export default StyledTab;
