import CustomElementElement from './custom-element.js'

const tag = 'custom-element' as const

const root = (typeof globalThis !== 'undefined' ? globalThis : window) as typeof window
try {
  customElements.define(tag, CustomElementElement)
  root.CustomElementElement = CustomElementElement
} catch (e: unknown) {
  if (
    !(root.DOMException && e instanceof DOMException && e.name === 'NotSupportedError') &&
    !(e instanceof ReferenceError)
  ) {
    throw e
  }
}

type JSXBaseElement = JSX.IntrinsicElements extends {span: unknown}
  ? JSX.IntrinsicElements['span']
  : Record<string, unknown>
declare global {
  interface Window {
    CustomElementElement: typeof CustomElementElement
  }
  interface HTMLElementTagNameMap {
    [tag]: CustomElementElement
  }
  namespace JSX {
    interface IntrinsicElements {
      [tag]: JSXBaseElement & Partial<Omit<CustomElementElement, keyof HTMLElement>>
    }
  }
}

export default CustomElementElement
