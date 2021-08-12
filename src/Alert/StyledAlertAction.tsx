import { FC, MouseEventHandler } from 'react';

import Box from '../Box';
import Button from '../Button';
import Icon from '../Icon';

type Props = {
  onClose: MouseEventHandler<HTMLButtonElement>;
};

const StyledAlertAction: FC<Props> = ({ onClose }) => (
  <Box>
    <Button
      aria-label="close"
      iconStart={<Icon fontSize="larger" name="cross" />}
      onClick={onClose}
      size="small"
      variant="minimal"
    />
  </Box>
);

export default StyledAlertAction;
