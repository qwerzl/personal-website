import Masonry from "./Masonry";
import { createScrollPosition } from '@solid-primitives/scroll'
import {createSignal, onMount} from "solid-js";

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default () => {
    const openLink = () => {
        window.open('https://unsplash.com/qwerzl', '_blank')
    }
    const [offsetTop, setOffsetTop] = createSignal(0);
    let header: HTMLHeadingElement | ((el: HTMLHeadingElement) => void) | undefined;
    onMount(() => {
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){
            // @ts-ignore
            setOffsetTop(header.offsetTop-convertRemToPixels(1.7))
            // Safari and Chromium seem to behave differently on offsetTop...
        } else {
            // @ts-ignore
            setOffsetTop(header.offsetTop+convertRemToPixels(1))
        }
    })

    const ws = createScrollPosition()
    return (
        <>
            <h2 class="flex items-center mb-4 font-semibold text-3xl"
                classList={{
                    ["fixed top-0 mt-10 items-center mb-4 w-full"]: offsetTop()<(ws.y),
                    ["mt-14"]: offsetTop()>(ws.y)
                }}
                ref={header}
                onClick={openLink}
            >
                <span flex-1 class="title text-white">
                    Popular Photos
                </span>
                <div
                    class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
                >
                    <div class="m-2 i-ri-arrow-right-up-line text-white" onClick={openLink}></div>
                </div>
            </h2>
            <Masonry />


        </>
    )
}
