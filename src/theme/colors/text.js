import { transparentize } from 'polished';

import { greys } from './monochrome';

const { grey60, grey70, grey80, grey90, grey100 } = greys;

export default {
  dark: grey100,
  default: grey90,
  disabled: transparentize(0.3, grey70),
  muted: grey80,
  placeholder: grey60
};
