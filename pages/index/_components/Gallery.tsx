import Masonry from "./Masonry";
import Heading from "./Heading";


export default () => {

    return (
        <>
            <Heading
                url="https://unsplash.com/qwerzl"
                title="Popular Photos"
                offsetTopChrome={6}
                offsetTopSafari={5.5}
                offsetWidthSafari={3}
            />
            <Masonry />
        </>
    )
}
