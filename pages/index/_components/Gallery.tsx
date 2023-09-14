import Masonry from "./Masonry";


export default () => {
    const openLink = () => {
        window.open('https://unsplash.com/qwerzl', '_blank')
    }
    return (
        <>
            <h2 class="flex items-center mt-14 mb-4 font-semibold text-3xl">
                <span flex-1 class="title text-white">Popular Photos</span>
                <div
                    onClick={openLink}
                    class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
                >
                    <div class="m-2 i-ri-arrow-right-up-line text-white" ></div>
                </div>
            </h2>
            <Masonry />


        </>
    )
}
