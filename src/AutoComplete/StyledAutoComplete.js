import ReactSelect from 'react-select';
import ReactSelectAsync from 'react-select/async';
import ReactSelectAsyncCreatable from 'react-select/async-creatable';
import ReactSelectCreatable from 'react-select/creatable';
import PropTypes from 'prop-types';
import { withTheme } from '@emotion/react';

import buildReactSelectThemeOverrides from './buildReactSelectThemeOverrides';
import styledComponents from './styledAutoCompleteComponents';

const getReactSelectComponent = (variant) => {
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
    theme: (reactSelectTheme) => ({
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
