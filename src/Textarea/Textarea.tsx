import { forwardRef, ReactNode } from 'react';

import FormField from '../FormField';
import StyledTextarea, { Props as StyledTextAreaProps } from './StyledTextarea';

type Props = StyledTextAreaProps & {
  caption?: string;
  id: string;
  label?: string;
  labelAside?: ReactNode;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ caption = '', label = '', labelAside = null, id, ...props }, ref) => (
    <FormField caption={caption} id={id} label={label} labelAside={labelAside}>
      <StyledTextarea {...{ ...props, id, ref }} />
    </FormField>
  )
);

export default Textarea;
