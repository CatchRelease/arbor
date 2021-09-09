import styled from '@emotion/styled';

import { ratio } from '../utils';

import Box from '../Box';

type Props = {
  image: string;
  ratio?: number;
};

const CardPreview = styled(Box)<Props>`
  background: url(${(props) => props.image}) center center no-repeat
    ${(props) => props.theme.colors.monochrome.black};
  background-size: contain;
  ${ratio};
`;

CardPreview.defaultProps = {
  ratio: 9 / 16
};

export default CardPreview;
