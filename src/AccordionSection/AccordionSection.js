import React from 'react';
import PropTypes from 'prop-types';

import AccordionHeader from './AccordionHeader';
import AccordionPanel from './AccordionPanel';
import VARIANTS from './variants';

class AccordionSection extends React.Component {
  state = {
    isOpen: false
  };

  get isControlled() {
    const { isOpen } = this.props;

    return isOpen !== undefined;
  }

  get isOpen() {
    const { isOpen: controlledIsOpen } = this.props;
    const { isOpen: internalIsOpen } = this.state;

    return this.isControlled ? controlledIsOpen : internalIsOpen;
  }

  onHeaderClick = () => {
    const { onHeaderClick } = this.props;

    if (!this.isControlled) {
      this.toggle();
    }

    onHeaderClick();
  };

  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const {
      children,
      header,
      headerNote,
      panelId,
      onHeaderClick,
      isOpen,
      variant,
      ...props
    } = this.props;

    return (
      <section>
        <AccordionHeader
          isOpen={this.isOpen}
          note={headerNote}
          onClick={this.onHeaderClick}
          panelId={panelId}
          text={header}
          variant={variant}
          {...props}
        />
        <AccordionPanel id={panelId} isOpen={this.isOpen} variant={variant}>
          {children}
        </AccordionPanel>
      </section>
    );
  }
}

AccordionSection.propTypes = {
  /**
   * Content to render inside the opened accordion
   * */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,

  /**
   * Content to display within the AccordionHeader component
   */
  header: PropTypes.node.isRequired,

  /**
   * Note to render within the AccordionHeader component
   */
  headerNote: PropTypes.node,

  /**
   * Manually specify whether or not the accordion is open or not. If it is not
   * provided, then the accordion section will maintain it's own open state.
   * When the component is uncontrolled, clicking the header will open the
   * accordion section.
   */
  isOpen: PropTypes.bool,

  /**
   * Callback function to call when the AccordionHeader component is clicked.
   */
  onHeaderClick: PropTypes.func,

  /**
   * HTML id attribute for the AccordionPanel component. Used in conjunction
   * with the AccordionHeader for the aria-controls attribute.
   */
  panelId: PropTypes.string.isRequired,

  /**
   * Link variant for styling. See storybook for examples.
   */
  variant: PropTypes.oneOf(VARIANTS)
};

AccordionSection.defaultProps = {
  isOpen: undefined,
  headerNote: null,
  onHeaderClick: () => {},
  variant: 'default'
};

export default AccordionSection;
