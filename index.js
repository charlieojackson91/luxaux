import {ProductObj} from './productObjs.js';

const productCont = document.querySelector('productCont');

// fetch data from local JSON file - this could be API or database in the future
const fetchProducts = async () => {
    const data     = await fetch('products.json');
    const products = await data.json();

    // log out all products
    console.log(products);
    
    // loop through each product
    products.forEach(product => {
        
        // create objects of each product
        const obj = new ProductObj(product);

        // convert date to proper JS date time
        obj.convertDateString();

        // add product to DOM
        obj.appendProductDOM();
    });
}

fetchProducts();