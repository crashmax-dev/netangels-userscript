import { wrapperObserver } from './observer'
import { addDirectivesSpoiler } from './spoilers'
import './styles.scss'

window.addEventListener('load', () => {
  const observe = wrapperObserver((mutation) => {
    const node = mutation.target as HTMLElement
    const directives = node.querySelectorAll('.vh_directive')
    if (directives) {
      addDirectivesSpoiler(directives)
    }
  })

  const { history } = window
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { pushState, replaceState } = history

  history.pushState = (...args) => {
    pushState.apply(history, args)
    observe()
  }

  history.replaceState = (...args) => {
    replaceState.apply(history, args)
    observe()
  }

  observe()
})
