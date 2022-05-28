import { el } from 'redom'
import './styles.scss'

window.addEventListener('load', () => {
  const observe = wrapperObserver()
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

function createButton(directive: Element): void {
  if (directive.classList.contains('x')) return
  directive.classList.add('x')

  const span = directive.querySelector('span')!
  const [, key, value] = span.textContent!.match(/(.+)=(.+)/)!
  const spoiler = el('span', { className: 'spoiler' }, value)
  span.innerHTML = `${key}=${spoiler.outerHTML}`
}

function addDirectivesSpoiler(directives: NodeListOf<Element>): void {
  for (const directive of directives) {
    createButton(directive)
  }
}

// function addDatabaseSpoiler() {
//   const dbms = document.querySelector('.virtualhost_dbms-access__info')
//   if (dbms) {
//     if (!dbms.classList.contains('spoiler')) {
//       dbms.classList.add('spoiler')
//     }
//   }
// }

function wrapperObserver() {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      const node = mutation.target as HTMLElement
      const directives = node.querySelectorAll('.vh_directive')
      if (directives) {
        addDirectivesSpoiler(directives)
      }
    }
  })

  return () => {
    const app = document.querySelector('#app')
    if (app) {
      observer.observe(app, {
        childList: true,
        subtree: true
      })
    }
  }
}
