(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/shared/swiper/SwiperItem.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function SwiperItem({ content, img, widthPercent = 100, style = {}, className = "" }) {
    const widthClass = widthPercent === 100 ? 'w-full' : `!w-[${widthPercent}%]`; // Force width with Tailwind
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: `flex-shrink-0 select-none list-none ${widthClass} ${className}`,
        style: style,
        children: [
            content,
            img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: img.src,
                alt: img.alt || "",
                className: "w-full select-none block",
                draggable: false
            }, void 0, false, {
                fileName: "[project]/shared/swiper/SwiperItem.js",
                lineNumber: 12,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shared/swiper/SwiperItem.js",
        lineNumber: 6,
        columnNumber: 3
    }, this);
}
_c = SwiperItem;
const __TURBOPACK__default__export__ = SwiperItem;
var _c;
__turbopack_context__.k.register(_c, "SwiperItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useStateRef.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getRefValue": (()=>getRefValue),
    "useStateRef": (()=>useStateRef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function getRefValue(ref) {
    return ref.current;
}
function useStateRef(initialValue) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValue);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(state);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStateRef.useEffect": ()=>{
            ref.current = state;
        }
    }["useStateRef.useEffect"], [
        state
    ]);
    return [
        state,
        setState,
        ref
    ];
}
_s(useStateRef, "AZRIviiurDrvsHbFpBgpp29mrY8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/dom.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTouchEventData": (()=>getTouchEventData)
});
function getTouchEventData(e) {
    if ("touches" in e) {
        return e.touches[0];
    }
    return e;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shared/swiper/Swiper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Swiper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$swiper$2f$SwiperItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/swiper/SwiperItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useStateRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/dom.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const MIN_SWIPE_REQUIRED = 40;
const TIME_TO_SWIPE_SLIDE = 5000;
function Swiper({ items, className, itemsLength = items.length, widthPercent = 100, styleItem = {}, controlBlock = true }) {
    _s();
    const startXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const curOffsetXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const minOffsetXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [offsetX, setOffsetX, offsetXRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateRef"])(0);
    const [isSwiping, setIsSwiping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [curIndex, setCurIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const autoSwipeIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMoving, setIsMoving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function onMove(e) {
        setIsMoving(true);
        const currentX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTouchEventData"])(e).clientX;
        const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRefValue"])(startXRef) - currentX;
        let newOffsetX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRefValue"])(curOffsetXRef) - diff;
        const maxOffsetX = 0;
        const minOffsetX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRefValue"])(minOffsetXRef);
        if (newOffsetX > maxOffsetX) newOffsetX = 0;
        if (newOffsetX < minOffsetX) newOffsetX = minOffsetX;
        setOffsetX(newOffsetX);
    }
    function onEnd() {
        setIsMoving(false);
        const containerWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRefValue"])(containerRef)?.offsetWidth ?? 0;
        const curOffsetX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRefValue"])(curOffsetXRef);
        let newOffsetX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRefValue"])(offsetXRef);
        const diff = curOffsetX - newOffsetX;
        if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
            if (diff > 0) {
                newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
            } else {
                newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
            }
        }
        newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
        setIsSwiping(false);
        setIsHovering(false);
        setOffsetX(newOffsetX);
        setCurIndex(Math.abs(newOffsetX / containerWidth));
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onEnd);
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("touchend", onEnd);
    }
    function onStart(e) {
        setIsSwiping(true);
        setIsHovering(true);
        curOffsetXRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRefValue"])(offsetXRef);
        startXRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTouchEventData"])(e).clientX;
        const containerEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRefValue"])(containerRef);
        minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth;
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onEnd);
        window.addEventListener("touchmove", onMove);
        window.addEventListener("touchend", onEnd);
    }
    function indicatorOnClick(index) {
        if (index > itemsLength - 1 || index < 0) return;
        const containerWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRefValue"])(containerRef)?.offsetWidth ?? 0;
        setCurIndex(index);
        setOffsetX(-(index * containerWidth));
    }
    function startAutoSwipe() {
        if (autoSwipeIntervalRef.current !== null) return;
        autoSwipeIntervalRef.current = setInterval(()=>{
            const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRefValue"])(containerRef);
            const containerWidth = container?.offsetWidth ?? 0;
            const nextIndex = (curIndex + 1) % itemsLength;
            setCurIndex(nextIndex);
            setOffsetX(-(nextIndex * containerWidth));
        }, TIME_TO_SWIPE_SLIDE);
    }
    function stopAutoSwipe() {
        if (autoSwipeIntervalRef.current) {
            clearInterval(autoSwipeIntervalRef.current);
            autoSwipeIntervalRef.current = null;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Swiper.useEffect": ()=>setIsClient(true)
    }["Swiper.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Swiper.useEffect": ()=>{
            if (!isClient) return;
            if (!isSwiping && !isHovering) {
                startAutoSwipe();
            } else {
                stopAutoSwipe();
            }
            return ({
                "Swiper.useEffect": ()=>stopAutoSwipe()
            })["Swiper.useEffect"];
        }
    }["Swiper.useEffect"], [
        isSwiping,
        isHovering,
        curIndex,
        isClient
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full overflow-hidden max-w-full select-none touch-pan-y relative ${className ?? ""}`,
        onTouchStart: onStart,
        onMouseDown: (e)=>{
            e.preventDefault(); // Prevent text selection on drag start
            onStart(e);
        },
        onMouseEnter: ()=>setIsHovering(true),
        onMouseLeave: ()=>setIsHovering(false),
        onTouchEnd: ()=>setIsHovering(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                ref: containerRef,
                draggable: false,
                className: `flex min-w-full flex-row transition-transform  duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] select-none ${isSwiping ? "transition-none" : ""}`,
                style: {
                    transform: `translate3d(${offsetX}px, 0, 0)`,
                    gap: widthPercent === 100 ? 0 : "1rem",
                    pointerEvents: isMoving ? "none" : "auto"
                },
                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$swiper$2f$SwiperItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        style: styleItem,
                        widthPercent: widthPercent,
                        content: item
                    }, i, false, {
                        fileName: "[project]/shared/swiper/Swiper.js",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/shared/swiper/Swiper.js",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            controlBlock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex justify-center absolute bottom-4 left-1/2 -translate-x-1/2 gap-2 backdrop-blur-md bg-white/40 px-4 py-2 rounded-full select-none",
                children: Array.from({
                    length: itemsLength
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>indicatorOnClick(i),
                        className: `w-2 h-2 rounded-full cursor-pointer ${i === curIndex ? "bg-black" : "bg-gray-600"}`
                    }, i, false, {
                        fileName: "[project]/shared/swiper/Swiper.js",
                        lineNumber: 161,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/shared/swiper/Swiper.js",
                lineNumber: 159,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shared/swiper/Swiper.js",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(Swiper, "ixW+TZK6DLdh7mvAveNVFsFfTR0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStateRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateRef"]
    ];
});
_c = Swiper;
var _c;
__turbopack_context__.k.register(_c, "Swiper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/germany.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/germany.5e98a881.png");}}),
"[project]/public/assets/image/flags/germany.png.mjs { IMAGE => \"[project]/public/assets/image/flags/germany.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$germany$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/germany.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$germany$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 80,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAO0lEQVR42nXJoQHAIBAEwRUxMfSXhtIZgmJenQNxPJ4XowYgkgvBB0ouiPWg5ILw/yq5IGZv4dF8c24Dx75NF7xw+WcAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/ukraine.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/ukraine.221d3a36.png");}}),
"[project]/public/assets/image/flags/ukraine.png.mjs { IMAGE => \"[project]/public/assets/image/flags/ukraine.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$ukraine$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/ukraine.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$ukraine$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 80,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAQUlEQVR42nXKoQ0AIAxE0VuzQbAKazAJJEyBYIyqc5jSeipecsl9QKaiLPuSofDBNIiv9UpnCcIO6CxB3A3NgvgeDyphjHnyO90AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/romania.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/romania.314d2365.png");}}),
"[project]/public/assets/image/flags/romania.png.mjs { IMAGE => \"[project]/public/assets/image/flags/romania.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$romania$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/romania.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$romania$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 80,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAASUlEQVR42q2OIRJAERgG/ysob14VCNzGiJpzGPcTOIEjSIoZ4eMCRhE27YYlUqGRjrDeYZQfM3+ohiMzicREoy37Kdj0F8HlYQGsEla0CgmrdgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/italy.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/italy.f77e4cf8.png");}}),
"[project]/public/assets/image/flags/italy.png.mjs { IMAGE => \"[project]/public/assets/image/flags/italy.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$italy$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/italy.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$italy$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 80,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAa0lEQVR42nXNTQpAQBQA4HcPVjiKnwVOgyKugHKTcSclQ1EWyMwzjDQb+68+gNKm0HgYtgXfzgORMVyjFCfdwk4zKEDlzA8gCogl6DVzAaglCEiBP8B9QS4B5wJkCiid4QY+yUWxS5B8YLwAsnxpa5HjioEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/moldova.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/moldova.f3520ce7.png");}}),
"[project]/public/assets/image/flags/moldova.png.mjs { IMAGE => \"[project]/public/assets/image/flags/moldova.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$moldova$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/moldova.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$moldova$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 78,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAmUlEQVR42l3OzQrBAADA8d23djBK5DC0zMdNHoTDzA4u5iW4LMmz2E1t0nJT3EhttOQNfFx3+1NKcv8dfoKozRNJ9+nZI26hzCOUCA2VrVInSOmJIFYWSNU15sAh9nJc/SyxUWKfabBRanxBuz/BnbbwZk1OnTKHf2ANHY6rAucgz8Us/gDNfR+WWPaYeyTzjCSirsou/Tm8AE9jWGErtaelAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/bolgaria.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/bolgaria.c704df5e.png");}}),
"[project]/public/assets/image/flags/bolgaria.png.mjs { IMAGE => \"[project]/public/assets/image/flags/bolgaria.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$bolgaria$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/bolgaria.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$bolgaria$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 80,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAS0lEQVR42nXJoRGAMBAEwCshPYCDftA0AIY6mKEZ+kEgE3Mik4m4fPxHrFos9xTXZ5anH673pJHvIGrJNBog0r7RaID4AuIfIE+/Bv9GZzb+rSe8AAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/kazahstan.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/kazahstan.f156d3f8.png");}}),
"[project]/public/assets/image/flags/kazahstan.png.mjs { IMAGE => \"[project]/public/assets/image/flags/kazahstan.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kazahstan$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/kazahstan.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kazahstan$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 80,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAjklEQVR42k2OTQqCUBSFrxVENW3UKlxBgwZNawMtIdpAbSKahLoAEUSvD5/oQAX/NuPIBRyfgujgwL3wcc5HZ2G1Wy5A3GDFNTZcjfcYt2jpJn/dzs+geSUu0sAzeWOvfvKqIR3do68Cchw5xiv54J8+oAt7BqaGAdKFg2to4sRyBpYOa7V/CHJoymVy6AH+sGPKVGILrAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/greece.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/greece.dce0cc09.png");}}),
"[project]/public/assets/image/flags/greece.png.mjs { IMAGE => \"[project]/public/assets/image/flags/greece.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$greece$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/greece.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$greece$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 80,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAgUlEQVR42m3NrwqDUBgF8O+BlvciS3uDxbk0lhyCxWI2iBgEFSxiEsQgGBQE/4HJarnpPsDx3qIihh9fOOfw0e2dMDOecP+meFk1FKfZ2TUjLeh51i4QF6rf4x8eiIweRsHdfMbTLPHzWqiyuOk4yZYejWIxyMUZJ8Wu2Ef8uyKzFS3odFm8WF2rAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/serbia.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/serbia.0c58051b.png");}}),
"[project]/public/assets/image/flags/serbia.png.mjs { IMAGE => \"[project]/public/assets/image/flags/serbia.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$serbia$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/serbia.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$serbia$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 78,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAkklEQVR42k3JPQ4BQRyG8TmCE7gFEUazRCJRbUQUeicQhUZD6wAasfFRKLZhOyE+ImhcQhSilCkmHvkXs9k3+TXPqw6ZgjnliuxqZfaVEuesjsmn+nmfkVdn22mwaTcZaB9pjkp5XXRryGUaEI5npKs9pDkqiG6E6yOP+YT7askiuiLNUdZa87OW7+uJ+bxJTr4/htxsrWAD1TwAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/polish.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/polish.f146af86.png");}}),
"[project]/public/assets/image/flags/polish.png.mjs { IMAGE => \"[project]/public/assets/image/flags/polish.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$polish$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/polish.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$polish$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 78,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAANklEQVR42oXJQQ0AIAwEwRNRNyAQERgjwQL/Pi45UgFtN9nXgKQrKQxqwltb1bg2VY1jwzMM+yameruniYGCAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/chehia.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/chehia.664b11a0.png");}}),
"[project]/public/assets/image/flags/chehia.png.mjs { IMAGE => \"[project]/public/assets/image/flags/chehia.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$chehia$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/chehia.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$chehia$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 78,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAhElEQVR42mXKrQqDUADF8fsKGw7GZWUMBmN1YdEyJr6AT6DRZDFoEhHvE9h9D00mo2CxWgwWywWvHD+CoB74p/MjihnxJK/QiwH7CSE4Of9cvDQGFqdo2u6AyGkCc/TvwjE81H6IJmBrC3jKFuy3iuz6QCnRTUT+6jy+f1BcboezkCgfAfDZa1l7q036AAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/litva.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/litva.077e8f2e.png");}}),
"[project]/public/assets/image/flags/litva.png.mjs { IMAGE => \"[project]/public/assets/image/flags/litva.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$litva$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/litva.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$litva$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 80,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAVElEQVR42nXJoRGAMAwF0DgGyAo5MCBrQbANS3SSImECuEMgGCjqmxouUJ+Kpx7lg/W92Dz5ZKUtCfYk5loF1CwzflYBilNAHINVgO6216cbzFPuA778Vo0tDrtiAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/irland.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/irland.a485de11.png");}}),
"[project]/public/assets/image/flags/irland.png.mjs { IMAGE => \"[project]/public/assets/image/flags/irland.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$irland$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/irland.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$irland$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 80,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAARElEQVR42q3OoREAEABGYVPoBqFaw2kWcYruTrCNqsqCJmnKr2lO8fIXHqFBDZYMcq84tQJ4iWX5IDTqeQNwYv4Aj4cNqN18Offfwu0AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/Sswitzerland.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/Sswitzerland.eed47877.png");}}),
"[project]/public/assets/image/flags/Sswitzerland.png.mjs { IMAGE => \"[project]/public/assets/image/flags/Sswitzerland.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$Sswitzerland$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/Sswitzerland.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$Sswitzerland$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 80,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAWklEQVR42lWOMQrAIBAEr7T1Mf5D/JXg5/QPlqnSBWHiciQkxcCwtxxrl9mBGYQArTnynelmW05ihFJgDEeubN+8kBLMCWs5cmVvQe2coXdH/nz4bajV+Wy4AcQVZZX0sgEOAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/britanpng.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/britanpng.ce82e6ec.png");}}),
"[project]/public/assets/image/flags/britanpng.png.mjs { IMAGE => \"[project]/public/assets/image/flags/britanpng.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$britanpng$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/britanpng.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$britanpng$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 78,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAcElEQVR42oWOMQ5AQBRE9zpOoKRQqBQKEa0jKBzBHVa9cQyJLSlEJDRK0SgkFLphtlUoJpm8l/w/Ypy2u1Qd7ECiCTPoN+xkdKLIKyx6wFz3WNPchJ2MTuxuhMOLcfkJTssxYSej+7/AP1K1nw1kdA+ZX3G9r+YZMgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/kipr.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/kipr.e2a37957.png");}}),
"[project]/public/assets/image/flags/kipr.png.mjs { IMAGE => \"[project]/public/assets/image/flags/kipr.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kipr$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/kipr.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kipr$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 78,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAeElEQVR42m2OQQqDMBBFc5rueq0ueoTeovsep1u7MxRFiaAguAkENGKS56i488Ew8OfP56sQgocIwcKkwRey/zDmLLPzio3ooHlCfgN9B/MQYwUpshtiWtDmQ1u/KM2bZviKmvbfI0HoXMevz8hkrLenjDo6XLPdVhEhlrLOWRBlAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/armenia.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/armenia.2d4c153f.png");}}),
"[project]/public/assets/image/flags/armenia.png.mjs { IMAGE => \"[project]/public/assets/image/flags/armenia.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$armenia$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/armenia.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$armenia$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 78,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAZklEQVR42m3JsQ1AQBiG4X8AgpAQ1tJIqKxARUlJSXthAEtQUJIoxQba6z6uPVc8zfvSbLh8tzwcEtGW71Flx2icFK1EtNpOQKa/wgpOJdPfQF0WghURWPnX5yHoGjT+TDpU7lHjL3CdWAd3kSSfAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/image/flags/georgia.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/KART/_next/static/media/georgia.d03db36a.png");}}),
"[project]/public/assets/image/flags/georgia.png.mjs { IMAGE => \"[project]/public/assets/image/flags/georgia.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$georgia$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/image/flags/georgia.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$georgia$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 78,
    height: 50,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAj0lEQVR42k2OPQrCQBhE90Z6B7H1Cp5AC+1UMJWNh9FGD6Co2PqXRg12CprdNMlHluW5JARSDAwzMPOUzTKRzR4XG5LRjCSY434a2R6wIqLsPSJdrMhPN3RvjBlMvb+SLtfYR4T6drpUejdafJpt6pmyz1e5cAnR/QlmGJCfw3LBd6pg8H9O1xhiz7A7Fgx/S3yDTstM+ssAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/pages/HomePage/FlagList.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FlagList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$germany$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$germany$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/germany.png.mjs { IMAGE => "[project]/public/assets/image/flags/germany.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$ukraine$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$ukraine$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/ukraine.png.mjs { IMAGE => "[project]/public/assets/image/flags/ukraine.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$romania$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$romania$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/romania.png.mjs { IMAGE => "[project]/public/assets/image/flags/romania.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$italy$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$italy$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/italy.png.mjs { IMAGE => "[project]/public/assets/image/flags/italy.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$moldova$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$moldova$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/moldova.png.mjs { IMAGE => "[project]/public/assets/image/flags/moldova.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$bolgaria$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$bolgaria$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/bolgaria.png.mjs { IMAGE => "[project]/public/assets/image/flags/bolgaria.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kazahstan$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kazahstan$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/kazahstan.png.mjs { IMAGE => "[project]/public/assets/image/flags/kazahstan.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$greece$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$greece$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/greece.png.mjs { IMAGE => "[project]/public/assets/image/flags/greece.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$serbia$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$serbia$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/serbia.png.mjs { IMAGE => "[project]/public/assets/image/flags/serbia.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$polish$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$polish$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/polish.png.mjs { IMAGE => "[project]/public/assets/image/flags/polish.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$chehia$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$chehia$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/chehia.png.mjs { IMAGE => "[project]/public/assets/image/flags/chehia.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$litva$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$litva$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/litva.png.mjs { IMAGE => "[project]/public/assets/image/flags/litva.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$irland$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$irland$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/irland.png.mjs { IMAGE => "[project]/public/assets/image/flags/irland.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$Sswitzerland$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$Sswitzerland$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/Sswitzerland.png.mjs { IMAGE => "[project]/public/assets/image/flags/Sswitzerland.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$britanpng$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$britanpng$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/britanpng.png.mjs { IMAGE => "[project]/public/assets/image/flags/britanpng.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kipr$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kipr$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/kipr.png.mjs { IMAGE => "[project]/public/assets/image/flags/kipr.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$armenia$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$armenia$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/armenia.png.mjs { IMAGE => "[project]/public/assets/image/flags/armenia.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$georgia$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$georgia$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image/flags/georgia.png.mjs { IMAGE => "[project]/public/assets/image/flags/georgia.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const flagsData = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$germany$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$germany$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Germany'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$ukraine$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$ukraine$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Ukraine'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$romania$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$romania$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Romania'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$italy$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$italy$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Italy'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$moldova$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$moldova$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Moldova'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$bolgaria$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$bolgaria$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Bulgaria'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kazahstan$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kazahstan$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Kazakhstan'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$greece$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$greece$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Greece'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$serbia$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$serbia$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Serbia'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$polish$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$polish$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Poland'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$chehia$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$chehia$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Czechia'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$litva$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$litva$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Lithuania'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$irland$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$irland$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Ireland'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$Sswitzerland$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$Sswitzerland$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Switzerland'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kipr$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$kipr$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Cyprus'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$armenia$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$armenia$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Armenia'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$georgia$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$georgia$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Georgia'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$britanpng$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2f$flags$2f$britanpng$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        name: 'Britan'
    }
];
const FlagItem = ({ imageSrc, countryName, onClick })=>{
    _s();
    const [hoveredCountry, setHoveredCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleHover = (country)=>setHoveredCountry(country);
    const handleLeave = ()=>setHoveredCountry(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>handleHover(countryName),
        onMouseLeave: handleLeave,
        onTouchStart: ()=>handleHover(countryName),
        onTouchEnd: handleLeave,
        onClick: onClick,
        className: "max-w-[150px] min-w-[70px]  w-full relative min-h-[80px] p-[10px] gap-[10px] rounded-[10px] bg-white shadow cursor-pointer hover:shadow-lg transition-all flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: imageSrc,
                alt: countryName,
                width: 78,
                height: 50,
                className: "rounded  "
            }, void 0, false, {
                fileName: "[project]/pages/HomePage/FlagList.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-2  text-[11px] sm:text-[15px]   md:text-[20px] font-[400] text-center font-fira-sans",
                children: countryName
            }, void 0, false, {
                fileName: "[project]/pages/HomePage/FlagList.js",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            hoveredCountry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-50 -top-24 left-[30px] mb-4 p-4 bg-white rounded shadow max-w-[300px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-fira-sans text-[15px] font-[400]",
                    children: [
                        "Контакты дилера: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/pages/HomePage/FlagList.js",
                            lineNumber: 73,
                            columnNumber: 30
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: hoveredCountry
                        }, void 0, false, {
                            fileName: "[project]/pages/HomePage/FlagList.js",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/pages/HomePage/FlagList.js",
                            lineNumber: 74,
                            columnNumber: 46
                        }, this),
                        "Тел: +00 000 000 00",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/pages/HomePage/FlagList.js",
                            lineNumber: 75,
                            columnNumber: 32
                        }, this),
                        "Email: example@mail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/HomePage/FlagList.js",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/HomePage/FlagList.js",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/HomePage/FlagList.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
_s(FlagItem, "Ns5paqIEl+q5AAGF+bh6U/NEvNs=");
_c = FlagItem;
function FlagList() {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " bg-flag-img w-full h-fit p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[33px] text-center font-[400] uppercase text-black font-fira-sans mb-6",
                children: "ОФИЦИАЛЬНЫЕ ДИЛЕРЫ KART"
            }, void 0, false, {
                fileName: "[project]/pages/HomePage/FlagList.js",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   grid    grid-cols-3    sm:grid-cols-4    lg:grid-cols-6    gap-2   md:gap-4   lg:gap-6   max-w-[1050px]   mx-auto      ",
                children: flagsData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagItem, {
                        imageSrc: item.src,
                        countryName: item.name,
                        onClick: ()=>router.push(`/dealers/${item.name.toLowerCase()}`)
                    }, item.name, false, {
                        fileName: "[project]/pages/HomePage/FlagList.js",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/HomePage/FlagList.js",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/HomePage/FlagList.js",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s1(FlagList, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = FlagList;
var _c, _c1;
__turbopack_context__.k.register(_c, "FlagItem");
__turbopack_context__.k.register(_c1, "FlagList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", JSON.parse('{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/KART/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false,"domains":[],"remotePatterns":[],"output":"export"}'))
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}}),
"[project]/node_modules/next/image.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_39d5a2d3._.js.map