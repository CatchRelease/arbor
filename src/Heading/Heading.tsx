import { ElementType, FC } from 'react';
import { SetOptional } from 'type-fest';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import { FontSize, FontWeight } from '../theme/typography';
import Text from '../Text';

const lineHeightMultiplier = 0.5;

const baseStyles = ({ theme }: { theme: Theme }) => css`
  line-height: ${theme.lineHeights.small};
`;

const calculatedMargin = ({
  fontSize,
  mb,
  theme
}: {
  fontSize: FontSize;
  mb: string;
  theme: Theme;
}) =>
  !mb &&
  css`
    margin-bottom: calc(${theme.fontSizes[fontSize]} * ${lineHeightMultiplier});
  `;

type Props = {
  fontSize: FontSize;
  fontWeight?: FontWeight;
  mb: string;
};

const Heading = styled(Text)<Props>`
  ${baseStyles};
  ${calculatedMargin};
`;

Heading.defaultProps = {
  as: 'h1',
  color: 'text.dark',
  fontWeight: 'bold',
  lineHeight: 'small'
};

const createHeading =
  (
    as: ElementType,
    defaultFontSize: FontSize
  ): FC<SetOptional<Props, 'fontSize'>> =>
  ({ children, fontSize = defaultFontSize, ...props }) =>
    (
      <Heading as={as} fontSize={fontSize} {...props}>
        {children}
      </Heading>
    );

const H1 = createHeading('h1', 'size7');

const H2 = createHeading('h2', 'size6');

const H3 = createHeading('h3', 'size5');

const H4 = createHeading('h4', 'size4');

const H5 = styled(createHeading('h5', 'size4'))`
  line-height: ${(props) => props.theme.lineHeights.large};
`;
H5.defaultProps = {
  fontWeight: 'medium'
};

const H6 = styled(createHeading('h6', 'size4'))`
  line-height: ${(props) => props.theme.lineHeights.large};
`;
H6.defaultProps = {
  fontWeight: 'regular'
};

export default Object.assign(Heading, { H1, H2, H3, H4, H5, H6 });
