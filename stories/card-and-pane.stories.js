/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { createWithComponent } from '../src/utils';
import { Card, Grid, Pane, Heading, Text } from '../src';

const stories = storiesOf('Cards', module);

const sharedProps = {
  height: '160px',
  alignContent: 'center',
  justifyContent: 'center'
};

const ExamplePane = createWithComponent(Pane, 'div', {
  defaultProps: sharedProps
});

const ExampleCard = createWithComponent(Card, 'div', {
  defaultProps: sharedProps
});

const Description = createWithComponent(Text, 'p', {
  defaultProps: {
    fontSize: 'size1',
    textAlign: 'center'
  }
});

stories.add('Cards & Panes', () => (
  <Fragment>
    <Grid
      m="regular"
      mt="largest"
      gridTemplateColumns="repeat(5, 200px)"
      gridColumnGap="40px"
      justifyContent="center"
    >
      <Heading.h2
        css={css`
          grid-column: 1/-1;
        `}
      >
        Panes
      </Heading.h2>
      <ExamplePane>
        <Heading.h6>Pane / Elevation 0</Heading.h6>
        <Description>Flat Panes</Description>
      </ExamplePane>

      <ExamplePane boxShadow="elevation1">
        <Heading.h6>Pane / Elevation 1</Heading.h6>
        <Description>Floating Panes</Description>
      </ExamplePane>

      <ExamplePane boxShadow="elevation2">
        <Heading.h6>Pane / Elevation 2</Heading.h6>
        <Description>Top Bar</Description>
      </ExamplePane>

      <ExamplePane boxShadow="elevation3">
        <Heading.h6>Pane / Elevation 3</Heading.h6>
        <Description>Side Sheet</Description>
      </ExamplePane>

      <ExamplePane boxShadow="elevation4">
        <Heading.h6>Pane / Elevation 4</Heading.h6>
        <Description>Unused</Description>
      </ExamplePane>
    </Grid>
    <Grid
      m="regular"
      mt="largest"
      gridTemplateColumns="repeat(5, 200px)"
      gridColumnGap="40px"
      justifyContent="center"
    >
      <Heading.h2
        css={css`
          grid-column: 1/-1;
        `}
      >
        Cards
      </Heading.h2>
      <ExampleCard>
        <Heading.h6>Card / Elevation 0</Heading.h6>
        <Description>Flat Cards</Description>
      </ExampleCard>

      <ExampleCard boxShadow="elevation1">
        <Heading.h6>Card / Elevation 1</Heading.h6>
        <Description>Floating Cards</Description>
      </ExampleCard>

      <ExampleCard boxShadow="elevation2">
        <Heading.h6>Card / Elevation 2</Heading.h6>
        <Description>Top Bar</Description>
      </ExampleCard>

      <ExampleCard boxShadow="elevation3">
        <Heading.h6>Card / Elevation 3</Heading.h6>
        <Description>Side Sheet</Description>
      </ExampleCard>

      <ExampleCard boxShadow="elevation4">
        <Heading.h6>Card / Elevation 4</Heading.h6>
        <Description>Unused</Description>
      </ExampleCard>
    </Grid>
  </Fragment>
));

export default stories;
