# CRUD de Productos

Este proyecto es un sistema interactivo que permite al usuario gestionar productos mediante un CRUD (Crear, Leer, Actualizar y Eliminar). Está desarrollado en JavaScript y utiliza `axios` para realizar solicitudes HTTP a un servidor local.

## Características

- **Agregar productos**: Permite añadir productos con nombre, precio y categoría.
- **Editar productos**: Modifica los datos de un producto existente.
- **Eliminar productos**: Elimina productos de la lista.
- **Listar productos**: Muestra todos los productos registrados.
- **Alertas dinámicas**: Utiliza `SweetAlert2` para mostrar mensajes interactivos.

## Tecnologías utilizadas

- **HTML**: Estructura del proyecto.
- **CSS**: Estilos elegantes y responsivos.
- **JavaScript**: Lógica del CRUD.
- **Axios**: Manejo de solicitudes HTTP.
- **SweetAlert2**: Alertas dinámicas.
- **JSON Server**: Servidor local para simular una API REST.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Palmar-Felipe/javascript-M3-S.git

## Uso
Agregar un producto:

Ingresa el nombre, precio y categoría del producto en los campos correspondientes.
Haz clic en el botón "Add Product".
Editar un producto:

Haz clic en el botón "Editar" junto al producto que deseas modificar.
Cambia los datos en los campos y haz clic en "Add Product" para guardar los cambios.
Eliminar un producto:

Haz clic en el botón "Eliminar" junto al producto que deseas eliminar.
Listar productos:

Los productos se muestran automáticamente en la lista.



# Product CRUD

This project is an interactive system that allows users to manage products through a CRUD (Create, Read, Update, and Delete). It is developed in JavaScript and uses `axios` to make HTTP requests to a local server.

## Features

- **Add products**: Allows adding products with name, price, and category.
- **Edit products**: Modifies the data of an existing product.
- **Delete products**: Removes products from the list.
- **List products**: Displays all registered products.
- **Dynamic alerts**: Uses `SweetAlert2` to show interactive messages.

## Technologies Used

- **HTML**: Project structure.
- **CSS**: Elegant and responsive styles.
- **JavaScript**: CRUD logic.
- **Axios**: HTTP request handling.
- **SweetAlert2**: Dynamic alerts.
- **JSON Server**: Local server to simulate a REST API.
```markdown
## Project Structure

JAVASCRIPT-M3-S/
|
├──java-script/
|   ├──public/
│   │   └── js.json
│   ├──src/                        
│   |   ├ css/
│   │   └── style.css           
│   │
│   └──  js/                    
│       ├── alert.js   
|       └──gestion_api.js      
│      
│
├── .gitignore                  
├── index.html
│── package.json
│── License
│── README.MD


## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Palmar-Felipe/javascript-M3-S.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the JSON server:
   ```bash
   npx json-server --watch public/js.json --port 3000
   ```

4. Open the index.html file in your browser.

## Usage

1. **Add a product**:
   - Enter the name, price, and category of the product in the corresponding fields.
   - Click the "Add Product" button.

2. **Edit a product**:
   - Click the "Edit" button next to the product you want to modify.
   - Change the data in the fields and click "Add Product" to save the changes.

3. **Delete a product**:
   - Click the "Delete" button next to the product you want to remove.

4. **List products**:
   - Products are automatically displayed in the list.

## Styles

The design is elegant and responsive:
- **Soft colors**: Light background and blue buttons.
- **Adaptable design**: Adjusts to mobile devices, tablets, and desktop computers.

## Author

**Felipe Miguel Palmar Ramirez**  
[GitHub](https://github.com/Palmar-Felipe)

**Document**
1119392593

**Clan**
Caiman



## License

This project is licensed under © Felipe Miguel Palmar Ramirez. All rights reserved.
