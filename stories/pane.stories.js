import styled from '@emotion/styled';
import { css } from '@emotion/react';

import notes from './pane.md';
import { Grid, Heading, Pane, Text } from '../src';

const ExamplePane = styled(Pane)`
  height: 160px;
  align-content: center;
  justify-content: center;
`;

const Description = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.size1};
  text-align: center;
`;

export default {
  title: 'Panes'
};

export const Default = () => (
  <Grid
    m="regular"
    mt="largest"
    gridTemplateColumns="repeat(5, 200px)"
    gridColumnGap="40px"
    justifyContent="center"
  >
    <Heading.H2
      css={css`
        grid-column: 1/-1;
      `}
    >
      Panes
    </Heading.H2>
    <ExamplePane>
      <Heading.H6 as="h3">Pane / Elevation 0</Heading.H6>
      <Description>Flat Panes</Description>
    </ExamplePane>

    <ExamplePane boxShadow="elevation1">
      <Heading.H6 as="h3">Pane / Elevation 1</Heading.H6>
      <Description>Floating Panes</Description>
    </ExamplePane>

    <ExamplePane boxShadow="elevation2">
      <Heading.H6 as="h3">Pane / Elevation 2</Heading.H6>
      <Description>Top Bar</Description>
    </ExamplePane>

    <ExamplePane boxShadow="elevation3">
      <Heading.H6 as="h3">Pane / Elevation 3</Heading.H6>
      <Description>Side Sheet</Description>
    </ExamplePane>

    <ExamplePane boxShadow="elevation4">
      <Heading.H6 as="h3">Pane / Elevation 4</Heading.H6>
      <Description>Unused</Description>
    </ExamplePane>
  </Grid>
);

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
