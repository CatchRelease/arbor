import { FC } from 'react';
import { rem } from 'polished';
import styled from '@emotion/styled';
import { Size } from './sizes';
import Spinner from '../Spinner';
import { Variant } from './variants';
import { Intent } from '../theme/colors/intent';

const StyledButtonSpinner = styled(Spinner)`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const spinnerColor = (disabled: boolean, variant: Variant, intent: Intent) => {
  if (disabled) return 'text.muted';

  switch (variant) {
    case 'primary':
      return intent === 'brand' ? `intent.${intent}.light` : 'monochrome.white';
    default:
      return `intent.${intent}.default`;
  }
};

const spinnerDiameters = {
  small: 8,
  medium: 12,
  large: 16,
  jumbo: 24
};

type Props = {
  disabled: boolean;
  intent: Intent;
  size: Size | Size[];
  variant: Variant;
};

const ButtonSpinner: FC<Props> = ({ disabled, intent, size, variant }) => {
  const diameter = Array.isArray(size)
    ? size.map((value) => rem(`${spinnerDiameters[value]}px`))
    : rem(`${spinnerDiameters[size]}px`);

  return (
    <StyledButtonSpinner
      diameter={diameter}
      color={spinnerColor(disabled, variant, intent)}
    />
  );
};

export default ButtonSpinner;
