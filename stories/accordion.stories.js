import React from 'react';
import { forceReRender, storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import {
  Accordion,
  AccordionSection,
  Button,
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

const trashIcon = <Icon name="trash" />;
const annotationIcon = <Icon name="annotation" />;
const noteWithButtons = (
  <>
    <Button variant="minimal" size="small" iconStart={annotationIcon}>
      Message
    </Button>
    <Button variant="minimal" size="small" iconStart={trashIcon} />
  </>
);

const noteWithPrimaryButtons = (
  <>
    <Button variant="secondary" size="small">
      Secondary
    </Button>
    <Button variant="primary" size="small">
      Primary
    </Button>
  </>
);

const noteWithSecondaryButtons = (
  <>
    <Button variant="minimal" size="small">
      Minimal
    </Button>
    <Button variant="secondary" size="small">
      Secondary
    </Button>
  </>
);

const AccordionContainer = Flex.withComponent('div'); // eslint-disable-line arbor/use-create-with-component
AccordionContainer.defaultProps = {
  mt: '100px',
  flexDirection: 'column',
  alignItems: 'center'
};

stories.add('default', () => (
  <>
    <AccordionContainer>
      <Heading.h2>Accordion</Heading.h2>

      <Flex justifyContent="center">
        <Accordion width="500px">
          <AccordionSection
            header="Header 1: Controlled"
            headerNote="With Note"
            isOpen={boolean('isOpen', isOpen)}
            onHeaderClick={onHeaderClick}
            panelId="header-1-controlled"
          >
            <Text mb="regular">
              You can manually control an accordion by using isOpen and
              onHeaderClick together.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, an hinc honestatis his, an his tota
              aperiam intellegebat. Mel delenit delectus et, veniam soleat
              pericula vix et. Aeque accumsan quo ex, albucius pericula
              expetendis quo ei. Debitis oporteat at eos, mei justo eruditi
              periculis te. Sed no mazim liber dicunt, aeque viris animal te
              quo, ius lorem feugiat veritus id.
            </Text>
          </AccordionSection>
          <AccordionSection
            header="Header 2: Uncontrolled"
            headerNote="Note"
            panelId="header-2-uncontrolled"
          >
            <Text mb="regular">
              If you exclude the isOpen property, the accordion state will be
              automattically managed internally
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, an hinc honestatis his, an his tota
              aperiam intellegebat. Mel delenit delectus et, veniam soleat
              pericula vix et. Aeque accumsan quo ex, albucius pericula
              expetendis quo ei. Debitis oporteat at eos, mei justo eruditi
              periculis te. Sed no mazim liber dicunt, aeque viris animal te
              quo, ius lorem feugiat veritus id.
            </Text>
          </AccordionSection>
          <AccordionSection
            header="Header 3: Uncontrolled"
            panelId="header-3-uncontrolled"
          >
            <Text mb="regular">You can exclude the note property</Text>
            <Text>
              Lorem ipsum dolor sit amet, an hinc honestatis his, an his tota
              aperiam intellegebat. Mel delenit delectus et, veniam soleat
              pericula vix et. Aeque accumsan quo ex, albucius pericula
              expetendis quo ei. Debitis oporteat at eos, mei justo eruditi
              periculis te. Sed no mazim liber dicunt, aeque viris animal te
              quo, ius lorem feugiat veritus id.
            </Text>
          </AccordionSection>
        </Accordion>
      </Flex>
    </AccordionContainer>

    <AccordionContainer>
      <Heading.h2>Accordion with minimal buttons in notes</Heading.h2>

      <Flex justifyContent="center">
        <Accordion width="500px">
          <AccordionSection
            header="Header 1: Controlled"
            headerNote={noteWithButtons}
            isOpen={boolean('isOpen', isOpen)}
            onHeaderClick={onHeaderClick}
            panelId="header-1-controlled"
          >
            <Text mb="regular">
              You can manually control an accordion by using isOpen and
              onHeaderClick together.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, an hinc honestatis his, an his tota
              aperiam intellegebat. Mel delenit delectus et, veniam soleat
              pericula vix et. Aeque accumsan quo ex, albucius pericula
              expetendis quo ei. Debitis oporteat at eos, mei justo eruditi
              periculis te. Sed no mazim liber dicunt, aeque viris animal te
              quo, ius lorem feugiat veritus id.
            </Text>
          </AccordionSection>
        </Accordion>
      </Flex>
    </AccordionContainer>

    <AccordionContainer>
      <Heading.h2>Accordion with primary buttons</Heading.h2>

      <Flex justifyContent="center">
        <Accordion width="500px">
          <AccordionSection
            header="Header 1: Controlled"
            headerNote={noteWithPrimaryButtons}
            isOpen={boolean('isOpen', isOpen)}
            onHeaderClick={onHeaderClick}
            panelId="header-1-controlled"
          >
            <Text mb="regular">
              You can manually control an accordion by using isOpen and
              onHeaderClick together.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, an hinc honestatis his, an his tota
              aperiam intellegebat. Mel delenit delectus et, veniam soleat
              pericula vix et. Aeque accumsan quo ex, albucius pericula
              expetendis quo ei. Debitis oporteat at eos, mei justo eruditi
              periculis te. Sed no mazim liber dicunt, aeque viris animal te
              quo, ius lorem feugiat veritus id.
            </Text>
          </AccordionSection>
        </Accordion>
      </Flex>
    </AccordionContainer>

    <AccordionContainer>
      <Heading.h2>Accordion with secondary buttons</Heading.h2>

      <Flex justifyContent="center">
        <Accordion width="500px">
          <AccordionSection
            header="Header 1: Controlled"
            headerNote={noteWithSecondaryButtons}
            isOpen={boolean('isOpen', isOpen)}
            onHeaderClick={onHeaderClick}
            panelId="header-1-controlled"
          >
            <Text mb="regular">
              You can manually control an accordion by using isOpen and
              onHeaderClick together.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, an hinc honestatis his, an his tota
              aperiam intellegebat. Mel delenit delectus et, veniam soleat
              pericula vix et. Aeque accumsan quo ex, albucius pericula
              expetendis quo ei. Debitis oporteat at eos, mei justo eruditi
              periculis te. Sed no mazim liber dicunt, aeque viris animal te
              quo, ius lorem feugiat veritus id.
            </Text>
          </AccordionSection>
        </Accordion>
      </Flex>
    </AccordionContainer>
  </>
));
