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

const MasonryContainer = styled(Box)`
  ${columnCount};
  ${columnGap};
  ${columnRule};
  ${columnRuleColor};
  ${columnRuleStyle};
  ${columnRuleWidth};
  ${columnWidth};
  ${columns};
`;

MasonryContainer.propTypes = {
  ...columnCount.propTypes,
  ...columnGap.propTypes,
  ...columnRule.propTypes,
  ...columnRuleColor.propTypes,
  ...columnRuleStyle.propTypes,
  ...columnRuleWidth.propTypes,
  ...columnWidth.propTypes,
  ...columns.propTypes
};

export default MasonryContainer;
