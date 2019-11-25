import React from 'react';
import mountWithTheme from '../../../utils/mountWithTheme';

import ProgressBar from '../ProgressBar';

describe('<ProgressBar />', () => {
  it('renders the progress bar properly', () => {
    const progressBar = mountWithTheme(
      <ProgressBar
        percentage={42}
        iconEndName="calendar"
        showPercentage={false}
      />
    );

    expect(progressBar).toMatchSnapshot();
  });

  it('renders the progress bar properly at 100% with an icon', () => {
    const progressBar = mountWithTheme(
      <ProgressBar
        percentage={100}
        iconEndName="calendar"
        showPercentage={false}
      />
    );

    expect(progressBar).toMatchSnapshot();
  });
});
