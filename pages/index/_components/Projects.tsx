import { Index } from 'solid-js'
import ProjectItem from './ProjectItem'

export default () => {
  const projectLists = [
    {
      name: 'Docusaurus',
      desc: 'Currently investigating.',
      link: 'https://github.com/facebook/docusaurus',
      icon: 'i-fluent-emoji-flat-t-rex',
    }, {
      name: 'Ghost theme Moegi',
      desc: 'An elegant & fresh ghost theme',
      link: 'https://github.com/moegi-design/ghost-theme-Moegi',
      icon: 'i-fluent-emoji-flat-newspaper',
    }, {
      name: 'Enspire',
      desc: 'Make CAS Great Again at SWFLA!',
      link: 'https://github.com/moegi-design/ghost-theme-Moegi',
      icon: 'i-fluent-emoji-flat-unicorn',
    }, {
      name: 'YAAMR',
      desc: 'Yet Another Apple Music Discord RPC',
      link: 'https://github.com/qwerzl/Yet-Another-AppleMusicRPC',
      icon: 'i-fluent-emoji-flat-headphone',
    },
  ]
  const openLink = () => {
    window.open('https://github.com/qwerzl', '_blank')
  }
  return (
    <>
      <h2 class="flex items-center mt-14 mb-4 font-semibold text-3xl text-white">
        <span flex-1 class="title">Projects</span>
        <div
          onClick={openLink}
          class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
        >
          <div class="m-2 i-ri-arrow-right-up-line" ></div>
        </div>
      </h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Index each={projectLists}>
          {item => (
            <ProjectItem data={item()} />
          )}
        </Index>
      </div>
    </>
  )
}
