import { createScrollPosition } from '@solid-primitives/scroll'
import {createSignal, onCleanup, onMount} from "solid-js";

function convertRemToPixels(rem: number) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default function Heading(props: {
    offsetWidthSafari: number;
    offsetTopSafari: number;
    offsetTopChrome: number;
    url: string | URL | undefined; title: string}) {
    const openLink = () => {
        window.open(props.url, '_blank')
    }
    const [offsetTop, setOffsetTop] = createSignal(0);
    const [offsetWidth, setOffsetWidth] = createSignal(0);
    let header: HTMLHeadingElement | ((el: HTMLHeadingElement) => void) | undefined;

    const setValues = () => {
        while (!document.fonts.ready) console.log(document.fonts.ready)
        if (typeof(header) !== "undefined" && "offsetWidth" in header) {
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                // Safari and Chromium seem to behave differently on offsetTop/Width...
                // setOffsetTop(header.offsetTop + convertRemToPixels(5.5))
                setOffsetTop(header.offsetTop + convertRemToPixels(props.offsetTopSafari))
                // setOffsetWidth(header.offsetWidth + convertRemToPixels(3))
                setOffsetWidth(header.offsetWidth + convertRemToPixels(props.offsetWidthSafari))
            } else {
                // setOffsetTop(header.offsetTop + convertRemToPixels(6))
                setOffsetTop(header.offsetTop + convertRemToPixels(props.offsetTopChrome))
                setOffsetWidth(header.offsetWidth)
            }
        }
    };

    onMount(() => {
        setValues()

        if (typeof window !== "undefined") {
            window.addEventListener('resize', setValues);
        }
    })

    onCleanup(() => {
        if (typeof window !== "undefined") {
            window.removeEventListener('resize', setValues)
        }
    })

    const ws = createScrollPosition()
    return (
        <>
            <style>{`
                .hidden {
                    visibility: hidden;
                }                
                .title {
                    width: ${offsetWidth()}px;
                }
                .divider {
                    width: ${offsetWidth()}px;
                }
            `}</style>
            <h2 class="flex flex-wrap items-center mb-4 font-semibold text-3xl mt-14"
                classList={{
                    //["fixed top-0 mt-10 items-center mb-4 w-full"]: offsetTop()<(ws.y),
                    //["mt-14"]: offsetTop()>(ws.y)
                    ["hidden"]: offsetTop()<(ws.y)
                }}
                ref={header}
                onClick={openLink}
            >
                <span flex-1 class="title text-white">
                    {props.title}
                </span>
                <div
                    class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
                >
                    <div class="m-2 i-ri-arrow-right-up-line text-white" onClick={openLink}></div>
                </div>
                <hr class={`h-px my-1 bg-white border-0 divider`} />

            </h2>

            <h2 class="flex flex-wrap items-center mb-4 font-semibold text-3xl fixed top-0 items-center z-50 bg-[#212121] prose-invert dark title container"
                classList={{
                    ["hidden"]: offsetTop()>(ws.y)
                }}
            >

                <span flex-1 class="title text-white mt-15">
                    {props.title}
                </span>
                <div
                    class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
                >
                    <div class="m-2 i-ri-arrow-right-up-line text-white mt-15" onClick={openLink}></div>

                </div>
                <hr class={`h-px my-1 bg-white border-0 divider`} />

            </h2>
        </>
    )
}
