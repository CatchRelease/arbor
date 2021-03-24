import { Component } from 'react';
import PropTypes from 'prop-types';

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

const filterOptions = (options, inputValue = '') =>
  options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const { MultiValue } = styledAutoCompleteComponents;

const NeutralMultiValue = (props) => (
  <MultiValue {...props} paletteColor="neutral" />
);
const ReadOnlyMultiValue = (props) => <MultiValue {...props} readOnly />;
const PillMultiValue = (props) => <MultiValue {...props} variant="pill" />;

class AutoCompleteExample extends Component {
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
    const { isMulti } = this.props;

    const caption = `Select one ${isMulti ? 'or more values' : 'value'}`;

    return (
      <Box mb="larger">
        <AutoComplete
          {...{
            caption,
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
  isMulti: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  variant: PropTypes.string
};

AutoCompleteExample.defaultProps = {
  variant: 'default'
};

export default {
  title: 'AutoComplete',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: variantOptions
      }
    }
  }
};

export const Default = (args) => (
  <Box as="section" p="regular">
    <Heading.H1>AutoComplete</Heading.H1>

    <AutoCompleteExample
      id="auto-complete-1"
      label="AutoComplete with unstyled badges"
      options={neutralOptions}
      {...args}
    />

    <AutoCompleteExample
      id="auto-complete-2"
      label="AutoComplete with unstyled default badges"
      options={neutralOptions.map((option) => ({
        ...option,
        variant: 'default'
      }))}
      {...args}
    />

    <AutoCompleteExample
      id="auto-complete-3"
      label="AutoComplete with color badges"
      options={colorOptions}
      {...args}
    />

    <AutoCompleteExample
      id="auto-complete-4"
      label="AutoComplete with subtle color badges"
      options={colorOptions.map((option) => ({ ...option, subtle: true }))}
      {...args}
    />

    <AutoCompleteExample
      id="auto-complete-5"
      label="AutoComplete with subtle color default badges"
      options={colorOptions.map((option) => ({
        ...option,
        subtle: true,
        variant: 'default'
      }))}
      {...args}
    />

    <AutoCompleteExample
      id="auto-complete-6"
      label="AutoComplete with custom neutral badges"
      options={neutralOptions}
      {...args}
      components={{
        MultiValue: NeutralMultiValue
      }}
    />

    <AutoCompleteExample
      id="auto-complete-7"
      label="AutoComplete with read-only badges"
      options={neutralOptions}
      {...args}
      components={{
        MultiValue: ReadOnlyMultiValue
      }}
    />

    <AutoCompleteExample
      id="auto-complete-8"
      label="AutoComplete with pill-shaped badges"
      options={neutralOptions}
      {...args}
      components={{
        MultiValue: PillMultiValue
      }}
    />
  </Box>
);

Default.args = {
  hideDropdownIndicator: false,
  isDisabled: false,
  isMulti: true,
  variant: 'default'
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
