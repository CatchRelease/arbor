import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Flex from '../Flex';

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

const StyledTab = styled(Flex)`
  cursor: pointer;
  outline: none;

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
  color: 'text.muted',
  flex: '1',
  fontSize: 'size4',
  justifyContent: 'center',
  overflow: 'hidden',
  py: 'regular',
  tabIndex: '0',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

export default StyledTab;
