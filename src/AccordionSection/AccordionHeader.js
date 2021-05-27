import PropTypes from 'prop-types';

import StyledAccordionHeader from './StyledAccordionHeader';
import StyledAccordionHeading from './StyledAccordionHeading';
import StyledAccordionHeadingText from './StyledAccordionHeadingText';
import Icon from '../Icon';
import VARIANTS from './variants';

const AccordionHeaderIcon = ({ isOpen, ml }) => (
  <Icon mr="small" name="chevron" rotation={isOpen ? null : '270'} ml={ml} />
);

AccordionHeaderIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

const AccordionHeader = ({
  isOpen,
  note,
  onClick,
  panelId,
  text,
  chevronRight,
  ...props
}) => (
  <StyledAccordionHeader
    alignItems="center"
    justifyContent="space-between"
    px="regular"
    onClick={onClick}
    aria-controls={panelId}
    aria-expanded={isOpen}
    {...props}
  >
    <StyledAccordionHeading fontWeight="medium" mr="regular">
      <StyledAccordionHeadingText
        alignItems="center"
        aria-controls={panelId}
        aria-expanded={isOpen}
      >
        {chevronRight ? (
          <>
            {text}
            <AccordionHeaderIcon isOpen={isOpen} ml="smallest" />
          </>
        ) : (
          <>
            <AccordionHeaderIcon isOpen={isOpen} />
            {text}
          </>
        )}
      </StyledAccordionHeadingText>
    </StyledAccordionHeading>
    {note}
  </StyledAccordionHeader>
);

AccordionHeader.propTypes = {
  /**
   * Whether or not the AccordionSection this header resides in is open or not.
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * Optional note to render within the AccordionHeader
   */
  note: PropTypes.node,

  /**
   * Callback to call whenever the StyledAccordionHeadingButton is clicked
   */
  onClick: PropTypes.func,

  /**
   * ID of the AccordionPanel that holds the content of the AccordionSection.
   * Used to specify aria-controls for accessbility.
   */
  panelId: PropTypes.string.isRequired,

  /**
   * Header text for the section
   */
  text: PropTypes.node.isRequired,

  /**
   * Link variant for styling. See storybook for examples.
   */
  variant: PropTypes.oneOf(VARIANTS).isRequired,

  /**
   * Optional flag to position icon to right of header text
   */
  chevronRight: PropTypes.bool
};

AccordionHeader.defaultProps = {
  note: null,
  onClick: () => {},
  chevronRight: false
};

export default AccordionHeader;
