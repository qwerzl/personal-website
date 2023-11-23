import { createResource, Index } from 'solid-js'
import dayjs from 'dayjs'
import { getLatestPosts } from '../api'
import type { PostMeta } from '../api'
import Heading from "./Heading";

interface PostProps {
  data: PostMeta
}

const PostItem = (props: PostProps) => {
  const { data } = props
  return (
    <a
      class="flex px-3 py-2 mt-2 mr-2 rounded-md transition-colors decoration-none hover:bg-gray-100 dark:hover:bg-gray-50/10"
      href={data.url}
      target="_blank"
    >
      <div flex-1>{ data.title }</div>
      <div op-40 font-normal class="hidden sm:block">{ dayjs(data.published_at).format('YYYY-MM-DD') }</div>
    </a>
  )
}

export default () => {
  const [postLists] = createResource(getLatestPosts)
  return (
    <>
      <Heading
          url="https://blog.qwerzl.me"
          title="Latest Posts"
          offsetTopChrome={-6}
          offsetTopSafari={-8}
          offsetWidthSafari={3}
      />
      <div class="grid grid-cols-1 -mx-2 text-white">
        <Index each={postLists()}>
          {item => (
            <PostItem data={item()} />
          )}
        </Index>
      </div>
    </>
  )
}
