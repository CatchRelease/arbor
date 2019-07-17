import { style } from 'styled-system';

const ratioPadding = style({
  prop: 'ratio',
  cssProperty: 'paddingBottom',
  transformValue: n => `${n * 100}%`
});

const ratio = props => ({
  height: 0,
  ...ratioPadding(props)
});

export default ratio;
