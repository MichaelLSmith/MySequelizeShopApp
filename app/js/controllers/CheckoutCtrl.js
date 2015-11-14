app.controller('CheckOutCtrl',CheckOutCtrl);

function CheckOutCtrl(ordersService){
    this.ordersService = ordersService;
    this.cart = ordersService.cart;
}

CheckOutCtrl.prototype.createOrder = function(cart,total,tax,final_total){
    //create the api request that creates the order on the backend
    //as part of your response you need to add it to your current
    //orders array using the orders service(double check that this is what I have to do.)
    var request_body = {
        cart:cart,
        total:total,
        tax:tax,
        final_total:final_total
    }
    this.ordersService.createOrder(request_body);
}