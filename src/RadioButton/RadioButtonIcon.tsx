import { VFC } from 'react';

import Icon from '../Icon';

const iconFontSize = '16px';

type Props = {
  checked?: boolean;
};

const RadioButtonIcon: VFC<Props> = ({ checked }) => {
  if (checked) {
    return <Icon name="radio-checked" fontSize={iconFontSize} />;
  }

  return null;
};

export default RadioButtonIcon;
