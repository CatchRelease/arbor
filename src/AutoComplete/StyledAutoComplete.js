import React from 'react';
import ReactSelect from 'react-select';
import ReactSelectAsync from 'react-select/async';
import ReactSelectAsyncCreatable from 'react-select/async-creatable';
import ReactSelectCreatable from 'react-select/creatable';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

import buildReactSelectThemeOverrides from './buildReactSelectThemeOverrides';

import StyledAutoCompleteClearIndicator from './StyledAutoCompleteClearIndicator';
import StyledAutoCompleteContainer from './StyledAutoCompleteContainer';
import StyledAutoCompleteControl from './StyledAutoCompleteControl';
import StyledAutoCompleteDropdownIndicator from './StyledAutoCompleteDropdownIndicator';
import StyledAutoCompleteIndicatorsContainer from './StyledAutoCompleteIndicatorsContainer';
import StyledAutoCompleteInput from './StyledAutoCompleteInput';
import StyledAutoCompleteMenu from './StyledAutoCompleteMenu';
import StyledAutoCompleteMenuList from './StyledAutoCompleteMenuList';
import StyledAutoCompleteMultiValue from './StyledAutoCompleteMultiValue';
import StyledAutoCompleteNoOptionsMessage from './StyledAutoCompleteNoOptionsMessage';
import StyledAutoCompleteOption from './StyledAutoCompleteOption';
import StyledAutoCompletePlaceholder from './StyledAutoCompletePlaceholder';
import StyledAutoCompleteValueContainer from './StyledAutoCompleteValueContainer';

const styledComponents = {
  ClearIndicator: StyledAutoCompleteClearIndicator,
  Container: StyledAutoCompleteContainer,
  Control: StyledAutoCompleteControl,
  DropdownIndicator: StyledAutoCompleteDropdownIndicator,
  IndicatorsContainer: StyledAutoCompleteIndicatorsContainer,
  Input: StyledAutoCompleteInput,
  Menu: StyledAutoCompleteMenu,
  MenuList: StyledAutoCompleteMenuList,
  MultiValue: StyledAutoCompleteMultiValue,
  NoOptionsMessage: StyledAutoCompleteNoOptionsMessage,
  Placeholder: StyledAutoCompletePlaceholder,
  Option: StyledAutoCompleteOption,
  ValueContainer: StyledAutoCompleteValueContainer
};

const getReactSelectComponent = variant => {
  switch (variant) {
    case 'async':
      return ReactSelectAsync;
    case 'asyncCreatable':
      return ReactSelectAsyncCreatable;
    case 'creatable':
      return ReactSelectCreatable;
    default:
      return ReactSelect;
  }
};

const StyledAutoComplete = ({ components, theme, variant, ...props }) => {
  const SelectComponent = getReactSelectComponent(variant);
  const reactSelectProps = {
    components: { ...styledComponents, ...components },
    theme: reactSelectTheme => ({
      ...reactSelectTheme,
      ...buildReactSelectThemeOverrides(theme),
      ...theme
    }),
    ...props
  };

  return <SelectComponent {...{ ...reactSelectProps, ...props }} />;
};

StyledAutoComplete.propTypes = {
  components: PropTypes.objectOf(PropTypes.elementType),
  theme: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  variant: PropTypes.oneOf(['async', 'asyncCreatable', 'creatable', 'default'])
};

StyledAutoComplete.defaultProps = {
  components: {},
  variant: 'default'
};

export default withTheme(StyledAutoComplete);
