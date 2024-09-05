# Warehouse Management SQL Node.js Server Project

This project simulates a basic **warehouse management system**. It involves creating a SQL database to manage warehouse data (such as items, orders, customers, and accounting) and building a Node.js server to interact with this data. The server exposes API endpoints to retrieve and manage the data.

## Project Purpose
- Develop a SQL database for warehouse operations.
- Populate the database with fake data, including relationships between tables (Primary and Foreign Keys).
- Interact with the database using a Node.js server, exposing warehouse data through API endpoints.

## Features
- SQL database designed with Primary Keys (PK) and Foreign Keys (FK) to model real-world warehouse relationships.
- Populate database tables with sample data.
- Use `mssql` library in Node.js to connect to the SQL Server.
- API endpoints for data retrieval.

## Requirements
- Node.js
- SQL Server

## Usage
1. Clone the repository.
2. Restore the SQL database using the provided `Warehouse.bak` backup.
3. Install dependencies with `npm install`.
4. Configure database connection details in the `.env` file.
5. Start the server with `npm start`.
6. Access warehouse data through various endpoints like:
   - `/data`: Returns a list of items in the warehouse.
   - `/FinancialSituation`: Retrieves customer data.
   - `/OrdersToBeDone`: Shows pending orders.
   - `/ReturningCustomer`: Retrieves accounting data for returning customers.

## Endpoints
- **GET /data**: Fetch all records from the `Items` table.
- **GET /FinancialSituation**: Fetch all records from the `Customers` table.
- **GET /OrdersToBeDone**: Fetch orders data from the `Items` table.
- **GET /ReturningCustomer**: Fetch financial data from the `Accounting` table.

## Database Design
- The warehouse database includes tables for items, customers, orders, and accounting.
- Tables are connected using Primary Keys (PK) and Foreign Keys (FK) to model real-world relationships.
- A detailed schema is provided in the `Warehouse.drawio` file.

## Restoring the Database from Backup
1. Use SQL Server Management Studio (SSMS) to restore the database from the `Warehouse.bak` backup file.
2. Ensure all relationships between tables are properly configured by reviewing the schema in SSMS.

## How to Import the Database
1. Restore the database from the provided `Warehouse.bak` file.
2. Load the SQL scripts (`SQLQuery 6.x.sql`) into your SQL Server.
3. Verify that the tables and their relationships (PK, FK) are correctly set up.
