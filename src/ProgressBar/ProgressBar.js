/** @jsx jsx */
import React from 'react';

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Box from '../Box';
import Flex from '../Flex';
import Icon from '../Icon';
import Text from '../Text';

const ProgressBarContainer = styled(Flex)`
  border-radius: ${props => props.theme.radii.large};
  height: 16px;
  max-width: 100%;
  align-items: center;
`;

const BarBackground = styled(Box)`
  height: 100%;
  flex: 1;
  background-color: ${props => props.theme.colors.monochrome.grey40};
  height: ${props => props.theme.space.smallest};
  border-radius: inherit;
`;
const BarForeground = styled(Box)`
  height: 100%;
  background-color: ${props => props.theme.colors.text.default};
  border-radius: inherit;
`;

const percentageText = percentage => (
  <Text flex="0" ml="smaller" fontSize="size3" fontWeight="medium">
    {percentage}%
  </Text>
);

const ProgressBar = ({ percentage, iconEndName, showPercentage, ...props }) => {
  return (
    <ProgressBarContainer {...props}>
      <BarBackground className="bar-background">
        <BarForeground
          className="bar-foreground"
          css={css`
            width: ${percentage}%;
          `}
        />
      </BarBackground>
      {iconEndName && (
        <Icon ml="smaller" flex="0" fontSize="size4" name={iconEndName} />
      )}
      {showPercentage && percentageText(percentage)}
    </ProgressBarContainer>
  );
};

ProgressBar.propTypes = {
  /* Show the percentage complete, or not */
  showPercentage: PropTypes.bool,

  /* Name of the icon to use as the indicator, if desired. */
  iconEndName: PropTypes.string,

  /* The actual current percentage completed */
  percentage: PropTypes.number.isRequired
};

ProgressBar.defaultProps = {
  ...Flex.defaultProps,
  showPercentage: false,
  iconEndName: null
};

export default ProgressBar;
