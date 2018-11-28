import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Box, Button, Grid, Heading, Icon } from '../src';

const ButtonTable = styled.table`
  width: 100%;

  td {
    padding: 10px;
  }
`;

const icon = <Icon name="cr-logo" />;
const icon2 = <Icon name="download" />;

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div style={{ padding: '10px', width: '500px' }}>
    <Heading.h1>Sizes</Heading.h1>

    <Grid gridGap="10px 138px" gridTemplateColumns="repeat(4, max-content)">
      <Heading.h5>Small</Heading.h5>
      <Heading.h5>Medium</Heading.h5>
      <Heading.h5>Large</Heading.h5>
      <Heading.h5>Jumbo</Heading.h5>

      <Button size="small">Button Label</Button>
      <Button size="medium">Button Label</Button>
      <Button size="large">Button Label</Button>
      <Button size="jumbo">Button Label</Button>
    </Grid>

    <Heading.h1>Style</Heading.h1>

    <Grid gridGap="10px 138px" gridTemplateColumns="repeat(3, 1fr)">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="minimal">Minimal</Button>

      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="minimal" disabled>
        Minimal
      </Button>
    </Grid>

    <Box width="500px" my="regular">
      <Button fullWidth variant="primary">
        Full width button
      </Button>
    </Box>
  </div>
));

const variantOptions = ['primary', 'secondary', 'minimal'];

stories.add('Icon button', () => (
  <Box m="regular">
    <ButtonTable>
      <thead>
        <tr className={css({ marginBottom: '10px' })}>
          <th>
            <Heading.h3 textAlign="left">iconStart</Heading.h3>
          </th>
          <th>
            <Heading.h3 textAlign="left">iconEnd</Heading.h3>
          </th>
          <th>
            <Heading.h3 textAlign="left">iconStart and iconEnd</Heading.h3>
          </th>
          <th>
            <Heading.h3 textAlign="left">Icon Only</Heading.h3>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className={css({ marginBottom: '10px' })}>
          <td>
            <Button
              iconStart={icon}
              size="small"
              variant={select('Variant', variantOptions)}
            >
              Button Label
            </Button>
          </td>

          <td>
            <Button
              size="small"
              variant={select('Variant', variantOptions)}
              iconEnd={icon2}
            >
              Button label
            </Button>
          </td>

          <td>
            <Button
              iconStart={icon}
              size="small"
              variant={select('Variant', variantOptions)}
              iconEnd={icon2}
            >
              Button label
            </Button>
          </td>
          <td>
            <Button
              iconStart={icon}
              size="small"
              variant={select('Variant', variantOptions)}
            />
          </td>
        </tr>

        <tr className={css({ marginBottom: '10px' })}>
          <td>
            <Button
              iconStart={icon}
              size="medium"
              variant={select('Variant', variantOptions)}
            >
              Button Label
            </Button>
          </td>

          <td>
            <Button
              size="medium"
              variant={select('Variant', variantOptions)}
              iconEnd={icon2}
            >
              Button label
            </Button>
          </td>

          <td>
            <Button
              iconStart={icon}
              size="medium"
              variant={select('Variant', variantOptions)}
              iconEnd={icon2}
            >
              Button label
            </Button>
          </td>

          <td>
            <Button
              iconStart={icon}
              size="medium"
              variant={select('Variant', variantOptions)}
            />
          </td>
        </tr>

        <tr className={css({ marginBottom: '10px' })}>
          <td>
            <Button
              iconStart={icon}
              size="large"
              variant={select('Variant', variantOptions)}
            >
              Button Label
            </Button>
          </td>

          <td>
            <Button
              size="large"
              variant={select('Variant', variantOptions)}
              iconEnd={icon2}
            >
              Button label
            </Button>
          </td>

          <td>
            <Button
              iconStart={icon}
              size="large"
              variant={select('Variant', variantOptions)}
              iconEnd={icon2}
            >
              Button label
            </Button>
          </td>

          <td>
            <Button
              iconStart={icon}
              size="large"
              variant={select('Variant', variantOptions)}
            />
          </td>
        </tr>

        <tr className={css({ marginBottom: '10px' })}>
          <td>
            <Button
              iconStart={icon}
              size="jumbo"
              variant={select('Variant', variantOptions)}
            >
              Button Label
            </Button>
          </td>

          <td>
            <Button
              size="jumbo"
              variant={select('Variant', variantOptions)}
              iconEnd={icon2}
            >
              Button label
            </Button>
          </td>

          <td>
            <Button
              iconStart={icon}
              size="jumbo"
              variant={select('Variant', variantOptions)}
              iconEnd={icon2}
            >
              Button label
            </Button>
          </td>

          <td>
            <Button
              iconStart={icon}
              size="jumbo"
              variant={select('Variant', variantOptions)}
            />
          </td>
        </tr>
      </tbody>
    </ButtonTable>
  </Box>
));
