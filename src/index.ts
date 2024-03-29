import { wrapperObserver } from './observer.js'
import { addSpoiler } from './spoiler.js'
import './style.scss'

window.addEventListener('load', () => {
  const { connect, disconnect } = wrapperObserver('#app', (node) => {
    const directives = node.querySelectorAll('.vh_directive')
    if (directives.length) {
      addSpoiler(directives)
      disconnect()
    }
  })

  const { history } = window
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { pushState, replaceState } = history

  history.pushState = (...args) => {
    pushState.apply(history, args)
    connect()
  }

  history.replaceState = (...args) => {
    replaceState.apply(history, args)
    connect()
  }

  connect()
})
