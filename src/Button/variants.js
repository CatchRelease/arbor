import { lighten, darken } from 'polished';

const variants = ({ theme, variant }) => {
  const variantMap = {
    primary: {
      backgroundColor: theme.colors.brand.dark,
      color: theme.colors.brand.light,
      '&:hover:enabled': {
        backgroundColor: darken(0.1, theme.colors.brand.dark)
      },
      '&:active:enabled': {
        backgroundColor: lighten(0.1, theme.colors.brand.dark)
      },
      '&:focus:enabled': {
        border: '1px solid transparent',
        boxShadow: `0 0 0 1px ${theme.colors.white}, 0 0 0 2px ${
          theme.colors.brand.dark
        }`
      }
    },
    secondary: {
      backgroundColor: theme.colors.white,
      color: theme.colors.text.default,
      i: {
        color: theme.colors.icon.default
      },
      '&:enabled': {
        border: `1px solid ${theme.colors.border.default}`
      },
      '&:hover:enabled': {
        border: `1px solid ${theme.colors.text.muted}`,
        i: {
          color: theme.colors.brand.dark
        }
      },
      '&:active:enabled': {
        color: theme.colors.brand.dark,
        backgroundColor: theme.colors.background.default
      },
      '&:focus:enabled': {
        border: '1px solid transparent',
        boxShadow: `0 0 0 1px ${theme.colors.white}, 0 0 0 2px ${
          theme.colors.brand.dark
        }`
      }
    },
    minimal: {
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      color: theme.colors.text.muted,
      i: {
        color: theme.colors.icon.default
      },
      '&:hover:enabled': {
        color: theme.colors.text.dark,
        i: {
          color: theme.colors.text.dark
        }
      },
      '&:active:enabled': {
        backgroundColor: theme.colors.background.default,
        color: theme.colors.text.dark
      },
      '&:focus:enabled': {
        boxShadow: `0 0 0 1px ${theme.colors.white}, 0 0 0 2px ${
          theme.colors.brand.dark
        }`
      },
      '&:disabled': {
        backgroundColor: 'transparent',
        color: theme.colors.text.disabled
      }
    }
  };

  return variantMap[variant];
};

export default variants;
