import { defineConfig } from 'vite'
import Userscript from 'vite-userscript-plugin'
import { author, name, version } from './package.json'

export default defineConfig({
  plugins: [
    Userscript({
      entry: 'src/index.ts',
      header: {
        name,
        version,
        author: author.name,
        match: 'https://panel.netangels.ru/*'
      }
    })
  ]
})
