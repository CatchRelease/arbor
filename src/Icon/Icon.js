/** @jsx jsx */
import { ClassNames, css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { color, display, fontSize, textAlign, space } from 'styled-system';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

const rotationStyles = ({ rotation }) =>
  rotation &&
  css`
    transform: rotate(${rotation}deg);
  `;

const StyledIcon = styled.i`
  ${color};
  ${display};
  ${fontSize};
  ${space};
  ${textAlign};
  ${rotationStyles};
`;

StyledIcon.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes
};

const Icon = ({ name, theme, ...props }) => {
  const { iconFontPrefix } = theme;

  return (
    <ClassNames>
      {({ cx }) => (
        <StyledIcon
          className={cx(iconFontPrefix, `${iconFontPrefix}-${name}`)}
          {...props}
        />
      )}
    </ClassNames>
  );
};

Icon.propTypes = {
  /**
   * Name of the icon to render. Must be a supported icon loaded via an icon
   * font on the page. The font prefix will be prepended and can be customized
   * via the theme iconFontPrefix variable.
   */
  name: PropTypes.string.isRequired,

  /**
   * Icon font rotation. Rotation will be passed in to the CSS transform
   * property using rotate.
   */
  rotation: PropTypes.oneOf(['90', '180', '270', null])
};

Icon.defaultProps = {
  rotation: null
};

export default withTheme(Icon);
