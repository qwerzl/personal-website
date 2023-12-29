import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { generateHydrationScript, renderToString } from 'solid-js/web'

import { PageContext } from './types'

const passToClient = ['pageProps', 'documentProps']

const render = (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext

  const pageHtml = renderToString(() => <Page {...pageProps} />)

  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'qwerzl'
  const description = (documentProps && documentProps.description) || ':-)'

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="author" content="qwerzl" />
        <meta property="og:title" content="qwerzl's Website" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/46770502?v=4" />
        <meta property="description" content="${description}" />
        <meta property="og:description" content="${description}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://qwerzl.me/" />
        <link rel="icon" href="/favicon.ico" />
        <title>${title}</title>
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}

export { render, passToClient }
