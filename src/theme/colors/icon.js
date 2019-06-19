import { transparentize } from 'polished';

import { greys } from './monochrome';

const { grey50, grey60 } = greys;

export default {
  disabled: transparentize(0.3, grey50),
  default: grey60
};
