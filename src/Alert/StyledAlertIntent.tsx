import { FC } from 'react';

import Box from '../Box';
import Icon from '../Icon';
import { Intent } from './intents';

const getIconName = (intent: Intent) => {
  switch (intent) {
    case 'danger':
      return 'error';
    case 'info':
      return 'info-sign';
    case 'success':
      return 'tick-circle';
    case 'warning':
      return 'warning-sign';
    default:
      return '';
  }
};

type Props = {
  intent: Intent;
};

const StyledAlertIntent: FC<Props> = ({ intent }) => (
  <Box aria-label={intent}>
    <Icon
      color={`intent.${intent}.default`}
      fontSize="size4"
      name={getIconName(intent)}
    />
  </Box>
);

export default StyledAlertIntent;
