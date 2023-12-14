// contenedor-component.js
class ContenedorComponent extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <style>
          :host {
            display: block;
            width: 80%;
            margin: 20px auto;
            background-color: #77F5C4; /* Color de fondo personalizado */
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
  
          .encabezado {
            padding: 1rem;
            background-color: #3498db; /* Color de fondo del encabezado personalizado */
            color: #ffffff; /* Color del texto del encabezado personalizado */
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }
  
          .cuerpo {
            padding: 5rem;
          }
        </style>
  
        <div class="encabezado">
          <slot name="encabezado">Encabezado Predeterminado</slot>
        </div>
        <div class="cuerpo">
          <slot name="cuerpo">Contenido Predeterminado</slot>
        </div>
      `;
    }
  }
  
  customElements.define('contenedor-component', ContenedorComponent);
  