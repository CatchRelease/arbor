import React from 'react';
import mountWithTheme from '../../../utils/mountWithTheme';

import ProgressBar from '../ProgressBar';

describe('<ProgressBar />', () => {
  it('renders the description list properly', () => {
    const progressBar = mountWithTheme(
      <ProgressBar
        percentage={42}
        iconEndName="calendar"
        showPercentage={false}
      />
    );

    expect(progressBar).toMatchSnapshot();
  });
});
