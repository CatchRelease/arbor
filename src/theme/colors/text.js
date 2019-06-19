import { transparentize } from 'polished';

import { greys } from './monochrome';

const { grey70, grey80, grey90, grey100 } = greys;

export default {
  disabled: transparentize(0.3, grey70),
  muted: grey80,
  default: grey90,
  dark: grey100
};
