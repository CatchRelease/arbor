import { ComponentProps, FC, forwardRef, LegacyRef } from 'react';
import { ClassNames, css, Theme, withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  color,
  ColorProps,
  display,
  DisplayProps,
  fontSize,
  FontSizeProps,
  opacity,
  OpacityProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  textShadow,
  TextShadowProps
} from 'styled-system';

type Rotation = '90' | '180' | '270' | null;

const rotationStyles = ({ rotation }: { rotation?: Rotation }) =>
  rotation &&
  css`
    transform: rotate(${rotation}deg);
  `;

type RotationProps = {
  rotation?: Rotation;
};

export const StyledIcon = styled.i<
  ColorProps &
    DisplayProps &
    FontSizeProps &
    SpaceProps &
    TextAlignProps &
    RotationProps &
    TextShadowProps &
    OpacityProps
>`
  ${color};
  ${display};
  ${fontSize};
  ${space};
  ${textAlign};
  ${rotationStyles};
  ${textShadow};
  ${opacity};
`;

type InternalProps = ComponentProps<typeof StyledIcon> & {
  className?: string;
  iconRef?: LegacyRef<HTMLElement>;
  name: string;
  rotation?: Rotation;
  theme: Theme;
};

const Icon: FC<InternalProps> = ({
  className,
  iconRef,
  name,
  rotation = null,
  theme,
  ...props
}) => {
  const { iconFontPrefix } = theme;

  return (
    <ClassNames>
      {({ cx }) => (
        <StyledIcon
          className={cx(iconFontPrefix, `${iconFontPrefix}-${name}`, className)}
          ref={iconRef}
          rotation={rotation}
          {...props}
        />
      )}
    </ClassNames>
  );
};

const WithThemeIcon = withTheme(Icon);

const ForwardRefWithThemeIcon = forwardRef<
  HTMLElement,
  ComponentProps<typeof WithThemeIcon>
>((props, ref) => {
  return <WithThemeIcon {...props} iconRef={ref} />;
});

export type Props = ComponentProps<typeof ForwardRefWithThemeIcon>;

export default ForwardRefWithThemeIcon;
