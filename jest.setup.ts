import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { matchers } from '@emotion/jest';

require('jest-enzyme');

configure({ adapter: new Adapter() });

expect.extend(matchers);
