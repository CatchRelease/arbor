import { ReactElement, ReactNode } from 'react';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { toast as reactToastifyToast } from 'react-toastify';

import toast from '../toast';
import INTENTS, { Intent } from '../../Alert/intents';

jest.mock('react-toastify');

const mockReactToastifyToast = mocked(reactToastifyToast);

const render = (
  intent: Intent,
  message: ReactNode,
  details: ReactNode,
  index: number
) => {
  toast[intent](message, details);
  return shallow(mockReactToastifyToast.mock.calls[index][0] as ReactElement);
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
