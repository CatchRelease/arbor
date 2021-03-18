import mountWithTheme from '../../../utils/mountWithTheme';

import DescriptionDetails from '../DescriptionDetails';
import DescriptionList from '../DescriptionList';
import DescriptionTerm from '../DescriptionTerm';

describe('<DescriptionList />', () => {
  it('renders the description list properly', () => {
    const descriptionList = mountWithTheme(
      <DescriptionList>
        <DescriptionTerm>Term 1</DescriptionTerm>
        <DescriptionDetails>Term 1 Details</DescriptionDetails>
        <DescriptionTerm>Term 2</DescriptionTerm>
        <DescriptionDetails>Term 2 Details</DescriptionDetails>
        <DescriptionTerm>Term 3</DescriptionTerm>
        <DescriptionDetails>Term 3 Details</DescriptionDetails>
      </DescriptionList>
    );

    expect(descriptionList).toMatchSnapshot();
  });
});
