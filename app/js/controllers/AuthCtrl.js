app.controller('AuthCtrl',AuthCtrl);

function AuthCtrl(api,$location){
	this.api = api;
	this.$location = $location;
}
AuthCtrl.prototype.authenticate = function(username,password){
	var self = this;
	var request_body = {
		username:username,
		password:password
	};
    console.log('admin_login request_body: '+ request_body.username + request_body.password);

	this.api.request('/api/users/admin_login',request_body,'POST')
	.then(function(response) {
      console.log(response.data.users[0].authToken);
      if(response.data.authToken != 'Invalid Credentials'){
      	//reset local storage data
      	localStorage.removeItem('products');
      	localStorage.setItem('authToken',response.data.users[0].authToken);
      	self.$location.path('/admin');
      }
    });;
}