import type { Component } from 'solid-js'

import Hero from './_components/Hero'
import Projects from './_components/Projects'
import Posts from './_components/Posts'
import Footer from './_components/Footer'
import Gallery from "./_components/Gallery";

const documentProps = {
  title: 'qwerzl\'s Website',
  description: 'qwerzl'
}

const Page: Component = () => {
  return (
      <div class="px-6 py-[8vh] max-w-[76ch] mx-auto xl:text-lg prose-invert dark">
        <Hero />
        <Projects />
        <Posts />
        <Gallery />
        <Footer />
      </div>
  )
}

export { Page, documentProps }
