import { FC } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Box from '../Box';
import Flex from '../Flex';
import Icon from '../Icon';
import Text from '../Text';

const ProgressBarContainer = styled(Flex)`
  border-radius: ${(props) => props.theme.radii.large};
  height: 16px;
  max-width: 100%;
  align-items: center;
`;

const BarBackground = styled(Box)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.monochrome.grey40};
  height: ${(props) => props.theme.space.smallest};
  border-radius: inherit;
`;
const BarForeground = styled(Box)`
  height: 100%;
  background-color: ${(props) => props.theme.colors.text.default};
  border-radius: inherit;
`;

const percentageText = (percentage: number) => (
  <Text ml="smaller" fontSize="size3" fontWeight="medium">
    {`${percentage}%`}
  </Text>
);

type Props = {
  iconEndName?: string;
  percentage: number;
  showPercentage?: boolean;
};

const ProgressBar: FC<Props> = ({
  iconEndName,
  percentage,
  showPercentage = false,
  ...props
}) => (
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
      <Icon
        ml="smaller"
        fontSize="size4"
        name={iconEndName}
        color={percentage < 100 ? 'monochrome.grey40' : 'text.default'}
      />
    )}
    {showPercentage && percentageText(percentage)}
  </ProgressBarContainer>
);

export default ProgressBar;
