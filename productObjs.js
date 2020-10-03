const productCont  = document.querySelector('.productCont');


// This function creates the different HTML elements
const createElement = (element, attributes={}) => {
    let objEntries  = Object.entries(attributes)
    let htmlElement = document.createElement(element);

    objEntries.forEach(attribute => {
        if (attribute[0] == 'textContent') htmlElement.textContent = attribute[1];
        else htmlElement.setAttribute(attribute[0], attribute[1]);
    })
    return htmlElement;
}


class ProductObj {
    constructor(product){
        const {id,productName,startingPrice,limit,increment,imgArray,productCategories,auctionExpiry,productFeatures,seller,review} = product;
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
        this.seller            = seller;
    }

    printProductName(){
        console.log(this.productName);
    }

    convertDateString(){
        let date = this.auctionExpiry.split('-')
        let [day, month, year] = date;
        this.auctionExpiry = new Date(year, month-1, day).getTime();
    }

    appendProductDOM(){
        // createElements
        let productDiv    = createElement('div', {class:'product'});
        let productName   = createElement('h3', {textContent:this.productName});
        let startingPrice = createElement('span', {textContent:`Current bid: £${this.startingPrice}`});
        let productImg    = createElement('img', {class: 'productImg', src:`${window.location.origin}/assets/${this.imgArray[0]}`});
        let btn           = createElement('button', {textContent: this.increment});
        let seller        = createElement('span', {textContent: this.seller});
        let review        = createElement('span', {textContent: this.review});
        let auctionExpiry = createElement('div', {class:'timer', id:this.id});


        // append them all to the page
        productDiv.append(productName, productImg, startingPrice, btn, seller, review, auctionExpiry);
        productCont.appendChild(productDiv);

    }

    countDown(days, hours, minutes, seconds){
        this.days    = days;
        this.hours   = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    updateTimerDOM(){
        document.getElementById(`${this.id}`).textContent = `${this.days}d ${this.hours}h ${this.minutes}m ${this.seconds}s`;
    }
}

export {ProductObj}; 