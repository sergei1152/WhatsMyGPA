angular.module('WhatsMyGPA.ca', ['Universities', 'ngSanitize','ui.select'])

.controller('InputController',['$scope','UniversityList',"$timeout",function($scope,UniversityList){
	$scope.UniversityList=UniversityList;
  $scope.selectUniversity=function(test,test2){
    console.log(test);
    console.log(test2);
    console.log(UniversityList.selected);
  }
}]);
	