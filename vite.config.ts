import { defineConfig } from 'vite'
import Userscript from 'vite-userscript-plugin'
import { name, version, author } from './package.json'

export default defineConfig({
  plugins: [
    Userscript({
      entry: 'src/index.ts',
      metadata: {
        name,
        version,
        author: author.name,
        match: 'https://panel.netangels.ru/*'
      }
    })
  ]
})
