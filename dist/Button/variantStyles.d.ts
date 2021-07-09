export default variants;
declare function variants({ intent, variant, paletteColor, ...props }: {
    [x: string]: any;
    intent: any;
    variant: any;
    paletteColor: any;
}): import("@emotion/react").SerializedStyles | "";
