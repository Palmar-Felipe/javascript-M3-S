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

