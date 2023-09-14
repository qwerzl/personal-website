import Socials from './Socials'
// import helloWordArr from '../hello'

export default () => {
  // const helloWord = helloWordArr[Math.floor((Math.random() * helloWordArr.length))]

  return (
    <header class="mt-12 md:mt-18 text-white">
      <h1 class="title text-5xl font-bold ">
        <span class="block">Hello, </span>
        <span class="block mt-2">I'm qwerzl.</span>
      </h1>
      <div class="mt-6">
        <div>
          <span>CG&CS Enthusiast. </span>
        </div>
        <div mt-2>
          <span>WFLA '25, Computerization '23 Leader.</span>
        </div>
        <div mt-2>
          <span>Currently focusing on FastAPI and Vue. On the CG side, I'm using Keyshot and Maya.</span>
        </div>
      </div>
      <Socials />
    </header>
  )
}
