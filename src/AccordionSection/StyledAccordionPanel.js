import styled from '@emotion/styled';

import { themeGet } from '@styled-system/theme-get';
import { css } from '@emotion/react';
import Box from '../Box';

const variantStyles = ({ variant, ...props }) => {
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

const StyledAccordionPanel = styled(Box)`
  ${variantStyles};
`;

StyledAccordionPanel.defaultProps = {
  overflow: 'hidden'
};

export default StyledAccordionPanel;
