// contador-component.js
class ContadorComponent extends HTMLElement {
    static get observedAttributes() {
      return ['state'];
    }
  
    constructor() {
      super();
      this.state = 0; // Variable interna para gestionar el estado del contador
    }
  
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'state' && oldValue !== newValue) {
        this.state = parseInt(newValue, 10) || 0;
        this.render();
      }
    }
  
    incrementar() {
      this.state += 1;
      this.setAttribute('state', this.state.toString());
    }
  
    disminuir() {
      this.state -= 1;
      this.setAttribute('state', this.state.toString());
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <style>
          :host {
            display: block;
            width: 80%;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
          }
  
          h2 {
            color: #3498db;
          }
  
          .contador {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
          }
  
          .botones {
            display: flex;
            justify-content: space-between;
          }
  
          button {
            font-size: 18px;
            padding: 10px 20px;
          }
        </style>
  
        <div>
          <h2>Contador de Douglas Moreno</h2>
          <div class="contador">${this.state}</div>
          <div class="botones">
            <button id="disminuir" class="btn btn-danger">Disminuir</button>
            <button id="incrementar" class="btn btn-success">Incrementar</button>
          </div>
        </div>
      `;
  
      // Move event listeners here, after setting innerHTML
      this.shadowRoot.getElementById('incrementar').addEventListener('click', () => this.incrementar());
      this.shadowRoot.getElementById('disminuir').addEventListener('click', () => this.disminuir());
    }
  }
  
  customElements.define('contador-component', ContadorComponent);
  