import { FC } from 'react';

import AlertContent, { Props as AlertContentProps } from './AlertContent';
import Box from '../Box';
import borderStyles from './borderStyles';
import { Intent } from './intents';

const conditionalProps = (intent?: Intent) => {
  const props = intent
    ? {
        bg: `intent.${intent}.lighter`
      }
    : {};

  return props;
};

type Props = AlertContentProps;

const BannerAlert: FC<Props> = ({ intent, oneLine = true, ...props }) => (
  <Box
    textAlign="center"
    {...borderStyles(intent)}
    {...conditionalProps(intent)}
  >
    <AlertContent {...{ intent, oneLine, ...props }} />
  </Box>
);

export default BannerAlert;
