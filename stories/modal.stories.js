import React from 'react';
import ReactModal from 'react-modal';
import { storiesOf } from '@storybook/react';
import { number, text, withKnobs } from '@storybook/addon-knobs';

import { Box, Button, Card, Grid, Heading, Icon, Modal } from '../src';

// For modal accessibility. See http://reactcommunity.org/react-modal/accessibility/ for details
ReactModal.setAppElement(document.body); // eslint-disable-line no-undef

class ModalStory extends React.Component {
  state = {
    modalIsOpen: true
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  getContent = lines => {
    const content = [];
    for (let i = 0; i < lines; i += 1) {
      content.push(<div>Modal content line of text</div>);
    }
    return content;
  };

  render() {
    const { modalIsOpen } = this.state;

    return (
      <Box {...this.props}>
        <Button varient="primary" onClick={this.openModal}>
          Launch Modal
        </Button>
        <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal}>
          <Card
            as="section"
            boxShadow="elevation2"
            gridTemplateRows="auto 1fr auto"
            maxHeight={text('Max Height', '100%')}
            overflow="hidden"
            width={text('Modal Width', '500px')}
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
              {this.getContent(number('Lines of Content', 100))}
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

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);
stories.add('default', () => <ModalStory p="large">Foo</ModalStory>);
