import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { matchers } from 'jest-emotion';

require('jest-enzyme');

configure({ adapter: new Adapter() });

expect.extend(matchers);
