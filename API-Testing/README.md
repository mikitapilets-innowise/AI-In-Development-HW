# Fake Store API Testing

This project contains automated tests for validating data from the Fake Store API (https://fakestoreapi.com/products). The tests verify the integrity and correctness of product data returned by the API.

## Test Objectives

The tests validate the following criteria for each product:
- Server response code (expected 200)
- Product title is not empty
- Product price is not negative
- Product rating does not exceed 5

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fake-store-api-tests
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

To run the tests, execute:
```bash
npm test
```

## Test Output

The test script will output:
- Total number of products checked
- Number of products with defects
- Detailed information about each defective product, including:
  - Product ID
  - Product Title
  - List of specific defects found

## Example Output

```
Test Results:
Total products checked: 20
Products with defects: 2

Defective Products:

Product ID: 1
Title: Example Product
Defects:
- Rating exceeds 5
```

## Error Handling

The script includes error handling for:
- Network connectivity issues
- Invalid API responses
- Unexpected data formats

If any errors occur during testing, they will be logged to the console with appropriate error messages.

## Contributing

Feel free to submit issues and enhancement requests! 