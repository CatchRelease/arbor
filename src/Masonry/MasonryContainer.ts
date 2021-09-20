import styled from '@emotion/styled';

import Box from '../Box';
import {
  columnCount,
  columnGap,
  columnRule,
  columnRuleColor,
  columnRuleStyle,
  columnRuleWidth,
  columnWidth,
  columns
} from '../utils/columns';

export type Props = {
  columnCount?: number;
  columnGap?: string;
  columnRuleColor?: string;
  columnRuleStyle?: string;
  columnRuleWidth?: string;
  columnWidth?: string;
  columns?: string;
};

const MasonryContainer = styled(Box)<Props>`
  ${columnCount};
  ${columnGap};
  ${columnRule};
  ${columnRuleColor};
  ${columnRuleStyle};
  ${columnRuleWidth};
  ${columnWidth};
  ${columns};
`;

export default MasonryContainer;
