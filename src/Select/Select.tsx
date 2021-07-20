import { FC, forwardRef, ReactNode } from 'react';

import FormField from '../FormField';
import StyledSelect from './StyledSelect';

type Props = {
  caption?: string;
  id: string;
  label?: ReactNode;
  labelAside?: ReactNode;
};

const Select: FC<Props> = forwardRef<HTMLSelectElement, Props>(
  (
    { caption = '', children, label = '', labelAside = null, id, ...props },
    ref
  ) => {
    const select = (
      <StyledSelect {...{ ...props, id, ref }}>{children}</StyledSelect>
    );

    return caption || label ? (
      <FormField
        caption={caption}
        id={id}
        label={label}
        labelAside={labelAside}
      >
        {select}
      </FormField>
    ) : (
      select
    );
  }
);

export default Select;
