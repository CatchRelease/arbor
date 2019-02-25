import Box from '../../Box';
import createWithComponent from '../createWithComponent';

describe('createWithComponent', () => {
  it('returns a component with default props from the source component', () => {
    const srcComponent = Box;
    srcComponent.defaultProps = { foo: 'bar' };

    const component = createWithComponent(srcComponent, 'header');

    expect(component.defaultProps.foo).toEqual('bar');
  });

  context('with defaultProps argument', () => {
    it('assigns the default props to the new component', () => {
      const defaultProps = { baz: 'qux' };
      const srcComponent = Box;
      srcComponent.defaultProps = { foo: 'bar' };

      const component = createWithComponent(
        srcComponent,
        'header',
        defaultProps
      );

      expect(component.defaultProps.baz).toEqual('qux');
    });

    it('overwrites source component default props with passed default props', () => {
      const defaultProps = { foo: 'baz' };
      const srcComponent = Box;
      srcComponent.defaultProps = { foo: 'bar' };

      const component = createWithComponent(
        srcComponent,
        'header',
        defaultProps
      );

      expect(component.defaultProps.foo).toEqual('baz');
    });
  });
});
