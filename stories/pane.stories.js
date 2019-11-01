/** @jsx jsx */
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import notes from './pane.md';
import { Grid, Heading, Pane, Text } from '../src';

const ExamplePane = styled(Pane)`
  height: 160px;
  align-content: center;
  justify-content: center;
`;

const Description = styled(Text)`
  font-size: ${props => props.theme.fontSizes.size1};
  text-align: center;
`;

const stories = storiesOf('Panes', module);

stories.add(
  'defaul',
  () => (
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
        <Heading.h6 as="h3">Pane / Elevation 0</Heading.h6>
        <Description>Flat Panes</Description>
      </ExamplePane>

      <ExamplePane boxShadow="elevation1">
        <Heading.h6 as="h3">Pane / Elevation 1</Heading.h6>
        <Description>Floating Panes</Description>
      </ExamplePane>

      <ExamplePane boxShadow="elevation2">
        <Heading.h6 as="h3">Pane / Elevation 2</Heading.h6>
        <Description>Top Bar</Description>
      </ExamplePane>

      <ExamplePane boxShadow="elevation3">
        <Heading.h6 as="h3">Pane / Elevation 3</Heading.h6>
        <Description>Side Sheet</Description>
      </ExamplePane>

      <ExamplePane boxShadow="elevation4">
        <Heading.h6 as="h3">Pane / Elevation 4</Heading.h6>
        <Description>Unused</Description>
      </ExamplePane>
    </Grid>
  ),
  { notes: { markdown: notes } }
);
