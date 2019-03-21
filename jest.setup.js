import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { matchers } from 'jest-emotion';

require('jest-enzyme');

configure({ adapter: new Adapter() });

expect.extend(matchers);
