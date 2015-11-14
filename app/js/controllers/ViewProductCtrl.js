app.controller('ViewProductCtrl',ViewProductCtrl);

function ViewProductCtrl(productService,products,$routeParams,ordersService){
    //angular injections
    this.productId = $routeParams.productId;
    console.log(this.productId);

    //services
    this.productService = productService;
    this.products = products;
    this.product = this.getProduct(this.productId);
    this.ordersService = ordersService;
}

ViewProductCtrl.prototype.getProduct = function(id){
    return this.products.filter(function(product){
        return product.productId === id})[0];
    //loops through the entire localStorage.products array. It then puts all the objects into a new array that fit the requirements that equal the 'id'. This will only ever return one object. the [0] is a sercurity buffer. If more than one product has the same id, it will only put the first product with the id into the array.
}

/*Returns the product object into */

ViewProductCtrl.prototype.returnProductObject = function(){
    //call to addToCart, which should push the product object into the cart array which is stored in the ordersService. Please work!
    this.ordersService.addToCart(this.product)
    // return this.product;
}