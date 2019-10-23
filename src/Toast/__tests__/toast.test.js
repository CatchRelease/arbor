import { shallow } from 'enzyme';

import { toast as reactToastifyToast } from 'react-toastify';

import toast from '../toast';
import INTENTS from '../../Alert/intents';

jest.mock('react-toastify');

const render = (intent, message, details, index) => {
  toast[intent](message, details);
  return shallow(reactToastifyToast.mock.calls[index][0]);
};

describe('toast', () => {
  INTENTS.forEach((intent, index) => {
    describe(intent, () => {
      it(`renders with the ${intent} intent`, () => {
        const details = `A toast with the ${intent} intent`;
        const message = `${intent} Toast!`;

        const toastAlert = render(intent, message, details, index);

        expect(toastAlert).toHaveProp({ details, intent, message });
      });
    });
  });
});
