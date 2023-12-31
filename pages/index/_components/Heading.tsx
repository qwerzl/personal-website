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
    const [offsetWidth, setOffsetWidth] = createSignal(0);
    let header: HTMLHeadingElement | ((el: HTMLHeadingElement) => void) | undefined;

    const setValues = () => {
        while (!document.fonts.ready) console.log(document.fonts.ready)
        if (typeof(header) !== "undefined" && "offsetWidth" in header) {
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                // Safari and Chromium seem to behave differently on offsetTop/Width...
                // setOffsetWidth(header.offsetWidth + convertRemToPixels(3))
                setOffsetWidth(header.offsetWidth + convertRemToPixels(props.offsetWidthSafari))
            } else {
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

    return (
        <>
            <style>{`
                .header {
                  width: 100%;
                  height: 5rem;
                  position: sticky;
                  top: 0;
                }
                .divider {
                    width: ${offsetWidth()}px;
                }
            `}</style>
            <h2 class="flex flex-wrap items-center mb-4 font-semibold text-3xl mt-14 header z-50 bg-[#212121] prose-invert dark title"
                ref={header}
                onClick={openLink}
            >
                <span flex-1 class="title text-white mt-1">
                    {props.title}
                </span>
                <div
                    class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
                >
                    <div class="m-2 i-ri-arrow-right-up-line text-white" onClick={openLink}></div>
                </div>
                <hr class={`h-px my-1 bg-white border-0 divider`} />

            </h2>
        </>
    )
}
