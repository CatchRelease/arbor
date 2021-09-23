import { transparentize } from 'polished';
import { greys } from './monochrome';

const { grey90 } = greys;

export default {
  blurry: transparentize(0.7, grey90),
  border: transparentize(0.53, grey90)
};
