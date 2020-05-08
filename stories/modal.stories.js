import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { storiesOf } from '@storybook/react';
import { number, text, withKnobs } from '@storybook/addon-knobs';

import notes from './modal.md';
import { Box, Button, Card, Grid, Heading, Icon, Modal } from '../src';

// For modal accessibility. See http://reactcommunity.org/react-modal/accessibility/ for details
ReactModal.setAppElement(document.body); // eslint-disable-line no-undef

class ModalStory extends React.Component {
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
              <Heading.h1 mb="0">My Modal Header</Heading.h1>
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

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);
stories.add(
  'default',
  () => (
    <ModalStory
      p="large"
      numberOfLines={number('Lines of Content', 100)}
      height={text('Height', 'calc(100% - 40px)')}
      width={text('Modal Width', '500px')}
    >
      Foo
    </ModalStory>
  ),
  { notes: { markdown: notes } }
);

stories.add(
  'scrolling page',
  () => (
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
  ),
  { notes: { markdown: notes } }
);
