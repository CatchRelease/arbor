import { css } from '@emotion/react';

import { forceReRender } from '@storybook/react';

import notes from './accordion.md';
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
import VARIANTS from '../src/AccordionSection/variants';
import SIZES from '../src/Button/sizes';

let isOpen = false;
const onHeaderClick = () => {
  isOpen = !isOpen;
  forceReRender();
};

const sizeOptions = SIZES.slice().reverse();
const defaultButtonSize = sizeOptions[0];

const trashIcon = <Icon name="trash" />;
const annotationIcon = <Icon name="annotation" />;
const AccordionContainer = Flex.withComponent('div');
AccordionContainer.defaultProps = {
  mt: '100px',
  flexDirection: 'column',
  alignItems: 'center'
};

const doAlert = (msg) => window.alert(msg); // eslint-disable-line no-alert, no-undef

export default {
  title: 'Accordion',
  argTypes: {
    size: {
      options: sizeOptions,
      control: {
        type: 'select'
      }
    },
    variant: {
      options: VARIANTS,
      control: {
        type: 'select'
      }
    }
  }
};

export const Default = (args) => {
  const { size, variant } = args;

  const noteWithButtons = (
    <Box my="smallest">
      <Button
        variant="minimal"
        size={size}
        iconStart={annotationIcon}
        onClick={(e) => {
          doAlert('message');
          e.stopPropagation();
        }}
      >
        Message
      </Button>
      <Button
        variant="minimal"
        size={size}
        iconStart={trashIcon}
        aria-label="Delete"
        onClick={(e) => {
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
        size={size}
        onClick={(e) => {
          doAlert('secondary');
          e.stopPropagation();
        }}
      >
        Secondary
      </Button>
      <Button
        variant="primary"
        size={size}
        onClick={(e) => {
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
        size={size}
        onClick={(e) => {
          doAlert('minimal');
          e.stopPropagation();
        }}
      >
        Minimal
      </Button>
      <Button
        variant="secondary"
        size={size}
        onClick={(e) => {
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
        <Heading.H2>Accordion</Heading.H2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header 1: Controlled</Box>}
              headerNote={note}
              // eslint-disable-next-line react/destructuring-assignment
              isOpen={args.isOpen}
              onHeaderClick={onHeaderClick}
              panelId="header-1-controlled"
              variant={variant}
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
              variant={variant}
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
              variant={variant}
            >
              <Box p="regular">
                <Heading.H2>Section 1</Heading.H2>
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
                <Heading.H2>Section 2</Heading.H2>

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
        <Heading.H2>Accordion with custom styles</Heading.H2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header with Custom Styles</Box>}
              headerNote={note}
              panelId="custom-styles-header"
              css={css`
                background: red;
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
        <Heading.H2>Accordion with minimal buttons in notes</Heading.H2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header with minimal buttons</Box>}
              headerNote={noteWithButtons}
              panelId="minimal-button-notes-panel-1"
              variant={variant}
            >
              <Box p="regular">
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
        <Heading.H2>Accordion with primary buttons</Heading.H2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header with primary buttons</Box>}
              headerNote={noteWithPrimaryButtons}
              panelId="primary-buttons-panel-1"
              variant={variant}
            >
              <Box p="regular">
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
        <Heading.H2>Accordion with secondary buttons</Heading.H2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header with secondary buttons</Box>}
              headerNote={noteWithSecondaryButtons}
              panelId="secondary-buttons-panel-1"
              variant={variant}
            >
              <Box p="regular">
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
        <Heading.H2>Accordion with chevron on the right</Heading.H2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header text</Box>}
              panelId="icon-right-header"
              iconRight="true"
            >
              <Box p="regular">
                <Text mb="regular">
                  You can change the position of the chevron.
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
};

Default.args = { isOpen, size: defaultButtonSize, variant: VARIANTS[0] };
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
