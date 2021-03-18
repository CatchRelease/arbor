import PropTypes from 'prop-types';

import FormField from '../FormField';
import StyledAutoComplete from './StyledAutoComplete';

const AutoComplete = ({ caption, id, label, labelAside, ...props }) => (
  <FormField caption={caption} id={id} label={label} labelAside={labelAside}>
    <StyledAutoComplete aria-label={label} {...props} />
  </FormField>
);

AutoComplete.propTypes = {
  /**
   * Optional text to be displayed underneath the input.
   */
  caption: PropTypes.string,

  /**
   * Boolean to hide the dropdown indicator in the input field.
   */
  hideDropdownIndicator: PropTypes.bool,

  /**
   * HTML ID for the input to be used in conjunction with the label for
   * accessiblity.
   */
  id: PropTypes.string.isRequired,

  /**
   * Label text for the form field
   */
  label: PropTypes.string.isRequired,

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  labelAside: PropTypes.node

  /**
   * All react-select props can be passed through to customize ReactSelect Components
   */
};

AutoComplete.defaultProps = {
  caption: '',
  hideDropdownIndicator: false,
  labelAside: null
};

export default AutoComplete;
