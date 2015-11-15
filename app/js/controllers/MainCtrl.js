app.controller('MainCtrl',MainCtrl);

function MainCtrl(productService,products){
	
    //services
    this.productService = productService;
    this.products = products;
    console.log(this.products);

}


