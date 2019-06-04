import React from 'react';
import ReactSelect from 'react-select';
import ReactSelectAsync from 'react-select/async';
import ReactSelectCreatable from 'react-select/creatable';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

import StyledClearIndicator from './StyledClearIndicator';
import StyledMultiValue from './StyledMultiValue';
import buildReactSelectThemeOverrides from './buildReactSelectThemeOverrides';

const addStyles = styles => provided => ({ ...provided, ...styles });

const components = {
  MultiValue: StyledMultiValue,
  ClearIndicator: StyledClearIndicator
};

const getReactSelectComponent = variant => {
  switch (variant) {
    case 'creatable':
      return ReactSelectCreatable;
    case 'async':
      return ReactSelectAsync;
    default:
      return ReactSelect;
  }
};

const getStyles = ({ radii, shadows, brandFont, space }) => ({
  container: addStyles({
    fontFamily: brandFont,
    marginBottom: space.smallest,
    marginTop: space.smallest
  }),
  dropdownIndicator: addStyles({ display: 'none' }),
  control: addStyles({ boxShadow: 'none' }),
  indicatorSeparator: addStyles({ display: 'none' }),
  menu: addStyles({
    borderRadius: radii.large,
    boxShadow: shadows.elevation2
  }),
  valueContainer: addStyles({ padding: `0 ${space.smaller}` })
});

const StyledAutoComplete = ({ theme, variant, ...props }) => {
  const SelectComponent = getReactSelectComponent(variant);
  const reactSelectProps = {
    components,
    styles: getStyles(theme),
    theme: reactSelectTheme => ({
      ...reactSelectTheme,
      ...buildReactSelectThemeOverrides(theme)
    }),
    ...props
  };

  return <SelectComponent {...{ ...reactSelectProps, ...props }} />;
};

StyledAutoComplete.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  variant: PropTypes.oneOf(['async', 'creatable', 'default'])
};

StyledAutoComplete.defaultProps = {
  variant: 'default'
};

export default withTheme(StyledAutoComplete);
