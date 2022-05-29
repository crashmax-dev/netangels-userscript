import { el } from 'redom'

export function addDirectivesSpoiler(directives: NodeListOf<Element>): void {
  for (const directive of directives) {
    if (directive.querySelector('spoiler')) return

    const span = directive.querySelector('span')!
    const [, key, value] = span.textContent!.match(/(.+)=(.+)/)!
    const spoiler = el('span', { className: 'spoiler' }, value)
    span.innerHTML = `${key}=${spoiler.outerHTML}`
  }
}
