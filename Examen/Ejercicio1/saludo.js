// saludo-component.js
// Define tu componente personalizado
class SaludoComponent extends HTMLElement {
    constructor() {
      super();
  
      // Crea un shadow DOM
      this.attachShadow({ mode: 'open' });
  
      // Agrega el contenido HTML al shadow DOM
      this.shadowRoot.innerHTML = `
        <style>
          /* Puedes agregar estilos específicos para tu componente aquí */
          h1 {
            color: #333;
          }
        </style>
        <div>
          <h1>¡Hola, Mundo mi nombre es Moreno Douglas!</h1>
        </div>
      `;
    }
  }
  
  // Define el nombre del componente y registra la clase
  customElements.define('saludo-component', SaludoComponent);