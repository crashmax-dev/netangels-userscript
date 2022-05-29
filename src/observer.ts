export function wrapperObserver(callback: (mutation: MutationRecord) => void): () => void {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      callback(mutation)
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
