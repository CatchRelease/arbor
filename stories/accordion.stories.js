/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { forceReRender, storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import {
  AccordionSection,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Icon,
  Text
} from '../src';

const stories = storiesOf('Accordion', module);
stories.addDecorator(withKnobs);

let isOpen = false;
const onHeaderClick = () => {
  isOpen = !isOpen;
  forceReRender();
};

const buttonOptions = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  Jumbo: 'jumbo'
};
const defaultButtonSize = 'small';

const trashIcon = <Icon name="trash" />;
const annotationIcon = <Icon name="annotation" />;
const AccordionContainer = Flex.withComponent('div'); // eslint-disable-line arbor/use-create-with-component
AccordionContainer.defaultProps = {
  mt: '100px',
  flexDirection: 'column',
  alignItems: 'center'
};

const doAlert = msg => window.alert(msg); // eslint-disable-line no-alert, no-undef

stories.add('default', () => {
  const sizeSelect = select('Size', buttonOptions, defaultButtonSize);

  const noteWithButtons = (
    <Box my="smallest">
      <Button
        variant="minimal"
        size={sizeSelect}
        iconStart={annotationIcon}
        onClick={e => {
          doAlert('message');
          e.stopPropagation();
        }}
      >
        Message
      </Button>
      <Button
        variant="minimal"
        size={sizeSelect}
        iconStart={trashIcon}
        aria-label="Delete"
        onClick={e => {
          doAlert('Delete');
          e.stopPropagation();
        }}
      />
    </Box>
  );

  const noteWithPrimaryButtons = (
    <Box my="smallest">
      <Button
        variant="secondary"
        size={sizeSelect}
        onClick={e => {
          doAlert('secondary');
          e.stopPropagation();
        }}
      >
        Secondary
      </Button>
      <Button
        variant="primary"
        size={sizeSelect}
        onClick={e => {
          doAlert('primary');
          e.stopPropagation();
        }}
      >
        Primary
      </Button>
    </Box>
  );

  const noteWithSecondaryButtons = (
    <Box my="smallest">
      <Button
        variant="minimal"
        size={sizeSelect}
        onClick={e => {
          doAlert('minimal');
          e.stopPropagation();
        }}
      >
        Minimal
      </Button>
      <Button
        variant="secondary"
        size={sizeSelect}
        onClick={e => {
          doAlert('secondary');
          e.stopPropagation();
        }}
      >
        Secondary
      </Button>
    </Box>
  );

  const note = (
    <Text fontSize="size4" textAlign="right" color="text.muted">
      With Note
    </Text>
  );

  return (
    <>
      <AccordionContainer>
        <Heading.h2>Accordion</Heading.h2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header 1: Controlled</Box>}
              headerNote={note}
              isOpen={boolean('isOpen', isOpen)}
              onHeaderClick={onHeaderClick}
              panelId="header-1-controlled"
            >
              <Box p="regular">
                <Text mb="regular">
                  You can manually control an accordion by using isOpen and
                  onHeaderClick together.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Box>
            </AccordionSection>
            <AccordionSection
              header={<Box my="small">Header 2: Uncontrolled </Box>}
              headerNote={note}
              panelId="header-2-uncontrolled"
            >
              <Box p="regular">
                <Text mb="regular">
                  If you exclude the isOpen property, the accordion state will
                  be automattically managed internally
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Box>
            </AccordionSection>
            <AccordionSection
              header={
                <Box my="small">Header 3: Multiple Sections of Content</Box>
              }
              panelId="header-3-uncontrolled"
            >
              <Box p="regular">
                <Heading.h2>Section 1</Heading.h2>
                <Text mb="regular">You can exclude the note property</Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Box>

              <Box p="regular">
                <Heading.h2>Section 2</Heading.h2>

                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Box>
            </AccordionSection>

            <AccordionSection
              header={<Box my="small">Header 4: Custom Styles</Box>}
              headerNote={note}
              panelId="header-4-controlled"
              css={css`
                background: inherit;
              `}
            >
              <Box p="regular">
                <Text mb="regular">
                  You can customize the look and feel of the header.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Box>
            </AccordionSection>
          </Card>
        </Flex>
      </AccordionContainer>

      <AccordionContainer>
        <Heading.h2>Accordion with minimal buttons in notes</Heading.h2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header 1: Controlled</Box>}
              headerNote={noteWithButtons}
              isOpen={boolean('isOpen', isOpen)}
              onHeaderClick={onHeaderClick}
              panelId="minimal-button-notes-panel-1"
            >
              <Box p="regular">
                <Text mb="regular">
                  You can manually control an accordion by using isOpen and
                  onHeaderClick together.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Box>
            </AccordionSection>
          </Card>
        </Flex>
      </AccordionContainer>

      <AccordionContainer>
        <Heading.h2>Accordion with primary buttons</Heading.h2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header 1: Controlled</Box>}
              headerNote={noteWithPrimaryButtons}
              isOpen={boolean('isOpen', isOpen)}
              onHeaderClick={onHeaderClick}
              panelId="primary-buttons-panel-1"
            >
              <Box p="regular">
                <Text mb="regular">
                  You can manually control an accordion by using isOpen and
                  onHeaderClick together.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Box>
            </AccordionSection>
          </Card>
        </Flex>
      </AccordionContainer>

      <AccordionContainer>
        <Heading.h2>Accordion with secondary buttons</Heading.h2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header 1: Controlled</Box>}
              headerNote={noteWithSecondaryButtons}
              isOpen={boolean('isOpen', isOpen)}
              onHeaderClick={onHeaderClick}
              panelId="secondary-buttons-panel-1"
            >
              <Box p="regular">
                <Text mb="regular">
                  You can manually control an accordion by using isOpen and
                  onHeaderClick together.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Box>
            </AccordionSection>
          </Card>
        </Flex>
      </AccordionContainer>
    </>
  );
});
