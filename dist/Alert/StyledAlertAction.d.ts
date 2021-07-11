export default StyledAlertAction;
declare function StyledAlertAction({ onClose }: {
    onClose: any;
}): JSX.Element;
declare namespace StyledAlertAction {
    namespace propTypes {
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
