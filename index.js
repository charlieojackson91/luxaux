import {ProductObj} from './productObjs.js';

const productsAr = [];

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
        productsAr.push(obj);
    });

    // set interval here after all products have been appened to array
    console.log(productsAr);
    setInterval(()=>{
        const timeNow = new Date().getTime();

        productsAr.forEach(obj => {
            let timeDistance = obj.auctionExpiry - timeNow;
            let days         = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
            let hours        = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes      = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds      = Math.floor((timeDistance % (1000 * 60)) / 1000);
            obj.countDown(days, hours, minutes, seconds);
            obj.updateTimerDOM();
        });
    }, 1000)

};

fetchProducts();