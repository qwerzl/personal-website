import Heading from "./Heading";
import {createResource, Index} from 'solid-js'

interface topArtistsMeta {
  streamable: string,
  image: any,
  mbid: string,
  url: string,
  playcount: string,
  '@attr': any,
  name: string
}

interface topArtists {
  data: topArtistsMeta
}

const fetchApi = async () => {
  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=qwerzl&api_key=${import.meta.env.VITE_LASTFM_APIKEY}&format=json&period=6month&limit=3`,

    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (!Array.isArray(data["topartists"]["artist"])) {
      throw new Error("Data is not an array");
    }

    return data["topartists"]["artist"]
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
const openLink = (url: string) => {
  window.open(url, '_blank')
}


const ArtistItem = (props: topArtists) => {
  const { data } = props

  return (
    <a
      class="flex px-3 py-2 mt-2 mr-2 rounded-md transition-colors decoration-none hover:bg-gray-100 dark:hover:bg-gray-50/10"
      href={data.url}
      target="_blank"
    >
      <div flex-1>{ data.name }</div>
      <div op-40 font-normal class="hidden sm:block" onClick={[openLink, data.url]}>Play count: { data.playcount }</div>
    </a>
  )
}



export default () => {
  const [artists] = createResource(fetchApi)

  return (
    <>
      <Heading
        url="https://last.fm/qwerzl"
        title="Music I'm Listening to"
        offsetTopChrome={6}
        offsetTopSafari={5.5}
        offsetWidthSafari={3}
      />
      <div class="grid grid-cols-1 -mx-2 text-white">
        <Index each={artists()}>
          {item => (
            <ArtistItem data={item()} />
          )}
        </Index>
      </div>
    </>
  )
}
