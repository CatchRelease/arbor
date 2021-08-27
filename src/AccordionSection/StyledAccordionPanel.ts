import styled from '@emotion/styled';

import { themeGet } from '@styled-system/theme-get';
import { css } from '@emotion/react';
import Box, { BoxProps } from '../Box';
import { Variant } from './variants';

const variantStyles = ({ variant, ...props }: { variant?: Variant }) => {
  const borderColor = themeGet('borders.default')(props);

  switch (variant) {
    case 'default':
      return css`
        border-bottom: ${borderColor};

        section:last-child & {
          border-bottom: none;
          border-top: ${borderColor};
        }
      `;

    case 'minimal':
      return '';
    default:
      return '';
  }
};

export type Props = BoxProps & {
  variant?: Variant;
};

const StyledAccordionPanel = styled(Box)<Props>`
  ${variantStyles};
`;

StyledAccordionPanel.defaultProps = {
  overflow: 'hidden'
};

export default StyledAccordionPanel;
