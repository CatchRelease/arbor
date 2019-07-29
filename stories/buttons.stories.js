import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs, select } from '@storybook/addon-knobs';

import { Box, Button, Grid, Heading, Icon } from '../src';

const ButtonTable = styled.table`
  width: 100%;

  td {
    padding: 10px;
  }
`;

const icon = <Icon name="annotation" />;
const icon2 = <Icon name="download" />;

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div style={{ padding: '10px', width: '500px' }}>
    <Heading.h1>Sizes</Heading.h1>

    <Grid gridGap="10px 138px" gridTemplateColumns="repeat(4, max-content)">
      <Heading.h5 as="h2">Small</Heading.h5>
      <Heading.h5 as="h2">Medium</Heading.h5>
      <Heading.h5 as="h2">Large</Heading.h5>
      <Heading.h5 as="h2">Jumbo</Heading.h5>

      <Button spin={boolean('spin', false)} size="small">
        Button Label
      </Button>
      <Button spin={boolean('spin', false)} size="medium">
        Button Label
      </Button>
      <Button spin={boolean('spin', false)} size="large">
        Button Label
      </Button>
      <Button spin={boolean('spin', false)} size="jumbo">
        Button Label
      </Button>
    </Grid>

    <Heading.h1>Style</Heading.h1>

    <Grid gridGap="10px 138px" gridTemplateColumns="repeat(3, 1fr)">
      <Button
        spin={boolean('spin', false)}
        variant="primary"
        whiteSpace="nowrap"
      >
        Primary
      </Button>
      <Button spin={boolean('spin', false)} variant="secondary">
        Secondary
      </Button>
      <Button spin={boolean('spin', false)} variant="minimal">
        Minimal
      </Button>

      <Button spin={boolean('spin', false)} variant="primary" disabled>
        Primary
      </Button>
      <Button spin={boolean('spin', false)} variant="secondary" disabled>
        Secondary
      </Button>
      <Button spin={boolean('spin', false)} variant="minimal" disabled>
        Minimal
      </Button>
    </Grid>

    <Box width="500px" my="regular">
      <Button spin={boolean('spin', false)} fullWidth variant="primary">
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
              spin={boolean('spin', false)}
              size="small"
              variant={select('Variant', variantOptions)}
            >
              Button Label
            </Button>
          </td>

          <td>
            <Button
              size="small"
              spin={boolean('spin', false)}
              variant={select('Variant', variantOptions)}
              iconEnd={icon2}
            >
              Button label
            </Button>
          </td>

          <td>
            <Button
              iconStart={icon}
              spin={boolean('spin', false)}
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
              spin={boolean('spin', false)}
              size="small"
              aria-label="Edit"
              variant={select('Variant', variantOptions)}
            />
          </td>
        </tr>

        <tr className={css({ marginBottom: '10px' })}>
          <td>
            <Button
              iconStart={icon}
              spin={boolean('spin', false)}
              size="medium"
              aria-label="Edit"
              variant={select('Variant', variantOptions)}
            >
              Button Label
            </Button>
          </td>

          <td>
            <Button
              spin={boolean('spin', false)}
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
              spin={boolean('spin', false)}
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
              spin={boolean('spin', false)}
              size="medium"
              aria-label="Edit"
              variant={select('Variant', variantOptions)}
            />
          </td>
        </tr>

        <tr className={css({ marginBottom: '10px' })}>
          <td>
            <Button
              iconStart={icon}
              spin={boolean('spin', false)}
              size="large"
              variant={select('Variant', variantOptions)}
            >
              Button Label
            </Button>
          </td>

          <td>
            <Button
              spin={boolean('spin', false)}
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
              spin={boolean('spin', false)}
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
              spin={boolean('spin', false)}
              size="large"
              aria-label="Edit"
              variant={select('Variant', variantOptions)}
            />
          </td>
        </tr>

        <tr className={css({ marginBottom: '10px' })}>
          <td>
            <Button
              iconStart={icon}
              spin={boolean('spin', false)}
              size="jumbo"
              variant={select('Variant', variantOptions)}
            >
              Button Label
            </Button>
          </td>

          <td>
            <Button
              spin={boolean('spin', false)}
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
              spin={boolean('spin', false)}
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
              spin={boolean('spin', false)}
              size="jumbo"
              aria-label="Edit"
              variant={select('Variant', variantOptions)}
            />
          </td>
        </tr>
      </tbody>
    </ButtonTable>
  </Box>
));
