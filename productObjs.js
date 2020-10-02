class ProductObj {
    constructor(product){
        const {id,productName,startingPrice,limit,increment,imgArray,productCategories,auctionExpiry,productFeatures,review} = product;
        this.id                = id;
        this.productName       = productName;
        this.startingPrice     = startingPrice;
        this.limit             = limit;
        this.increment         = increment;
        this.imgArray          = imgArray;
        this.productCategories = productCategories;
        this.auctionExpiry     = auctionExpiry;
        this.productFeatures   = productFeatures;
        this.review            = review;
    }

    printProductName(){
        console.log(this.productName);
    }

    convertDateString(){
        let date = this.auctionExpiry.split('-')
        let [day, month, year] = date;
        this.auctionExpiry = new Date(year, month-1, day);
    }

    appendProductDOM(){
        let productCont   = document.querySelector('.productCont');
        let productDiv    = document.createElement('div');
        let ul            = document.createElement('ul');
        let productName   = document.createElement('h3');
        let startingPrice = document.createElement('span');
        let productImg    = document.createElement('img');
        let btn           = document.createElement('button');

        
        // add classes for products
        productDiv.classList = 'product';
        productImg.classList = 'productImg'
        
        // tie properties to newly created elements
        productName.textContent = this.productName;
        startingPrice.textContent = `Current bid: £${this.startingPrice}`;
        productImg.src = `${window.location.origin}/assets/${this.imgArray[0]}`
        btn.textContent = this.increment;

        ul.append(productName, productImg, startingPrice, btn);
        productDiv.appendChild(ul);
        productCont.appendChild(productDiv);
    }
}

export {ProductObj}; 