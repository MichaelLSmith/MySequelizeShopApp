app.controller('AdminCtrl',AdminCtrl);

function AdminCtrl(productService,$location,products){
	self = this;
    this.$location = $location;

	//services
	this.productService = productService;
	this.products = products;

}

AdminCtrl.prototype.logout = function(){
    localStorage.removeItem('products');
    localStorage.removeItem('authToken');
    console.log(localStorage);
    self.$location.path('/login');
}
