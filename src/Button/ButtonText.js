import styled from '@emotion/styled';

const ButtonText = styled.span`
  margin-left: ${props =>
    props.iconStart === undefined ? 0 : props.theme.space.smaller};
  margin-right: ${props =>
    props.iconEnd === undefined ? 0 : props.theme.space.smaller};
  vertical-align: middle;
`;

export default ButtonText;
