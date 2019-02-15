const variants = ({ theme, variant }) => {
  const variantMap = {
    primary: {
      backgroundColor: theme.colors.blue,
      color: theme.colors.white,
      '&:hover:enabled': {
        backgroundColor: theme.colors.blueLight
      },
      '&:active:enabled': {
        backgroundColor: theme.colors.blueDark
      },
      '&:focus:enabled': {
        boxShadow: `0 0 0 1px ${theme.colors.white}, 0 0 0 2px ${
          theme.colors.blueDark
        }`
      }
    },
    secondary: {
      backgroundColor: theme.colors.white,
      color: theme.colors.text.default,
      fontWeight: theme.fontWeights.regular,
      '&:enabled': {
        border: `1px solid ${theme.colors.border.default}`
      },
      '&:hover:enabled': {
        backgroundColor: theme.colors.background.muted,
        color: theme.colors.blue,
        border: `1px solid ${theme.colors.blue}`
      },
      '&:active:enabled': {
        color: theme.colors.blueDark,
        backgroundColor: theme.colors.background.default,
        border: '1px solid transparent'
      },
      '&:focus:enabled': {
        border: '1px solid transparent',
        boxShadow: `0 0 0 1px ${theme.colors.white}, 0 0 0 2px ${
          theme.colors.blueDark
        }`
      }
    },
    minimal: {
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      color: theme.colors.text.muted,
      '&:hover:enabled': {
        backgroundColor: theme.colors.background.muted,
        color: theme.colors.text.dark
      },
      '&:active:enabled': {
        backgroundColor: theme.colors.background.default,
        color: theme.colors.text.dark
      },
      '&:focus:enabled': {
        boxShadow: `0 0 0 1px ${theme.colors.white}, 0 0 0 2px ${
          theme.colors.blueDark
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
