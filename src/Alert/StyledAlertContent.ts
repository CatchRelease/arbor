import { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Grid, { GridProps } from '../Grid';
import INTENTS, { Intent } from './intents';

const gridTemplateColumns = ({
  intent,
  onClose
}: {
  intent?: Intent;
  onClose?: MouseEventHandler<HTMLButtonElement>;
}) => {
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

export type Props = GridProps & {
  intent?: Intent;
};

const StyledAlertContent = styled(Grid)<Props>`
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
