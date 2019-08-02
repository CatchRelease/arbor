import React from 'react';

import createWithTheme from '../../../utils/createWithTheme';
import INTENTS from '../intents';

const noop = () => null;

const behavesLikeAnAlert = Component => {
  const render = (props = {}) =>
    createWithTheme(<Component message="Hey look, an alert!" {...props} />);

  [undefined, ...INTENTS].forEach(intent => {
    const readableIntent = intent || 'no';

    it(`property renders a banner alert with ${readableIntent} intent`, () => {
      const alert = render({
        intent
      });

      expect(alert).toMatchSnapshot();
    });

    context('with details', () => {
      it(`property renders a banner alert, with ${readableIntent} intent, with details`, () => {
        const alert = render({
          details: 'Here are some alert details',
          intent
        });

        expect(alert).toMatchSnapshot();
      });
    });

    context('with onClose', () => {
      it(`property renders a banner alert, with ${readableIntent} intent, with an on close`, () => {
        const alert = render({
          intent,
          onClose: noop
        });

        expect(alert).toMatchSnapshot();
      });
    });
  });
};

export default behavesLikeAnAlert;
