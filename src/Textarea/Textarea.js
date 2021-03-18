import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import StyledTextarea from './StyledTextarea';

const Textarea = forwardRef(
  ({ caption, label, labelAside, id, ...props }, ref) => (
    <FormField caption={caption} id={id} label={label} labelAside={labelAside}>
      <StyledTextarea {...{ ...props, id, ref }} />
    </FormField>
  )
);

Textarea.propTypes = {
  /**
   * Optional help text to be rendered within the FormField component
   */
  caption: PropTypes.string,

  /**
   * HTML ID attribute for the inpt
   */
  id: PropTypes.string.isRequired,

  /**
   * Label text for the input
   */
  label: PropTypes.string,

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  labelAside: PropTypes.node
};

Textarea.defaultProps = {
  caption: '',
  label: '',
  labelAside: null
};

export default Textarea;
