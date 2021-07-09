declare namespace _default {
    namespace small {
        export { textFontSize as fontSize };
        export { height };
        export const p: string;
        export const i: {
            width: string;
            fontSize: any;
            '&:first-child': {
                ml: string;
            };
            '&:last-child': {
                mr: string;
            };
        };
    }
    namespace medium { }
    namespace large { }
    namespace jumbo { }
}
export default _default;
declare const height: string;
