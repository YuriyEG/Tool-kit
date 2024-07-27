function debounce<T extends (...args: any[]) => any>(func: T, delay: number) {
  let timeoutId: NodeJS.Timeout | undefined

  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
