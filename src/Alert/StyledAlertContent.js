import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Grid from '../Grid';
import INTENTS from './intents';

const gridTemplateColumns = ({ intent, onClose }) => {
  let columns;

  if (intent && onClose) {
    columns = '0fr 1fr 0fr';
  } else if (intent) {
    columns = '0fr 1fr';
  } else if (onClose) {
    columns = '1fr 0fr';
  }

  return css`
    grid-template-columns: ${columns};
  `;
};

const StyledAlertContent = styled(Grid)`
  ${gridTemplateColumns};
`;

StyledAlertContent.propTypes = {
  details: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  intent: PropTypes.oneOf(INTENTS),
  onClose: PropTypes.func
};

StyledAlertContent.defaultProps = {
  ...Grid.defaultProps,
  alignItems: 'center',
  details: undefined,
  gridColumnGap: 'regular',
  gridRowGap: 'smaller',
  intent: undefined,
  onClose: undefined,
  p: 'regular'
};

export default StyledAlertContent;
