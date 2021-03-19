import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { number, text } from '@storybook/addon-knobs';

import notes from './modal.md';
import { Box, Button, Card, Grid, Heading, Icon, Modal } from '../src';

// For modal accessibility. See http://reactcommunity.org/react-modal/accessibility/ for details
ReactModal.setAppElement(document.body); // eslint-disable-line no-undef

class ModalStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true
    };
  }

  get content() {
    const { numberOfLines } = this.props;

    const content = [];
    for (let i = 0; i < numberOfLines; i += 1) {
      content.push(<div key={`line-${i}`}>Modal content line of text</div>);
    }
    return content;
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  render() {
    const { modalIsOpen } = this.state;
    const { height, width } = this.props;

    return (
      <Box {...this.props}>
        <Button varient="primary" onClick={this.openModal}>
          Launch Modal
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          modalCss={{ width, height }}
        >
          <Card
            as="section"
            boxShadow="elevation2"
            gridTemplateRows="auto 1fr auto"
            overflow="hidden"
            height="100%"
          >
            <Grid
              alignItems="center"
              as="header"
              borderBottom="default"
              gridTemplateColumns="1fr 0fr"
              px="regular"
              py="small"
            >
              <Heading.H1 mb="0">My Modal Header</Heading.H1>
              <Button
                iconStart={<Icon name="cross" />}
                onClick={this.closeModal}
                size="large"
                variant="minimal"
              />
            </Grid>
            <Box overflow="auto" p="regular">
              {this.content}
            </Box>
            <Grid
              alignItems="center"
              as="footer"
              borderTop="default"
              bg="background.default"
              gridTemplateColumns="1fr 0fr"
              px="regular"
              py="small"
            >
              Modal Footer
              <Button variant="secondary" onClick={this.closeModal}>
                Cancel
              </Button>
            </Grid>
          </Card>
        </Modal>
      </Box>
    );
  }
}

ModalStory.propTypes = {
  height: PropTypes.string.isRequired,
  numberOfLines: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired
};

export default {
  title: 'Modal'
};

export const Default = () => (
  <ModalStory
    p="large"
    numberOfLines={number('Lines of Content', 100)}
    height={text('Height', 'calc(100% - 40px)')}
    width={text('Modal Width', '500px')}
  >
    Foo
  </ModalStory>
);

Default.story = {
  name: 'default',
  parameters: { notes: { markdown: notes } }
};

export const ScrollingPage = () => (
  <Box height="3000px">
    <ModalStory
      p="large"
      numberOfLines={number('Lines of Content', 100)}
      height={text('Height', '300px')}
      width={text('Modal Width', '500px')}
    >
      Bar
    </ModalStory>
  </Box>
);

ScrollingPage.story = {
  name: 'scrolling page',
  parameters: { notes: { markdown: notes } }
};
