import { FC } from 'react';

import StyledInput, { Props as StyledInputProps } from '../Input/StyledInput';

export type Props = StyledInputProps;

const StyledTextarea: FC<Props> = (props) => (
  <StyledInput as="textarea" {...props} />
);

export default StyledTextarea;
