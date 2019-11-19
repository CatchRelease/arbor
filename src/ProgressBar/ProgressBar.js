/** @jsx jsx */
import React from 'react';

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Box from '../Box';
import Flex from '../Flex';
import Icon from '../Icon';
import Text from '../Text';

// const variantStyles = ({ variant, theme  }) => {
const variantStyles = ({ variant, theme, ...props }) => {
  console.log('variant', variant);
  const variantMapping = {
    // default: css`
    //   border-radius: ${theme.radii.large};
    //
    //   & progress {
    //     -webkit-appearance: none;
    //     background-color: ${theme.colors.monochrome.grey40};
    //     height: 4px;
    //     border: none;
    //     border-radius: ${theme.radii.large};
    //
    //     &::-webkit-progress-bar {
    //       color: "blue",
    //       backgroundColor: "red",
    //       borderRadius: ${theme.radii.large}
    //     },
    //
    //     &::-webkit-progress-value {
    //       color: ${theme.colors.default};
    //       backgroundColor: ${theme.colors.default};
    //       borderRadius: ${theme.radii.large};
    //     }
    //   }
    // `,
    default: {
      // color: "green",
      // color: theme.colors.default,

      '& progress': {
        '-webkit-appearance': 'none',
        color: theme.colors.default,
        backgroundColor: theme.colors.monochrome.grey40,
        height: '4px',
        border: 'none',
        borderRadius: theme.radii.large

        // '&::-webkit-progress-value': {
        //   color: theme.colors.default,
        //   // backgroundColor: "red",
        //   borderRadius: theme.radii.large
        // },
      },

      '& progress::-webkit-progress-value': {
        color: theme.colors.default,
        // backgroundColor: "red",
        borderRadius: theme.radii.large
      },

      '& progress::-webkit-progress-bar': {
        color: theme.colors.default,
        // backgroundColor: "red",
        borderRadius: theme.radii.large
      },

      '& progress::-moz-progress-bar': {
        backgroundColor: theme.colors.default,
        // backgroundColor: "red",
        borderRadius: theme.radii.large
      }
    }
  };

  return variantMapping.default;
  // return variantMapping[variant];
};

const ProgressBarContainer = styled(Flex)`
  ${variantStyles};
  color: ${props => props.theme.colors.default};
  max-width: 100%;
  align-items: center;
`;

const Bar = styled(Box.withComponent('progress'))`
  flex: 1;
`;

const IndicatorIcon = styled(Icon)`
  flex: 0;
`;

const percentageText = (value, max) => {
  let percentage;

  if (!value || !max) {
    percentage = 0;
  } else {
    percentage = Math.round(parseInt(value, 10) / parseInt(max, 10));
  }

  return (
    <Text flex="0" ml="smaller" fontSize="size3" fontWeight="medium">
      {percentage}%
    </Text>
  );
};

const ProgressBar = ({
  value,
  max,
  indicatorIconName,
  showPercentage,
  variant
}) => {
  console.log('hello?', value, max, indicatorIconName, showPercentage, variant);
  return (
    <ProgressBarContainer>
      <Bar {...{ value, max }} />
      {indicatorIconName && (
        <Icon ml="smaller" flex="0" fontSize="size4" name={indicatorIconName} />
      )}
      {showPercentage && percentageText(value, max)}
    </ProgressBarContainer>
  );
};

ProgressBar.propTypes = {
  /* Show the percentage complete, or not */
  showPercentage: PropTypes.bool,

  /* Name of the icon to use as the indicator, if desired. */
  indicatorIconName: PropTypes.string,

  /* ProgressBar variant */
  variant: PropTypes.oneOf(['default']),

  /* Current value */
  value: PropTypes.string.isRequired,

  /* Maximum value /*/
  max: PropTypes.string.isRequired
};

ProgressBar.defaultProps = {
  // ...Flex.defaultProps,
  showPercentage: false,
  indicatorIconName: null,
  variant: 'default'
};

export default ProgressBar;
