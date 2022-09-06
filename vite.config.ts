import { defineConfig } from 'vite'
import Userscript from 'vite-userscript-plugin'
import { author, homepage, name, version } from './package.json'

export default defineConfig({
  plugins: [
    Userscript({
      entry: 'src/index.ts',
      header: {
        name,
        version,
        homepage,
        author: author.name,
        match: 'https://panel.netangels.ru/*'
      }
    })
  ]
})
