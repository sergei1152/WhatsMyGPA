angular.module('Calculator',['ReportCard'])

.factory('Calculate',["ReportCard", function(ReportCard){
	

	var Calculate=function(university){
		console.log(ReportCard);
		console.log(university);
		var results={};
		return results;
	};
	return Calculate;
}]);