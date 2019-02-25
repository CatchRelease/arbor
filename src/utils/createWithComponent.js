const withComponent = (srcComponent, destComponent, defaultProps) => {
  const component = srcComponent.withComponent(destComponent); // eslint-disable-line arbor/use-create-with-component

  component.defaultProps = {
    ...srcComponent.defaultProps,
    ...defaultProps
  };

  return component;
};

export default withComponent;
