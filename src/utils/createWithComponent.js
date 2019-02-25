const withComponent = (srcComponent, destComponent, defaultProps) => {
  const component = srcComponent.withComponent(destComponent);

  component.defaultProps = {
    ...srcComponent.defaultProps,
    ...defaultProps
  };

  return component;
};

export default withComponent;
