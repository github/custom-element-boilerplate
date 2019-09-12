export default class CustomElementElement extends HTMLElement { }

declare global {
  interface Window {
    CustomElementElement: typeof CustomElementElement
  }
}
