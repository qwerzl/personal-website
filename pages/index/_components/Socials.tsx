import { Index, Show } from 'solid-js'

interface SocialProps {
  data: {
    icon: string
    link: string
    class: string
    text?: string
    textClass: string
  }
}

const SocialItem = (props: SocialProps) => {
  const { data } = props
  return (
    <a
      class={`inline-flex px-3 py-2 mt-2 mr-2 rounded-md  transition-colors decoration-none ${data.class} hover:text-white bg-gray-50/10`}
      href={data.link}
      target="_blank"
    >
      <div text-xl>
        <div class={data.icon+' '+data.textClass} />
      </div>
      <Show
        when={data.text}
      >
        <div text-sm ml-1 class={data.textClass}>{ data.text }</div>
      </Show>
    </a>
  )
}

export default () => {
  const socialLists = [
    {
      text: 'Github',
      link: 'https://github.com/qwerzl',
      icon: 'i-ri-github-fill',
      class: 'hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600',
      textClass: ''
    }, {
      text: 'Unsplash',
      link: 'https://unsplash.com/qwerzl',
      icon: 'i-fa-brands-unsplash',
      class: 'hover:bg-white',
      textClass: 'hover:text-black',
    },{
      text: 'Instagram',
      link: 'https://www.instagram.com/ttqwerzl/',
      icon: 'i-fa-brands-instagram',
      class: 'hover:bg-gradient-to-r from-[#fd5949] to-[#d6249f]',
      textClass: ''
    }, {
      text: 'Blog',
      link: 'https://blog.qwerzl.me',
      icon: 'i-ri-book-2-line',
      class: 'hover:bg-gradient-to-r from-sky-400 to-blue-500',
      textClass: ''
    },
  ]

  return (
    <div mt-4>
      <Index each={socialLists}>
        {item => (
          <SocialItem data={item()} />
        )}
      </Index>
    </div>
  )
}
