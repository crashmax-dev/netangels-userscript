export function wrapperObserver(
  target: string, callback: (node: HTMLElement) => void
) {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      callback(mutation.target as HTMLElement)
    }
  })

  return {
    connect: () => {
      const el = document.querySelector(target)
      if (el) {
        observer.observe(el, {
          childList: true,
          subtree: true
        })
      }
    },
    disconnect: () => observer.disconnect()
  }
}
