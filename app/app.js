var app = angular.module('ShopApp',['ngRoute']);

app.config(function($routeProvider,$httpProvider){
	$routeProvider.when('/',{
		templateUrl:'templates/home.html',
		controller:'MainCtrl as Ctrl',
        resolve:{
            // path:function($location){
            //         if(localStorage.getItem('authToken') == null){
            //             $location.path('/login');
            //         }
            //     },
            products:function(productService){
                    return productService.getProducts();
                }
            }
	})
	.when('/admin_login',{
		templateUrl:'templates/login.html',
		controller:'AuthCtrl as Ctrl'
	})
	.when('/admin',{
		templateUrl:'templates/admin.html',
		controller:'AdminCtrl as Ctrl',
		resolve:{
			// path:function($location){
			// 		if(localStorage.getItem('authToken') == null){
			// 			$location.path('/admin_login');
			// 		}
			// 	},
			products:function(productService){
					return productService.getProducts();
				}
			}
	})
	.when('/add_product',{
		templateUrl:'templates/add_product.html',
		controller:'ProductCtrl as Ctrl'
	})

    .when('/edit_product/:productId',{
        templateUrl:'templates/edit_product.html',
        controller: 'EditProductCtrl as Ctrl',
        resolve:{
            path:function($location){
                if(localStorage.getItem('authToken') == null){
                    $location.path('/login');
                }
            },
            products:function(productService){
                return productService.getProducts();
            }
        }
    })

    .when('/view_product/:productId',{
        templateUrl:'templates/view_product.html',
        controller: 'ViewProductCtrl as Ctrl',
        resolve:{
            products:function(productService){
                return productService.getProducts();
            }
        }
    })

    .when('/cart',{
        templateUrl:'templates/cart.html',
        controller: 'CartCtrl as Ctrl'
    })

    // .when('/order')
        
	.otherwise({
		redirectTo:'/'
	});

	$httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        if (localStorage.authToken) {
          config.headers.Authorization = localStorage.authToken;
        }
        return config;
      }
    };
  });
});