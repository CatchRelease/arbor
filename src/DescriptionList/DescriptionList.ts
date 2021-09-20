import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import Box from '../Box';
import { PolyComponent } from '../polyComponent';

const inlineStyles = ({
  inline,
  theme
}: {
  inline?: boolean;
  theme: Theme;
}) => {
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

type Props = {
  inline?: boolean;
};

const DescriptionList: PolyComponent<'dl', Props> = styled(
  Box.withComponent('dl')
)<Props>`
  ${inlineStyles};
`;

export default DescriptionList;
