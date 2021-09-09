import { style } from 'styled-system';

const ratioPadding = style<number>({
  prop: 'ratio',
  cssProperty: 'paddingBottom',
  transformValue: (n) => `${n * 100}%`
});

type RatioProps = {
  ratio?: number;
};

const ratio = (props: RatioProps) => ({
  height: 0,
  ...ratioPadding(props)
});

export default ratio;
