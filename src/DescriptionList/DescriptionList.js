import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Box from '../Box';

const inlineStyles = ({ inline, theme }) => {
  if (!inline) {
    return '';
  }

  return css`
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    dd {
      display: inline;
      margin-left: ${theme.space.smaller};
    }

    dd:after {
      display: block;
      content: '';
    }

    dt {
      display: inline-block;
      margin-bottom: ${theme.space.small};
    }
  `;
};

const DescriptionList = styled(Box.withComponent('dl'))`
  ${inlineStyles};
`;

DescriptionList.propTypes = {
  inline: PropTypes.bool
};

DescriptionList.defaultProps = {
  ...Box.defaultProps,
  inline: false
};

export default DescriptionList;
