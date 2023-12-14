// user-list-component.js
class UserListComponent extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    async fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    }
  
    async render() {
      const users = await this.fetchData();
  
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
  
          .user-list {
            list-style-type: none;
            padding: 0;
          }
  
          .user-item {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #dddddd;
            border-radius: 4px;
            background-color: #f8f9fa;
          }
        </style>
  
        <div>
          <h2>Lista de Usuarios</h2>
          <ul class="user-list">
            ${users.map(user => `<li class="user-item">${user.name}</li>`).join('')}
          </ul>
        </div>
      `;
    }
  }
  
  customElements.define('user-list-component', UserListComponent);
  