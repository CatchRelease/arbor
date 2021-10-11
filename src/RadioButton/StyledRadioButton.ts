import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { rem } from 'polished';

import Flex from '../Flex';

const baseStyles = ({ theme }: { theme: Theme }) => css`
  color: ${theme.colors.monochrome.white};
  border: 1px solid ${theme.colors.grey60};
  border-radius: 50%;
  flex-shrink: 0;
  height: ${rem('16px')};
  width: ${rem('16px')};
`;

const checkedStyles = ({
  theme,
  checked
}: {
  theme: Theme;
  checked: boolean;
}) =>
  checked &&
  css`
    color: ${theme.colors.intent.brand.dark};
  `;

const disabledStyles = ({
  theme,
  checked,
  disabled
}: {
  theme: Theme;
  checked: boolean;
  disabled: boolean;
}) =>
  disabled &&
  css`
    border-color: ${theme.colors.border.default};
    color: ${checked ? theme.colors.grey60 : theme.colors.monochrome.white};
  `;

type Props = {
  checked: boolean;
  disabled: boolean;
};

const StyledRadioButton = styled(Flex)<Props>`
  ${baseStyles};
  ${checkedStyles};
  ${disabledStyles};
`;

StyledRadioButton.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center'
};

export default StyledRadioButton;
