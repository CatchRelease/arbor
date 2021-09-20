import { FC } from 'react';

import Icon from '../Icon';

const iconFontSize = '16px';

type Props = {
  checked?: boolean;
  indeterminate?: boolean;
};

const CheckboxIcon: FC<Props> = ({ checked, indeterminate }) => {
  if (indeterminate) {
    return <Icon name="checkbox-indeterminate" fontSize={iconFontSize} />;
  }

  if (checked) {
    return <Icon name="checkbox-checked" fontSize={iconFontSize} />;
  }

  return null;
};

export default CheckboxIcon;
