import React from 'react';

import Alert from '../Alert';
import createWithTheme from '../../../utils/createWithTheme';
import INTENTS from '../intents';
import VARIANTS from '../variants';

const noop = () => null;
const render = (props = {}) =>
  createWithTheme(<Alert message="Hey look, an alert!" {...props} />);

describe('<Alert />', () => {
  describe('Variants', () => {
    VARIANTS.forEach(variant => {
      context('with details', () => {
        it(`property renders a ${variant} alert with details`, () => {
          const alert = render({
            details: 'Here are some alert details',
            variant
          });

          expect(alert).toMatchSnapshot();
        });
      });

      context('with onClose', () => {
        it(`property renders a ${variant} alert with an on close`, () => {
          const alert = render({
            onClose: noop,
            variant
          });

          expect(alert).toMatchSnapshot();
        });
      });

      context('with intent', () => {
        INTENTS.forEach(intent => {
          it(`property renders a ${variant} alert with ${intent} intent`, () => {
            const alert = render({
              intent,
              variant
            });

            expect(alert).toMatchSnapshot();
          });

          context('with details', () => {
            it(`property renders a ${variant} alert, with ${intent} intent, with details`, () => {
              const alert = render({
                details: 'Here are some alert details',
                intent,
                variant
              });

              expect(alert).toMatchSnapshot();
            });
          });

          context('with onClose', () => {
            it(`property renders a ${variant} alert, with ${intent} intent, with an on close`, () => {
              const alert = render({
                intent,
                onClose: noop,
                variant
              });

              expect(alert).toMatchSnapshot();
            });
          });
        });
      });
    });
  });
});
