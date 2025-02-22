x# Restaurant API

This is a RESTful API for managing a restaurant system using Node.js, Express, and MongoDB.

## Features
- Customer Management
- Staff Management
- Ingredient Inventory
- Menu and Menu Items
- Orders Management
- Table Reservations

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Deeppatel-4032/restorent_APIs
   cd restaurant-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start MongoDB (if not already running):
   ```sh
   mongod
   ```
4. Run the server:
   ```sh
   node server.js
   ```

## Endpoints
### Customers
- `POST /customers` - Create a new customer
- `GET /customers` - Get all customers

### Staff
- `POST /staff` - Add a staff member
- `GET /staff` - Get all staff members

### Ingredients
- `POST /ingredients` - Add an ingredient
- `GET /ingredients` - Get all ingredients

### Menu 
- `POST /menu` - Create a menu
- `GET /menu` - Get all menu 

### Menu Items
- `POST /menuItem` - Create a menu item
- `GET /menuItem` - Get all menu items

### Orders
- `POST /orders` - Create an order
- `GET /orders` - Get all orders

### Tables
- `POST /tables` - Add a table
- `GET /tables` - Get all tables

## Running the API
Start the server by running:
```sh
node index.js
```
The API will be available at `http://localhost: 5025`.

---
