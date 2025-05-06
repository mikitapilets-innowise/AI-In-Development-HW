const axios = require('axios');

async function testFakeStoreApi() {
    try {
        // API endpoint
        const url = "https://fakestoreapi.com/products";
        
        // Make GET request
        const response = await axios.get(url);
        
        // Test 1: Verify server response code
        if (response.status !== 200) {
            throw new Error(`Expected status code 200, got ${response.status}`);
        }
        
        // Get products from response
        const products = response.data;
        
        // List to store products with defects
        const defectiveProducts = [];
        
        // Test 2: Validate each product
        for (const product of products) {
            const defects = [];
            
            // Check title
            if (!product.title) {
                defects.push("Empty title");
            }
            
            // Check price
            if (product.price < 0) {
                defects.push("Negative price");
            }
            
            // Check rating
            if (product.rating?.rate > 5) {
                defects.push("Rating exceeds 5");
            }
            
            // If any defects found, add to defective products list
            if (defects.length > 0) {
                defectiveProducts.push({
                    id: product.id,
                    title: product.title,
                    defects: defects
                });
            }
        }
        
        // Print results
        console.log("\nTest Results:");
        console.log(`Total products checked: ${products.length}`);
        console.log(`Products with defects: ${defectiveProducts.length}`);
        
        if (defectiveProducts.length > 0) {
            console.log("\nDefective Products:");
            for (const product of defectiveProducts) {
                console.log(`\nProduct ID: ${product.id}`);
                console.log(`Title: ${product.title}`);
                console.log("Defects:");
                for (const defect of product.defects) {
                    console.log(`- ${defect}`);
                }
            }
        }
        
        return defectiveProducts;
        
    } catch (error) {
        console.error("Error testing API:", error.message);
        throw error;
    }
}

// Run the tests
testFakeStoreApi()
    .catch(error => {
        console.error("Test failed:", error);
        process.exit(1);
    }); 