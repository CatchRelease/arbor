RadioButtonGroup is intended to handle the statefulness of groups of radio buttons,
so that the buttons themselves only need to worry about rendering the props passed to them.

### Prop Notes

- The `disabled` prop will disable all buttons at once. For per-button
  disabling, add a `disabled` field to the correct option in the `options`
  prop.

- `buttonProps` will be passed as props, untouched, to all child RadioButtons.
