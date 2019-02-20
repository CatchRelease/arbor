import colorForString from '../colorForString';

describe('colorForString', () => {
  const colors = ['blue', 'green', 'red'];

  it('returns a color from a color set based on a given string', () => {
    expect(colorForString('Batman', colors)).toEqual('green');
    expect(colorForString('Batmao', colors)).toEqual('red');
    expect(colorForString('Batmap', colors)).toEqual('blue');
  });

  it('always returns the same color for a given string', () => {
    const string = 'Batman';

    expect(colorForString(string, colors)).toEqual(
      colorForString(string, colors)
    );
  });
});
