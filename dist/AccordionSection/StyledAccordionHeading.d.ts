export default StyledHeading;
declare const StyledHeading: import("@emotion/styled").StyledComponent<import("type-fest").Simplify<import("type-fest").Except<{
    fontSize: "size4" | "size1" | "size2" | "size3" | "size5" | "size6" | "size7" | "size8" | "size9";
    fontWeight?: "bold" | "medium" | "regular" | undefined;
    mb?: string | undefined;
}, "fontSize"> & Partial<Pick<{
    fontSize: "size4" | "size1" | "size2" | "size3" | "size5" | "size6" | "size7" | "size8" | "size9";
    fontWeight?: "bold" | "medium" | "regular" | undefined;
    mb?: string | undefined;
}, "fontSize">>> & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
