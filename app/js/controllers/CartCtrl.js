app.controller('CartCtrl',CartCtrl);

function CartCtrl(ordersService){
    this.ordersService = ordersService;
    this.cart = ordersService.cart;
    //services

}

CartCtrl.prototype.viewContents = function(){
    console.log(this.cart);
}

CartCtrl.prototype.removeProduct = function(id){
    console.log(id);
    console.log(this.cart);
    for (i in this.cart){
        console.log(i);
        console.log(this.cart[i].productId);

        if (id === this.cart[i].productId){
            this.cart.splice(i, 1);
        }
    }
    // console.log(this.cart);
}

CartCtrl.prototype.clearCart = function(){
    //clears cart array stored in OrdersService
}

