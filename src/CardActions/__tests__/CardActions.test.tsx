import createWithTheme from '../../../utils/createWithTheme';

import CardActions from '../CardActions';
import Icon from '../../Icon';

describe('<CardActions', () => {
  it('renders the CardActions component properly', () => {
    const tree = createWithTheme(
      <CardActions>
        <Icon name="download" />
        <Icon name="chat-bubble-outline" />
      </CardActions>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders the CardActions component properly with one child', () => {
    const tree = createWithTheme(
      <CardActions>
        <Icon name="download" />
      </CardActions>
    );

    expect(tree).toMatchSnapshot();
  });
});
