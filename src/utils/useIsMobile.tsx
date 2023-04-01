export function useIsMobile (): boolean {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    // @ts-expect-error
    (navigator.msMaxTouchPoints > 0));
}