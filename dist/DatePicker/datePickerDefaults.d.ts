/// <reference types="react" />
declare const dayPickerDefaults: {
    navbarElement: import("react").FC<{
        className: string;
        onNextClick: () => void;
        onPreviousClick: () => void;
    }>;
    showOutsideDays: boolean;
    weekdaysShort: string[];
};
export default dayPickerDefaults;
