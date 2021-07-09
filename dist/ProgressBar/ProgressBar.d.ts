export default ProgressBar;
declare function ProgressBar({ percentage, iconEndName, showPercentage, ...props }: {
    [x: string]: any;
    percentage: any;
    iconEndName: any;
    showPercentage: any;
}): JSX.Element;
declare namespace ProgressBar {
    namespace propTypes {
        const showPercentage: PropTypes.Requireable<boolean>;
        const iconEndName: PropTypes.Requireable<string>;
        const percentage: PropTypes.Validator<number>;
    }
    const defaultProps: {
        showPercentage: boolean;
        iconEndName: null;
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
        color?: (import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & string) | undefined;
        bg?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        backgroundColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        opacity?: import("styled-system").ResponsiveValue<import("csstype").Property.Opacity, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        fontSize?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        fontWeight?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        lineHeight?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        maxWidth?: import("styled-system").ResponsiveValue<import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        minWidth?: import("styled-system").ResponsiveValue<import("csstype").Property.MinWidth<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        overflow?: import("styled-system").ResponsiveValue<import("csstype").Property.Overflow, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        overflowX?: import("styled-system").ResponsiveValue<import("csstype").Property.OverflowX, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        overflowY?: import("styled-system").ResponsiveValue<import("csstype").Property.OverflowY, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        m?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        margin?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        mt?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        marginTop?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        mr?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        marginRight?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        mb?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        marginBottom?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        ml?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        marginLeft?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        mx?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        marginX?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        my?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        marginY?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        p?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        padding?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        pt?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        paddingTop?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        pr?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        paddingRight?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        pb?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        paddingBottom?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        pl?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        paddingLeft?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        px?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        paddingX?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        py?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        paddingY?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        textAlign?: import("styled-system").ResponsiveValue<import("csstype").Property.TextAlign, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        textTransform?: import("styled-system").ResponsiveValue<import("csstype").Property.TextTransform, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        textOverflow?: import("styled-system").ResponsiveValue<import("csstype").Property.TextOverflow, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        whiteSpace?: import("styled-system").ResponsiveValue<import("csstype").Property.WhiteSpace, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        ref?: import("react").LegacyRef<HTMLDivElement> | undefined;
        key?: import("react").Key | null | undefined;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        accessKey?: string | undefined;
        className?: string | undefined;
        contentEditable?: "inherit" | (boolean | "false" | "true") | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: (boolean | "false" | "true") | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        placeholder?: string | undefined;
        slot?: string | undefined;
        spellCheck?: (boolean | "false" | "true") | undefined;
        style?: import("react").CSSProperties | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        translate?: "no" | "yes" | undefined;
        radioGroup?: string | undefined;
        role?: import("react").AriaRole | undefined;
        about?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        resource?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;
        inputMode?: "none" | "text" | "search" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
        is?: string | undefined;
        'aria-activedescendant'?: string | undefined;
        'aria-atomic'?: boolean | "false" | "true" | undefined;
        'aria-autocomplete'?: "none" | "both" | "inline" | "list" | undefined;
        'aria-busy'?: boolean | "false" | "true" | undefined;
        'aria-checked'?: boolean | "mixed" | "false" | "true" | undefined;
        'aria-colcount'?: number | undefined;
        'aria-colindex'?: number | undefined;
        'aria-colspan'?: number | undefined;
        'aria-controls'?: string | undefined;
        'aria-current'?: boolean | "time" | "page" | "false" | "true" | "step" | "location" | "date" | undefined;
        'aria-describedby'?: string | undefined;
        'aria-details'?: string | undefined;
        'aria-disabled'?: boolean | "false" | "true" | undefined;
        'aria-dropeffect'?: "none" | "link" | "copy" | "move" | "execute" | "popup" | undefined;
        'aria-errormessage'?: string | undefined;
        'aria-expanded'?: boolean | "false" | "true" | undefined;
        'aria-flowto'?: string | undefined;
        'aria-grabbed'?: boolean | "false" | "true" | undefined;
        'aria-haspopup'?: boolean | "dialog" | "menu" | "grid" | "listbox" | "false" | "true" | "tree" | undefined;
        'aria-hidden'?: boolean | "false" | "true" | undefined;
        'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
        'aria-keyshortcuts'?: string | undefined;
        'aria-label'?: string | undefined;
        'aria-labelledby'?: string | undefined;
        'aria-level'?: number | undefined;
        'aria-live'?: "off" | "assertive" | "polite" | undefined;
        'aria-modal'?: boolean | "false" | "true" | undefined;
        'aria-multiline'?: boolean | "false" | "true" | undefined;
        'aria-multiselectable'?: boolean | "false" | "true" | undefined;
        'aria-orientation'?: "horizontal" | "vertical" | undefined;
        'aria-owns'?: string | undefined;
        'aria-placeholder'?: string | undefined;
        'aria-posinset'?: number | undefined;
        'aria-pressed'?: boolean | "mixed" | "false" | "true" | undefined;
        'aria-readonly'?: boolean | "false" | "true" | undefined;
        'aria-relevant'?: "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
        'aria-required'?: boolean | "false" | "true" | undefined;
        'aria-roledescription'?: string | undefined;
        'aria-rowcount'?: number | undefined;
        'aria-rowindex'?: number | undefined;
        'aria-rowspan'?: number | undefined;
        'aria-selected'?: boolean | "false" | "true" | undefined;
        'aria-setsize'?: number | undefined;
        'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
        'aria-valuemax'?: number | undefined;
        'aria-valuemin'?: number | undefined;
        'aria-valuenow'?: number | undefined;
        'aria-valuetext'?: string | undefined;
        children?: import("react").ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        } | undefined;
        onCopy?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onCopyCapture?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onCut?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onCutCapture?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onPaste?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onPasteCapture?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onCompositionEnd?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionStart?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionUpdate?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onFocus?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
        onFocusCapture?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
        onBlur?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
        onBlurCapture?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
        onChange?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onChangeCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onBeforeInput?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onBeforeInputCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onInput?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onInputCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onReset?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onResetCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onSubmit?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onSubmitCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onInvalid?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onInvalidCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onLoad?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onError?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onErrorCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onKeyDown?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyPress?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyUp?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
        onAbort?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onAbortCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlay?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlayCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlayThrough?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onDurationChange?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onDurationChangeCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEmptied?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEmptiedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEncrypted?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEncryptedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEnded?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEndedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedData?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedDataCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedMetadata?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadStart?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadStartCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPause?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPauseCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPlay?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPlayCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPlaying?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPlayingCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onProgress?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onProgressCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onRateChange?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onRateChangeCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSeeked?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSeekedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSeeking?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSeekingCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onStalled?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onStalledCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSuspend?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSuspendCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onTimeUpdate?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onVolumeChange?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onWaiting?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onWaitingCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onAuxClick?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onAuxClickCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onClick?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onClickCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onContextMenu?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onContextMenuCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onDoubleClick?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onDoubleClickCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onDrag?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragEnd?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragEndCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragEnter?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragEnterCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragExit?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragExitCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragLeave?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragLeaveCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragOver?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragOverCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragStart?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragStartCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDrop?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDropCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onMouseDown?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseDownCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseEnter?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseLeave?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseMove?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseMoveCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOut?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOutCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOver?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOverCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseUp?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseUpCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onSelect?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSelectCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onTouchCancel?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchCancelCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchEnd?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchEndCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchMove?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchMoveCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchStart?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchStartCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onPointerDown?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerDownCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerMove?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerMoveCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerUp?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerUpCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerCancel?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerCancelCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerEnter?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerEnterCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerLeave?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerLeaveCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOver?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOverCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOut?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOutCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onGotPointerCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onLostPointerCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onScroll?: import("react").UIEventHandler<HTMLDivElement> | undefined;
        onScrollCapture?: import("react").UIEventHandler<HTMLDivElement> | undefined;
        onWheel?: import("react").WheelEventHandler<HTMLDivElement> | undefined;
        onWheelCapture?: import("react").WheelEventHandler<HTMLDivElement> | undefined;
        onAnimationStart?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationEnd?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationIteration?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onTransitionEnd?: import("react").TransitionEventHandler<HTMLDivElement> | undefined;
        onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLDivElement> | undefined;
        border?: import("styled-system").ResponsiveValue<import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderX?: import("styled-system").ResponsiveValue<import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderY?: import("styled-system").ResponsiveValue<import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderWidth?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderTopWidth?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderBottomWidth?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderLeftWidth?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderRightWidth?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderStyle?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderStyle, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderTopStyle?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderTopStyle, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderBottomStyle?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderBottomStyle, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderLeftStyle?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderLeftStyle, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderRightStyle?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderRightStyle, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderTopColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderBottomColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderLeftColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderRightColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderRadius?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderTopLeftRadius?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderTopRightRadius?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderBottomLeftRadius?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderBottomRightRadius?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderTop?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderTop<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderRight?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderRight<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderBottom?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderBottom<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        borderLeft?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderLeft<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        boxShadow?: import("styled-system").ResponsiveValue<number | import("csstype").Property.BoxShadow, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        display?: import("styled-system").ResponsiveValue<import("csstype").Property.Display, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        height?: import("styled-system").ResponsiveValue<import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        gridArea?: import("styled-system").ResponsiveValue<import("csstype").Property.GridArea, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        position?: import("styled-system").ResponsiveValue<import("csstype").Property.Position, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        zIndex?: import("styled-system").ResponsiveValue<import("csstype").Property.ZIndex, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        top?: import("styled-system").ResponsiveValue<import("csstype").Property.Top<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        right?: import("styled-system").ResponsiveValue<import("csstype").Property.Right<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        bottom?: import("styled-system").ResponsiveValue<import("csstype").Property.Bottom<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        left?: import("styled-system").ResponsiveValue<import("csstype").Property.Left<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
        width?: import("styled-system").ResponsiveValue<import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    };
}
import PropTypes from "prop-types";
