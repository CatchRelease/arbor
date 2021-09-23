import { DayPickerProps } from 'react-day-picker';
import { Props as PopoverContentProps } from '../Popover/PopoverContent';
declare type Props = PopoverContentProps & {
    children: {
        props: DayPickerProps;
    };
    classNames: {
        overlayWrapper: string;
    };
};
declare const DatePickerInputOverlay: ({ classNames, children, ...props }: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default DatePickerInputOverlay;
