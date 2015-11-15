app.controller('ProductCtrl',ProductCtrl);

function ProductCtrl(productService){
	this.productService = productService;
}

ProductCtrl.prototype.refreshProducts = function(){
    localStorage.removeItem('products');
    localStorage.removeItem('authToken');
    console.log('refreshProducts: '+localStorage);
}

ProductCtrl.prototype.addProduct = function(name,description,image,price,category,quantity,status){
	//create the api request that makes the product on the backend
	//as part of your response you need to add it to your current
	//product array using the product service
	var request_body = {
		name:name,
		description:description,
		image:image,
		price:price,
		category:category,
		quantity:quantity,
		status:status
	}
	this.productService.addProduct(request_body);

}