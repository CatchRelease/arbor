import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

import { matchers } from 'jest-emotion';
import '@testing-library/jest-dom';
import 'regenerator-runtime';

configure({ adapter: new Adapter() });

expect.extend(matchers);
