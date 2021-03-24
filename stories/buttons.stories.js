import { css } from '@emotion/react';
import styled from '@emotion/styled';

import notes from './buttons.md';
import intent from '../src/theme/colors/intent';
import palette from '../src/theme/colors/palette';

import { Box, Button, Grid, Heading, Icon } from '../src';

const INTENTS = Object.keys(intent);
const PALETTES = [''].concat(Object.keys(palette));

const ButtonTable = styled.table`
  width: 100%;

  td {
    padding: 10px;
  }
`;

const icon = <Icon name="lock" />;
const icon2 = <Icon name="chevron-down" />;

export default {
  title: 'Buttons',
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: INTENTS
      }
    },
    paletteColor: {
      name: 'paletteColor',
      control: {
        type: 'select',
        options: PALETTES
      }
    },
    variant: {
      name: 'variant',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'minimal']
      }
    }
  }
};

export const Default = (args) => (
  <div style={{ padding: '10px', width: '90%' }}>
    <Heading.H1>Sizes</Heading.H1>

    <Grid
      gridGap="10px 138px"
      gridTemplateColumns={[
        'repeat(1, 0fr)',
        'repeat(1, 0fr)',
        'repeat(3, 1fr)',
        'repeat(5, 1fr)'
      ]}
    >
      <div>
        <Heading.H5 as="h2">Small</Heading.H5>

        <Button {...args} size="small">
          button label
        </Button>
      </div>
      <div>
        <Heading.H5 as="h2">Medium</Heading.H5>

        <Button {...args} size="medium">
          button label
        </Button>
      </div>
      <div>
        <Heading.H5 as="h2">Large</Heading.H5>

        <Button {...args} size="large">
          button label
        </Button>
      </div>
      <div>
        <Heading.H5 as="h2">Jumbo</Heading.H5>

        <Button {...args} size="jumbo">
          button label
        </Button>
      </div>
      <div>
        <Heading.H5 as="h2">Responsive Size</Heading.H5>

        <Button {...args} size={['small', 'medium', 'large', 'jumbo']}>
          button label
        </Button>
      </div>
    </Grid>

    <Heading.H1>Style</Heading.H1>

    <Grid
      gridGap="10px 138px"
      gridTemplateColumns={[
        'repeat(1, 0fr)',
        'repeat(1, 0fr)',
        'repeat(3, 1fr)'
      ]}
    >
      <Button {...args} variant="primary" whiteSpace="nowrap">
        primary
      </Button>
      <Button {...args} variant="secondary">
        secondary
      </Button>
      <Button {...args} variant="minimal">
        minimal
      </Button>

      <Button {...args} variant="primary" disabled>
        primary
      </Button>
      <Button {...args} variant="secondary" disabled>
        secondary
      </Button>
      <Button {...args} variant="minimal" disabled>
        minimal
      </Button>
    </Grid>

    <Box width="500px" my="regular">
      <Button {...args} fullWidth variant="primary">
        full width button
      </Button>
    </Box>
    <Box width="500px" my="regular">
      <Button {...args} fullWidth={[true, true, false]} variant="primary">
        responsive full width button
      </Button>
    </Box>
  </div>
);

Default.args = { intent: 'brand', spin: false };
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };

export const IconButton = (args) => {
  return (
    <Box m="regular">
      <Box mb="large">
        <ButtonTable>
          <thead>
            <tr className={css({ marginBottom: '10px' })}>
              <th>
                <Heading.H3 textAlign="left">iconStart</Heading.H3>
              </th>
              <th>
                <Heading.H3 textAlign="left">iconEnd</Heading.H3>
              </th>
              <th>
                <Heading.H3 textAlign="left">iconStart and iconEnd</Heading.H3>
              </th>
              <th>
                <Heading.H3 textAlign="left">Icon Only</Heading.H3>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className={css({ marginBottom: '10px' })}>
              <td>
                <Button iconStart={icon} size="small" {...args}>
                  button label
                </Button>
              </td>

              <td>
                <Button size="small" iconEnd={icon2} {...args}>
                  button label
                </Button>
              </td>

              <td>
                <Button iconStart={icon} size="small" iconEnd={icon2} {...args}>
                  button label
                </Button>
              </td>
              <td>
                <Button
                  iconStart={icon}
                  size="small"
                  aria-label="Edit"
                  {...args}
                />
              </td>
            </tr>

            <tr className={css({ marginBottom: '10px' })}>
              <td>
                <Button
                  iconStart={icon}
                  size="medium"
                  aria-label="Edit"
                  {...args}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button size="medium" iconEnd={icon2} {...args}>
                  button label
                </Button>
              </td>

              <td>
                <Button
                  iconStart={icon}
                  size="medium"
                  iconEnd={icon2}
                  {...args}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  iconStart={icon}
                  size="medium"
                  aria-label="Edit"
                  {...args}
                />
              </td>
            </tr>

            <tr className={css({ marginBottom: '10px' })}>
              <td>
                <Button iconStart={icon} size="large" {...args}>
                  button label
                </Button>
              </td>

              <td>
                <Button size="large" iconEnd={icon2} {...args}>
                  button label
                </Button>
              </td>

              <td>
                <Button iconStart={icon} size="large" iconEnd={icon2} {...args}>
                  button label
                </Button>
              </td>

              <td>
                <Button
                  iconStart={icon}
                  size="large"
                  aria-label="Edit"
                  {...args}
                />
              </td>
            </tr>

            <tr className={css({ marginBottom: '10px' })}>
              <td>
                <Button iconStart={icon} size="jumbo" {...args}>
                  button label
                </Button>
              </td>

              <td>
                <Button size="jumbo" iconEnd={icon2} {...args}>
                  button label
                </Button>
              </td>

              <td>
                <Button iconStart={icon} size="jumbo" iconEnd={icon2} {...args}>
                  button label
                </Button>
              </td>

              <td>
                <Button
                  iconStart={icon}
                  size="jumbo"
                  aria-label="Edit"
                  {...args}
                />
              </td>
            </tr>
          </tbody>
        </ButtonTable>
      </Box>

      <Box>
        <Heading.H2>Full Width</Heading.H2>

        <Box mb="regular">
          <Button iconStart={icon} fullWidth size="jumbo" {...args}>
            button label
          </Button>
        </Box>

        <Box mb="regular">
          <Button fullWidth iconEnd={icon2} size="jumbo" {...args}>
            button label
          </Button>
        </Box>

        <Box mb="regular">
          <Button
            fullWidth
            iconEnd={icon2}
            iconStart={icon}
            size="jumbo"
            {...args}
          >
            button label
          </Button>
        </Box>

        <Box mb="regular">
          <Button
            aria-label="Edit"
            fullWidth
            iconStart={icon}
            size="jumbo"
            {...args}
          />
        </Box>
      </Box>
    </Box>
  );
};

IconButton.args = { intent: 'brand', spin: false, paletteColor: '' };
IconButton.storyName = 'Icon button';
IconButton.parameters = { notes: { markdown: notes } };
