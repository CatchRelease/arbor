import { shallow } from 'enzyme';

import AccordionPanel from '../AccordionPanel';
import StyledAccordionPanel from '../StyledAccordionPanel';

describe('<AccordionPanel />', () => {
  context('accordion section is open', () => {
    it('displays', () => {
      const panel = shallow(<AccordionPanel isOpen />);

      expect(panel.find(StyledAccordionPanel)).toHaveProp({
        display: 'block'
      });
    });
  });

  context('accordion section is closed', () => {
    it('hides', () => {
      const panel = shallow(<AccordionPanel isOpen={false} />);

      expect(panel.find(StyledAccordionPanel)).toHaveProp({
        display: 'none'
      });
    });
  });
});
