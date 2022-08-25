import { el } from 'redom'

export function addSpoiler(directives: NodeListOf<Element>): void {
  for (const directive of directives) {
    if (directive.querySelector('spoiler')) return

    const span = directive.querySelector('span')!
    // prettier-ignore
    const [, key, value] = span.textContent!.match(/(.+)=(.+)/)!
    const spoiler = el('span', { className: 'spoiler' }, value!)
    span.innerHTML = `${key}=${spoiler.outerHTML}`
  }
}
