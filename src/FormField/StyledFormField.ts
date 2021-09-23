import styled from '@emotion/styled';

type Props = {
  caption?: string | null;
};

const StyledFormField = styled.div<Props>`
  margin-bottom: ${(props) =>
    props.caption ? props.theme.space.smaller : props.theme.space.regular};
`;

StyledFormField.defaultProps = {
  caption: ''
};

export default StyledFormField;
