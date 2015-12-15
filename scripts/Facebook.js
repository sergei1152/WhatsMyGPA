angular.module('Facebook',['Meta'])

.factory('Facebook',['$window','Meta',function($window,Meta){
	var Facebook={
		initialize: function(callback){
			$window.fbAsyncInit = function() {
			    FB.init({ 
			      appId: '965955813469873',
			      xfbml: true,
			      version: 'v2.5'
			    });
			    callback();
			};
			(function(d, s, id){
			     var js, fjs = d.getElementsByTagName(s)[0];
			     if (d.getElementById(id)) {return;}
			     js = d.createElement(s); js.id = id;
			     js.src = "http://connect.facebook.net/en_US/sdk.js";
			     fjs.parentNode.insertBefore(js, fjs);
			 }(document, 'script', 'facebook-jssdk'));
		},
		share: function(){
			if(typeof FB ==='undefined'){
				Facebook.initialize(function(){
					FB.ui({
					  method: 'share',
					  href: 'http://www.whatsmygpa.ca',
					}, function(response){});
				});
				Meta.initialize();
				Meta.sendSocial('facebook','share','www.whatsmygpa.ca');
				Meta.sendEvent('Interaction','click','facebook_share');
			}
		}
	};
	return Facebook;	
}]);