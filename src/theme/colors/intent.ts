import { blue, green, red, orange } from './palette';
import brand from './brand';

export const danger = red;
export const info = blue;
export const success = green;
export const warning = orange;

const intent = {
  brand,
  danger,
  info,
  success,
  warning
};

export type Intent = keyof typeof intent;

export default intent;
