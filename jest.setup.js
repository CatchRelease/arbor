import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('jest-enzyme');

configure({ adapter: new Adapter() });
