import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { color, ColorProps } from 'styled-system';

import { WithColorPropFix } from '../colorPropFix';
import { PolyComponent } from '../polyComponent';

import Text from '../Text';

const baseStyles = css`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

type Variant = 'default' | 'muted' | 'brandLight' | 'brandDark';

const variantStyles = ({
  variant = 'default',
  theme: { colors }
}: {
  variant?: Variant;
  theme: Theme;
}) => {
  const variantMapping = {
    brandDark: {
      color: colors.intent.brand.dark,
      '&:visited': {
        color: colors.intent.brand.dark
      },
      '&:hover': {
        color: colors.intent.brand.dark
      },
      '&:active': {
        color: colors.intent.brand.dark
      },
      '&:focus': {
        outline: `1px solid ${colors.brand.dark}`
      }
    },
    brandLight: {
      color: colors.intent.brand.light,
      '&:visited': {
        color: colors.intent.brand.light
      },
      '&:hover': {
        color: colors.intent.brand.light
      },
      '&:active': {
        color: colors.intent.brand.light
      },
      '&:focus': {
        outline: `1px solid ${colors.brand.light}`
      }
    },
    default: {
      color: colors.palette.teal.default,
      '&:visited': {
        color: colors.palette.teal.default
      },
      '&:hover': {
        color: colors.palette.teal.dark
      },
      '&:active': {
        color: colors.palette.teal.darker
      },
      '&:focus': {
        outline: `1px solid ${colors.palette.teal.default}`
      }
    },
    muted: {
      color: colors.text.muted,
      '&:visited': {
        color: colors.text.muted
      },
      '&:hover': {
        color: colors.text.default
      },
      '&:active': {
        color: colors.text.dark
      },
      '&:focus': {
        outline: `1px solid ${colors.grey100}`
      }
    }
  };

  return variantMapping[variant];
};

type Props = ColorProps & {
  variant?: Variant;
};

const TextAnchor = Text.withComponent('a');
const TextAnchorWithColorPropFix: WithColorPropFix<typeof Text> = TextAnchor;

const Link: PolyComponent<'a', Props> = styled(
  TextAnchorWithColorPropFix
)<Props>`
  ${baseStyles};
  ${variantStyles};
  ${color};
`;

export default Link;
