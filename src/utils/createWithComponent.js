const withComponent = (
  srcComponent,
  destComponent,
  { defaultProps, propTypes } = {}
) => {
  const component = srcComponent.withComponent(destComponent); // eslint-disable-line arbor/use-create-with-component

  component.defaultProps = {
    ...srcComponent.defaultProps,
    ...defaultProps
  };

  component.propTypes = {
    ...srcComponent.propTypes,
    ...propTypes
  };

  return component;
};

export default withComponent;
