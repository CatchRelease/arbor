import { FC, ReactNode } from 'react';

import Flex from '../Flex';
import Label from '../Label';
import Paragraph from '../Paragraph';
import StyledFormField from './StyledFormField';

type Props = {
  caption?: string | null;
  id: string;
  label?: ReactNode | string;
  labelAside?: ReactNode;
};

const FormField: FC<Props> = ({
  caption = '',
  children,
  label = '',
  labelAside,
  id
}) => (
  <StyledFormField caption={caption}>
    <Flex alignItems="center">
      {label && (
        <Flex flex="1" alignItems="center">
          <Label htmlFor={id}>{label}</Label>
        </Flex>
      )}
      {labelAside && (
        <Flex color="text.muted" fontSize="size4">
          {labelAside}
        </Flex>
      )}
    </Flex>
    {children}
    {caption && (
      <Paragraph as="span" variant="tiny" color="palette.red.default">
        {caption}
      </Paragraph>
    )}
  </StyledFormField>
);

export default FormField;
