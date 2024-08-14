import { LitElement, html } from 'lit';
import styles from './ilw-firework.styles';
import './ilw-firework.css';

class Firework extends LitElement {

    static get properties() {
        return {
            theme: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = '';
    }

    render() {
        return html`
      <div>
          <slot></slot>
      </div>
    `;
    }
}

customElements.define('ilw-firework', Firework);