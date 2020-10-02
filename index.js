const productCont = document.querySelector('productCont');

// fetch data from external API
const fetchProducts = async () => {
    const data     = await fetch('products.json');
    const products = await data.json();

    console.log(products);
    
    // loop through each product
    products.forEach(product => {
        
        // destruct objects
        const {productName, startingPrice, increment, limit} = product;

        // add to DOM
    });
}

fetchProducts();