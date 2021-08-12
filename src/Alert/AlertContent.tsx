import { FC, MouseEventHandler, ReactNode } from 'react';

import StyledAlertContent, {
  Props as StyledAlertContentProps
} from './StyledAlertContent';
import StyledAlertAction from './StyledAlertAction';
import StyledAlertDetails from './StyledAlertDetails';
import StyledAlertIntent from './StyledAlertIntent';
import StyledAlertMessage from './StyledAlertMessage';

const gridPlaceholder = <span aria-hidden />;

export type Props = StyledAlertContentProps & {
  details?: ReactNode;
  message: ReactNode;
  oneLine?: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
};

const AlertContent: FC<Props> = ({
  details,
  intent,
  message,
  oneLine = false,
  onClose,
  ...props
}) => (
  <StyledAlertContent
    details={details}
    intent={intent}
    onClose={onClose}
    {...props}
  >
    {intent && <StyledAlertIntent intent={intent} />}
    <StyledAlertMessage>
      {message}
      {oneLine && details && (
        <StyledAlertDetails as="span">
          &nbsp;
          {details}
        </StyledAlertDetails>
      )}
    </StyledAlertMessage>
    {onClose && <StyledAlertAction onClose={onClose} />}
    {!oneLine && (
      <>
        {details && intent && gridPlaceholder}
        {details && <StyledAlertDetails>{details}</StyledAlertDetails>}
        {details && onClose && gridPlaceholder}
      </>
    )}
  </StyledAlertContent>
);

export default AlertContent;
