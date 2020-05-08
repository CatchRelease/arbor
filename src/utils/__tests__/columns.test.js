import React from 'react';
import { create } from 'react-test-renderer';
import styled from '@emotion/styled';

import theme from '../../theme';
import {
  columnCount,
  columnGap,
  columnRule,
  columnRuleColor,
  columnRuleStyle,
  columnRuleWidth,
  columnWidth,
  columns
} from '../columns';

const ExampleComponent = styled.div`
  ${columnCount};
  ${columnGap};
  ${columnRule};
  ${columnRuleColor};
  ${columnRuleStyle};
  ${columnRuleWidth};
  ${columnWidth};
  ${columns};
`;

const render = (props) =>
  create(
    <ExampleComponent {...{ theme, ...props }}>Hello World</ExampleComponent>
  );

describe('Column Style Functions', () => {
  describe('columnCount', () => {
    it('provides support for passing in columnCount css as prop', () => {
      const rendered = render({ columnCount: 3 });

      expect(rendered.toJSON()).toHaveStyleRule('column-count', '3');
    });
  });

  describe('columnGap', () => {
    it('provides support for passing in columnGap css as prop', () => {
      const rendered = render({ columnGap: '16px' });

      expect(rendered.toJSON()).toHaveStyleRule('column-gap', '16px');
    });

    it('leverages space from the theme', () => {
      const rendered = render({ columnGap: 'regular' });

      expect(rendered.toJSON()).toHaveStyleRule(
        'column-gap',
        theme.space.regular
      );
    });
  });

  describe('columnRuleColor', () => {
    it('provides support for passing in columnRuleColor css as prop', () => {
      const rendered = render({ columnRuleColor: '#00ff00' });

      expect(rendered.toJSON()).toHaveStyleRule('column-rule-color', '#00ff00');
    });

    it('leverages colors from the theme', () => {
      const rendered = render({ columnRuleColor: 'blue' });

      expect(rendered.toJSON()).toHaveStyleRule(
        'column-rule-color',
        theme.colors.blue // eslint-disable-line import/no-named-as-default-member
      );
    });
  });

  describe('columnRule', () => {
    it('provides support for passing in columnRule css as prop', () => {
      const rendered = render({ columnRule: '1px solid #00ff00' });

      expect(rendered.toJSON()).toHaveStyleRule(
        'column-rule',
        '1px solid #00ff00'
      );
    });

    it('leverages borders from the theme', () => {
      const rendered = render({ columnRule: 'default' });

      expect(rendered.toJSON()).toHaveStyleRule(
        'column-rule',
        theme.borders.default
      );
    });
  });

  describe('columnRuleStyle', () => {
    it('provides support for passing in columnRuleStyle css as prop', () => {
      const rendered = render({ columnRuleStyle: 'solid' });

      expect(rendered.toJSON()).toHaveStyleRule('column-rule-style', 'solid');
    });
  });

  describe('columnRuleWidth', () => {
    it('provides support for passing in columnRuleWidth css as prop', () => {
      const rendered = render({ columnRuleWidth: '3px' });

      expect(rendered.toJSON()).toHaveStyleRule('column-rule-width', '3px');
    });

    it('leverages space from the theme', () => {
      const rendered = render({ columnRuleWidth: 'regular' });

      expect(rendered.toJSON()).toHaveStyleRule(
        'column-rule-width',
        theme.space.regular
      );
    });
  });

  describe('columnWidth', () => {
    it('provides support for passing in columnWidth css as prop', () => {
      const rendered = render({ columnWidth: '300px' });

      expect(rendered.toJSON()).toHaveStyleRule('column-width', '300px');
    });
  });

  describe('columns', () => {
    it('provides support for passing in columns css as prop', () => {
      const rendered = render({ columns: '100px 3' });

      expect(rendered.toJSON()).toHaveStyleRule('columns', '100px 3');
    });
  });
});
