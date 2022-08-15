/**
 * An example Custom Element. This documentation ends up in the
 * README so describe how this elements works here.
 *
 * You can event add examples on the element is used with Markdown.
 *
 * ```
 * <custom-element></custom-element>
 * ```
 */
class CustomElementElement extends HTMLElement {
  connectedCallback(): void {
    this.textContent = ':wave:'
  }
}

declare global {
  interface Window {
    CustomElementElement: typeof CustomElementElement
  }
}

export default CustomElementElement

if (!window.customElements.get('custom-element')) {
  window.CustomElementElement = CustomElementElement
  window.customElements.define('custom-element', CustomElementElement)
}
