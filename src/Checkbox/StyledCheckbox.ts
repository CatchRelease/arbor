import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { rem } from 'polished';

import Flex from '../Flex';

const baseStyles = ({ theme }: { theme: Theme }) => css`
  background-color: ${theme.colors.monochrome.white};
  border-radius: ${theme.radii.small};
  border: 1px solid ${theme.colors.grey60};
  color: ${theme.colors.monochrome.white};
  flex-shrink: 0;
  height: ${rem('16px')};
  width: ${rem('16px')};
`;

const checkedStyles = ({
  theme,
  checked,
  indeterminate
}: {
  theme: Theme;
  checked: boolean;
  indeterminate: boolean;
}) =>
  checked &&
  css`
    background-color: ${indeterminate
      ? theme.colors.monochrome.white
      : theme.colors.intent.brand.dark};
    border-color: ${theme.colors.intent.brand.dark};
    color: ${indeterminate
      ? theme.colors.intent.brand.dark
      : theme.colors.intent.brand.light};
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
    background: ${checked
      ? theme.colors.monochrome.grey40
      : theme.colors.monochrome.white};
    border-color: ${theme.colors.border.default};
    color: ${checked ? theme.colors.grey60 : theme.colors.monochrome.white};
    cursor: not-allowed;
  `;

type Props = {
  checked: boolean;
  disabled: boolean;
  indeterminate: boolean;
};

const StyledCheckbox = styled(Flex)<Props>`
  ${baseStyles};
  ${checkedStyles};
  ${disabledStyles};
`;

StyledCheckbox.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center'
};

export default StyledCheckbox;
