import React from 'react';
import PropTypes from 'prop-types';

import AccordionHeader from './AccordionHeader';
import AccordionPanel from './AccordionPanel';

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
    const { children, header, headerNote, panelId } = this.props;

    return (
      <section>
        <AccordionHeader
          isOpen={this.isOpen}
          note={headerNote}
          onClick={this.onHeaderClick}
          panelId={panelId}
          text={header}
        />
        <AccordionPanel id={panelId} isOpen={this.isOpen}>
          {children}
        </AccordionPanel>
      </section>
    );
  }
}

AccordionSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  header: PropTypes.node.isRequired,
  headerNote: PropTypes.node,
  isOpen: PropTypes.bool,
  onHeaderClick: PropTypes.func,
  panelId: PropTypes.string.isRequired
};

AccordionSection.defaultProps = {
  isOpen: undefined,
  headerNote: null,
  onHeaderClick: () => {}
};

export default AccordionSection;
