angular.module('WhatsMyGPA.ca', ['Universities', 'ngSanitize','ui.select'])

.controller('InputController',['$scope','UniversityList',"$timeout",function($scope,UniversityList){
	$scope.UniversityList=UniversityList;
  $scope.selectedUniversity={}; //contains the "value" of the univeristy
  
  //called when a user selects their university/college
  $scope.universitySelected=function(selectedUniversity){
    $scope.selectedUniversity=selectedUniversity;
    console.log(selectedUniversity); //same object as selectedUniversity
  }
}]);