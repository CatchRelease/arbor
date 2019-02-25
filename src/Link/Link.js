import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { color } from 'styled-system';

import createWithComponent from '../utils/createWithComponent';
import Text from '../Text';

const baseStyles = css`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const variantStyles = ({ variant, theme: { colors } }) => {
  const variantMapping = {
    default: {
      color: colors.blue,
      '&:visited': {
        color: colors.blue
      },
      '&:hover': {
        color: colors.blueLight
      },
      '&:active': {
        color: colors.blueDark
      },
      '&:focus': {
        outline: `1px solid ${colors.blueDark}`
      }
    },
    muted: {
      color: colors.text.muted,
      '&:visited': {
        color: colors.text.muted
      },
      '&:hover': {
        color: colors.text.default
      },
      '&:active': {
        color: colors.text.dark
      },
      '&:focus': {
        outline: `1px solid ${colors.grey100}`
      }
    }
  };

  return variantMapping[variant];
};

const Link = styled(
  createWithComponent(Text, 'a', {
    variant: 'default'
  })
)`
  ${baseStyles};
  ${variantStyles};
  ${color};
`;

Link.propTypes = {
  variant: PropTypes.oneOf(['default', 'muted'])
};

export default Link;
