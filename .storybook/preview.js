import { Global, ThemeProvider } from '@emotion/react';

import { reset, theme } from '../src';

// eslint-disable-next-line import/prefer-default-export
export const decorators = [
  (Story) => (
    <>
      <Global styles={reset} />
      <Story />
    </>
  ),
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  docs: {
    extractComponentDescription: (_component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }

      return null;
    }
  }
};
