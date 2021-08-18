import { ReactNode } from 'react';
import {
  toast as reactToastifyToast,
  ToastOptions as ReactToastifyToastOptions
} from 'react-toastify';

import { ToastAlert } from '../Alert';
import INTENTS, { Intent } from '../Alert/intents';

export type ToastOptions = ReactToastifyToastOptions;

type ToastFunction = (
  message: ReactNode,
  details?: ReactNode,
  toastifyOptions?: ToastOptions
) => void;

const buildToast: (intent: Intent) => ToastFunction =
  (intent) =>
  (message, details, toastifyOptions = {}) => {
    const toastId = reactToastifyToast(
      <ToastAlert
        details={details}
        intent={intent}
        message={message}
        onClose={() => reactToastifyToast.dismiss(toastId)}
      />,
      toastifyOptions
    );
  };

const toast = INTENTS.reduce(
  (memo, intent) => ({ ...memo, [intent]: buildToast(intent) }),
  {} as Record<Intent, ToastFunction>
);

export default toast;
