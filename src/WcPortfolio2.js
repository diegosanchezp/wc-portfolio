import { LitElement, html, css } from 'lit-element';
import '@material/mwc-drawer';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-fab';

export class WcPortfolio2 extends LitElement {
  static get properties() {
    return {
      drawer: {type: HTMLElement}
    };
  }

  static get styles() {
    return css`
      img{
        max-width: 100%;
      }
      .sidebar{
        height: 100vh;
      }

      .app-fab--absolute{
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 1;
      }

      @media(min-width: 1024px) {
        .app-fab--absolute {
          bottom: 1.5rem;
          right: 1.5rem;
        }
      }
    `;
  }

  toggleDrawer(){
    this.drawer.open = !this.drawer.open;
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("DOMContentLoaded", ()=>{
      this.drawer = this.shadowRoot.querySelector("mwc-drawer");
    });
  }

  render() {
    return html`
      <mwc-drawer open type="dismissible">
        <div class="sidebar">
          <img src="src/Images/ProfilePic.jpg" alt="Profile Picture"> 
          <p>DIEGO SÁNCHEZ</p>
          <p>Full Stack Web Developer</p>
          <mwc-list activatable>
            <mwc-list-item>About</mwc-list-item>
            <mwc-list-item>Academics</mwc-list-item>
            <mwc-list-item>Certifications</mwc-list-item>
            <mwc-list-item>Projects</mwc-list-item>
          </mwc-list>
        </div>
        <div slot="appContent">
          <div>
            <mwc-fab 
             @click=${this.toggleDrawer}
             class="app-fab--absolute"
             icon="menu">
            </mwc-fab>
          </div>
        </div>
      </mwc-drawer>
    `;
  }
}
