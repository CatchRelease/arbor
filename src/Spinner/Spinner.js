import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';
import { withTheme, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { system } from 'styled-system';

import Box from '../Box';

const StyledSpinner = styled(Box)`
  ${system({
    diameter: {
      properties: ['width', 'height']
    }
  })}

  position: relative;
`;

const spinAnimation = keyframes`
  0%, 39%, 100% {
    opacity: 0.5;
    transform: scale(0.6);
  } 40% {
    opacity: 1; 
    transform: scale(1);
  }
`;

const StyledSpinnerDot = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: '';
    display: block;
    width: 15%;
    height: 15%;
    background-color: ${(props) => props.color};
    border-radius: 100%;
    animation: ${spinAnimation} 1.2s infinite ease-in-out both;
  }

  &:nth-child(1) {
    transform: rotate(30deg);
  }
  &:nth-child(2) {
    transform: rotate(60deg);
  }
  &:nth-child(3) {
    transform: rotate(90deg);
  }
  &:nth-child(4) {
    transform: rotate(120deg);
  }
  &:nth-child(5) {
    transform: rotate(150deg);
  }
  &:nth-child(6) {
    transform: rotate(180deg);
  }
  &:nth-child(7) {
    transform: rotate(210deg);
  }
  &:nth-child(8) {
    transform: rotate(240deg);
  }
  &:nth-child(9) {
    transform: rotate(270deg);
  }
  &:nth-child(10) {
    transform: rotate(300deg);
  }
  &:nth-child(11) {
    transform: rotate(330deg);
  }
  &:nth-child(1):before {
    animation-delay: -1.1s;
  }
  &:nth-child(2):before {
    animation-delay: -1s;
  }
  &:nth-child(3):before {
    animation-delay: -0.9s;
  }
  &:nth-child(4):before {
    animation-delay: -0.8s;
  }
  &:nth-child(5):before {
    animation-delay: -0.7s;
  }
  &:nth-child(6):before {
    animation-delay: -0.6s;
  }
  &:nth-child(7):before {
    animation-delay: -0.5s;
  }
  &:nth-child(8):before {
    animation-delay: -0.4s;
  }
  &:nth-child(9):before {
    animation-delay: -0.3s;
  }
  &:nth-child(10):before {
    animation-delay: -0.2s;
  }
  &:nth-child(11):before {
    animation-delay: -0.1s;
  }
`;

const Spinner = ({ children, color, spin, ...props }) => {
  const themedColor = themeGet(`colors.${color}`, color)(props);

  if (!spin) {
    return null;
  }

  return (
    <StyledSpinner {...{ color: themedColor, ...props }}>
      {[...Array(12).keys()].map((value) => (
        <StyledSpinnerDot key={value} color={themedColor} />
      ))}
    </StyledSpinner>
  );
};

Spinner.propTypes = {
  /**
   * All Spin.js options are supported as props via react-loader
   * https://www.npmjs.com/package/react-loader
   */

  /**
   * Content to render inside the loader when loaded
   * */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),

  /**
   * Color for the spinner, supports colors from theme.
   */
  color: PropTypes.string,

  /**
   * Whether or not to show the spinner.
   */
  spin: PropTypes.bool,

  diameter: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ])
};

Spinner.defaultProps = {
  children: undefined,
  color: 'monochrome.black',
  spin: true,
  diameter: '40px'
};

export default withTheme(Spinner);
