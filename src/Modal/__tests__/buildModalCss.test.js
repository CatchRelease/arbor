/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import createWithTheme from '../../../utils/createWithTheme';
import theme from '../../theme';
import buildModalCss from '../buildModalCss';

describe('buildModalCss', () => {
  const MockComponent = (props) => <div {...props} />;

  context('no additional css provided', () => {
    it('renders properly', () => {
      const combinedCss = buildModalCss({ theme });

      const rendered = createWithTheme(<MockComponent css={combinedCss} />);

      expect(rendered).toMatchSnapshot();
    });
  });

  context('overlayCss is provided', () => {
    it('renders properly', () => {
      const overlayCss = css`
        background: blue;
      `;
      const combinedCss = buildModalCss({ theme, overlayCss });

      const rendered = createWithTheme(<MockComponent css={combinedCss} />);

      expect(rendered).toMatchSnapshot();
    });
  });

  context('modalCss is provided', () => {
    it('renders properly', () => {
      const modalCss = css`
        background: red;
      `;
      const combinedCss = buildModalCss({ theme, modalCss });

      const rendered = createWithTheme(<MockComponent css={combinedCss} />);

      expect(rendered).toMatchSnapshot();
    });
  });
});
