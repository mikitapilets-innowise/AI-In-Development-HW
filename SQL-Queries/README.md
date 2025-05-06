# Sales Data Analysis SQL Queries

This repository contains SQL queries for analyzing sales data from an online store. The analysis includes calculating total sales, identifying top customers, and computing average order values.

## Files Description

1. `sales_analysis_queries.sql`
   - Creates the orders table and populates it with sample data
   - Calculates total sales volume for March 2024
   - Identifies the customer who spent the most overall

2. `average_order_analysis.sql`
   - Creates the orders table and populates it with sample data
   - Calculates the average order value for the last three months

## How to Use

### Using SQLite Online

1. Go to [SQLite Online](https://sqliteonline.com/)
2. Choose either file to analyze:
   - For sales volume and top customer analysis: Use `sales_analysis_queries.sql`
   - For average order value analysis: Use `average_order_analysis.sql`
3. Copy the contents of your chosen file
4. Paste the SQL code into the SQLite Online editor
5. Click "Run" to execute the queries

### Expected Results

1. Total Sales for March 2024: 27,000
2. Top-spending Customer: Alice (20,000)
3. Average Order Value: 6,000

## Data Structure

The `orders` table has the following structure:
- `id`: INTEGER PRIMARY KEY
- `customer`: TEXT
- `amount`: REAL
- `order_date`: DATE

## Sample Data

The files include sample data for the following customers:
- Alice
- Bob
- Charlie

Each file contains the complete setup (table creation and data insertion) and can be run independently.

## Notes

- Each file can be run independently as it includes the necessary table creation and data insertion statements
- The `IF NOT EXISTS` clause prevents errors if the table already exists
- The analysis covers the period from January to March 2024 