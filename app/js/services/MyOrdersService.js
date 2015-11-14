app.service('ordersService',OrdersService);

function OrdersService(api){
    this.api = api;
    this.cart = [];
}

/*
Cart array - When 'addToCart' button is pressed on individual products page, the product object will be added to the cart array.
*/

OrdersService.prototype.addToCart = function(product){
    this.cart.push(product);
    console.log(this.cart);
}

OrdersService.prototype.createOrder = function(orderData){
    return this.api.request('/record_order',orderData,'POST')
        .then(function(response){
            console.log(response);
        });
}


    

