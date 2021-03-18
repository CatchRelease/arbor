import { toast as reactToastifyToast } from 'react-toastify';

import { ToastAlert } from '../Alert';
import INTENTS from '../Alert/intents';

const buildToast = (intent) => (message, details, toastifyOptions = {}) => {
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
  {}
);

export default toast;
