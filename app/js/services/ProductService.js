app.service('productService',ProductService);

function ProductService(api){
	//services
	this.api = api;
	this.products = localStorage.getItem('products');
}


ProductService.prototype.retrieveProducts = function(){
	var self = this;
	console.log('retrieveProducts =' + localStorage)
	return this.api.request('/api/products/',{},'GET');
}

ProductService.prototype.setProducts = function(products){
	//store the products in local storage so you don't have to make an API
	//request each time you are on this page.
	localStorage.setItem('products',JSON.stringify(products));
	this.products = products;
	console.log('setProducts: '+ this.products);
}

ProductService.prototype.getProducts = function(){
	var self = this;
	//if there are no products stored in localStorage
	//grab them from the API,store them in localStorage
	//and pass back the products as a promise
	if(this.products == null){
		return this.retrieveProducts().then(function(response){
				self.setProducts(response.data.products);
				return response.data.products;
		   });
	}
	else {
		if (typeof self.products == 'string'){
			return JSON.parse(self.products)
		}  
		else if (typeof self.products == 'object'){

			console.log(self.products);
			return self.products;
		}		
	}
}

ProductService.prototype.addProduct = function(product){
 	//TODO: add the new product to the current product list and
 	//return the updated list
	return this.api.request('/api/products',product,'POST')
			.then(function(response){
				console.log(response);
			});

}

/*
Function to edit a product. returns a POST request to api /editproduct/:productId and a promise to update products list in localStorage.
Parameters:
product: object containing key/value pairs of product properties
id: comes from product property: productId
*/
ProductService.prototype.editProduct = function(product,id){
	var self = this;
	console.log(id);
    return this.api.request('/editproduct/' + id,product,'POST')
    .then(function(response){
    	self.getProducts(response);
        console.log(response);
    });
}