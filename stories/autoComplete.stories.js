import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import { styledAutoCompleteComponents } from '../src/AutoComplete';
import notes from './autoComplete.md';
import { AutoComplete, Box, Heading } from '../src';
import palette from '../src/theme/colors/palette';

const colorOptions = ['', ...Object.keys(palette)].map((color, value) => ({
  label: color || 'neutral',
  paletteColor: color,
  subtle: false,
  value
}));

const neutralOptions = [
  {
    label: 'Apples',
    value: 1
  },
  {
    label: 'Pears',
    value: 2
  },
  {
    label: 'Bananas',
    value: 3
  },
  {
    label: 'Mangos',
    value: 4
  },
  {
    label: 'Lemons',
    value: 5
  },
  {
    label: 'Apricots',
    value: 6
  }
];

const variantOptions = ['async', 'asyncCreatable', 'creatable', 'default'];

const filterOptions = (options, inputValue: '') =>
  options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const { MultiValue } = styledAutoCompleteComponents;

const NeutralMultiValue = (props) => <MultiValue {...props} paletteColor="" />;

class AutoCompleteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  get additionalProps() {
    const { options, variant } = this.props;

    switch (variant) {
      case 'async':
      case 'asyncCreatable':
        return {
          loadOptions: (inputValue) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve(filterOptions(options, inputValue));
              }, 1000);
            })
        };
      default:
        return {};
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Box mb="larger">
        <AutoComplete
          {...{
            caption: `Select one ${
              boolean('isMulti', true) ? 'or more values' : 'value'
            }`,
            hideDropdownIndicator: boolean('hideDropdownIndicator', false),
            isMulti: boolean('isMulti', true),
            isDisabled: boolean('isDisabled', false),
            onChange: this.handleChange,
            value: selectedOption,
            ...this.additionalProps,
            ...this.props
          }}
        />
      </Box>
    );
  }
}

AutoCompleteExample.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  variant: PropTypes.string
};

AutoCompleteExample.defaultProps = {
  variant: 'default'
};

const stories = storiesOf('AutoComplete', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  () => (
    <Box as="section" p="regular">
      <Heading.h1>AutoComplete</Heading.h1>

      <AutoCompleteExample
        id="auto-complete-1"
        label="AutoComplete with unstyled badges"
        options={neutralOptions}
        variant={select('Variant', variantOptions, 'default')}
      />

      <AutoCompleteExample
        id="auto-complete-2"
        label="AutoComplete with unstyled default badges"
        options={neutralOptions.map((option) => ({
          ...option,
          variant: 'default'
        }))}
        variant={select('Variant', variantOptions, 'default')}
      />

      <AutoCompleteExample
        id="auto-complete-3"
        label="AutoComplete with color badges"
        options={colorOptions}
        variant={select('Variant', variantOptions, 'default')}
      />

      <AutoCompleteExample
        id="auto-complete-4"
        label="AutoComplete with subtle color badges"
        options={colorOptions.map((option) => ({ ...option, subtle: true }))}
        variant={select('Variant', variantOptions, 'default')}
      />

      <AutoCompleteExample
        id="auto-complete-5"
        label="AutoComplete with subtle color default badges"
        options={colorOptions.map((option) => ({
          ...option,
          subtle: true,
          variant: 'default'
        }))}
        variant={select('Variant', variantOptions, 'default')}
      />

      <AutoCompleteExample
        id="auto-complete-6"
        label="AutoComplete with custom neutral badges"
        options={neutralOptions}
        variant={select('Variant', variantOptions, 'default')}
        components={{
          MultiValue: NeutralMultiValue
        }}
      />
    </Box>
  ),
  { notes: { markdown: notes } }
);
