import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Grid from '../Grid';
import INTENTS from './intents';

const gridTemplateFirstRow = (intent, onClose) => {
  if (intent && onClose) {
    return 'intent message action';
  }
  if (intent) {
    return 'intent message';
  }
  if (onClose) {
    return 'message action';
  }

  return 'message';
};

const gridTemplateSecondRow = (intent, onClose) => {
  if (intent && onClose) {
    return 'intentPlaceholder details actionPlaceholder';
  }
  if (intent) {
    return 'intentPlaceholder details';
  }
  if (onClose) {
    return 'details actionPlaceholder';
  }

  return 'details';
};

const gridTemplateAreas = ({ details, intent, onClose }) => css`
  grid-template-areas:
    "${gridTemplateFirstRow(intent, onClose)}"
    ${details && `"${gridTemplateSecondRow(intent, onClose)}"`};
`;

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

const variantStyles = ({ intent, theme, variant }) => {
  switch (variant) {
    case 'banner':
      return css`
        background: ${intent
          ? theme.colors.intent[intent].lighter
          : theme.colors.monochrome.white};
        border-bottom: none;
        border-left: none;
        border-right: none;
        border-top: none;
      `;
    case 'card':
      return css`
        border-radius: ${theme.radii.large};
        box-shadow: ${theme.shadows.elevation2};
      `;
    case 'inline':
      return css`
        border: none;
      `;
    default:
      return css`
        border-left: ${intent
          ? `3px solid ${theme.colors.intent[intent].default}`
          : ''};
      `;
  }
};

const StyledAlert = styled(Grid)`
  ${gridTemplateAreas};
  ${gridTemplateColumns};
  ${variantStyles};
`;

StyledAlert.propTypes = {
  details: PropTypes.string,
  intent: PropTypes.oneOf(INTENTS),
  onClose: PropTypes.func
};

StyledAlert.defaultProps = {
  ...Grid.defaultProps,
  alignItems: 'center',
  border: 'default',
  details: undefined,
  gridColumnGap: 'regular',
  gridRowGap: 'smaller',
  intent: undefined,
  onClose: undefined,
  p: 'regular'
};

export default StyledAlert;
