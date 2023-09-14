import { Mason } from 'solid-mason';
import { createResource } from "solid-js";

const fetchApi = async () => {
    try {
        const response = await fetch(
            "https://api.unsplash.com/users/qwerzl/photos?order_by=popular",
            {
                headers: {
                    Authorization: `Client-ID ${ import.meta.env.VITE_UNSPLASH_CONTENT_APIKEY }`,
                },
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error("Data is not an array");
        }

        return data
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};



export default () => {
    const [images] = createResource(fetchApi)

    return (
        <div class="relative -left-2 min-h-screen">
            <Mason columns={2} items={images()}>
                {(item) => (
                    <div class="w-full p-2">
                        <div class="parent rounded-xl overflow-hidden" style={{ 'aspect-ratio': `${item.width}/${item.height}` }}>
                            <img class="child flex items-center justify-center" src={item['urls']['small']} />
                        </div>
                    </div>
                )}
            </Mason>
        </div>
    );
}


