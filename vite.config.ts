import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import ssr from 'vite-plugin-ssr/plugin'
import Unocss from 'unocss/vite'

import { presetAttributify, presetUno, presetWebFonts } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import { presetTypography } from '@unocss/preset-typography'
import axios from "axios";

export default defineConfig({
  plugins: [
    solidPlugin({
      ssr: true,
    }),
    Unocss({
      presets: [
        presetIcons(),
        presetAttributify(),
        presetUno({
          dark: 'media'
        }),
        presetTypography({
          cssExtend: {
            'a': {
              'text-decoration': 'none',
            },
          },
        }),
        presetWebFonts({
          // use axios with an https proxy
          customFetch: (url: string) => axios.get(url).then(it => it.data),
          provider: 'google',
          fonts: {
            sans: 'Atkinson Hyperlegible',
            mono: ['IBM Plex Mono'],
          },
        }),
      ],
    }),
    ssr({
      prerender: true,
    }),
  ],
  build: {
    target: 'esnext',
  },
})
