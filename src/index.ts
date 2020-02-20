class CustomElementElement extends HTMLElement {
  connectedCallback() {
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
