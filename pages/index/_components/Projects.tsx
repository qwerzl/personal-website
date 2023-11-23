import { Index } from 'solid-js'
import ProjectItem from './ProjectItem'
import Heading from "./Heading";

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

  return (
    <>
      <Heading
          url='https://github.com/qwerzl'
          title="Projects"
          offsetTopChrome={-6}
          offsetTopSafari={-8}
          offsetWidthSafari={10}
      />
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
