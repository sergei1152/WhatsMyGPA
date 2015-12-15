//The following code is used for GA analytics of the App. This data is only used to judge the user expirience of the application
//so that I know how to improve it. It respects the user's Do Not Track setting on their browser.
angular.module('Meta',[])

.factory('Meta',['$window',function($window){
	function doNotTrack(){
		if((navigator && (navigator.doNotTrack=='1' || navigator.doNotTrack=='yes')) ||  $window.doNotTrack=='1' || navigator.msDoNotTrack=='1'){
			return true;
		}
		return false;
	}

	var tracker= {
		enabled: true,
		tracking_code: "UA-58019243-1",
		unique_events: {},
		initialize: function(){
			if(doNotTrack()){
				this.enabled=false;
			}
			else{ //enable google analytics
				if(typeof ga==='undefined'){//start it if it hasn't already been initialized
					this.startGA();
				}
			}
		},
		startGA:function(){
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			  ga('create', this.tracking_code, 'auto');
			  ga('send', 'pageview');
		},
		sendEvent: function(category,action,label,value,fields){
			if(typeof ga!=='undefined' && this.enabled){
				ga('send', 'event',category,action,label,value,fields);
			}
		},
		sendUniqueEvent: function(category,action,label,value,fields){
			var uniquekey=(category || '')+(action || '')+(label || '')+(value || '');
			if(typeof ga!=='undefined' && this.enabled && !this.unique_events[uniquekey]){
				this.unique_events[uniquekey]=true;
				ga('send', 'event',category,action,label,value,fields);
			}
		},
		sendSocial:function(socialNetwork, socialAction, socialTarget,fields){
			if(typeof ga!=='undefined' && this.enabled){
				ga('send', 'social', socialNetwork, socialAction, socialTarget, fields);
			}
		}
	};

	return tracker;
}]);
