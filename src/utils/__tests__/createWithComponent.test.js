import Box from '../../Box';
import createWithComponent from '../createWithComponent';

describe('createWithComponent', () => {
  const createComponent = options => Object.assign(Box, options);

  it('returns a component with default props from the source component', () => {
    const srcComponent = createComponent({ defaultProps: { foo: 'bar' } });

    const component = createWithComponent(srcComponent, 'header');

    expect(component.defaultProps.foo).toEqual('bar');
  });

  it('returns a component with prop types from the source component', () => {
    const srcComponent = createComponent({ propTypes: { foo: 'bar' } });

    const component = createWithComponent(srcComponent, 'header');

    expect(component.propTypes.foo).toEqual('bar');
  });

  context('with options argument', () => {
    context('defaultProps', () => {
      it('assigns the default props to the new component', () => {
        const srcComponent = createComponent({ defaultProps: { foo: 'bar' } });
        const defaultProps = { baz: 'qux' };

        const component = createWithComponent(srcComponent, 'header', {
          defaultProps
        });

        expect(component.defaultProps.baz).toEqual('qux');
      });

      it('overwrites source component default props with passed default props', () => {
        const srcComponent = createComponent({ defaultProps: { foo: 'bar' } });
        const defaultProps = { foo: 'baz' };

        const component = createWithComponent(srcComponent, 'header', {
          defaultProps
        });

        expect(component.defaultProps.foo).toEqual('baz');
      });
    });

    context('propTypes', () => {
      it('assigns the propTypes to the new component', () => {
        const srcComponent = createComponent({ propTypes: { foo: 'bar' } });
        const propTypes = { baz: 'qux' };

        const component = createWithComponent(srcComponent, 'header', {
          propTypes
        });

        expect(component.propTypes.baz).toEqual('qux');
      });

      it('overwrites source component prop types with passed default props', () => {
        const srcComponent = createComponent({ propTypes: { foo: 'bar' } });
        const propTypes = { foo: 'baz' };

        const component = createWithComponent(srcComponent, 'header', {
          propTypes
        });

        expect(component.propTypes.foo).toEqual('baz');
      });
    });
  });
});
