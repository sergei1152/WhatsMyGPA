angular.module('WhatsMyGPA.ca', ['Universities','ReportCard','Calculator', 'ngSanitize','ui.select'])

.controller('InputController',['$scope','UniversityList','ReportCard','Calculate',function($scope,UniversityList,ReportCard,Calculate){

	$scope.UniversityList=UniversityList;
  $scope.ReportCard=ReportCard;

  $scope.university={
    selected: null, //the selected university
    selectedGradeConversion: null, //the input grade type the user selected
    results: null //the results of the calculation
  };
  
  $scope.Calculate=function(){
    $scope.university.results=Calculate($scope.university);
  };
  
  $scope.ReportCard.addSemester(); //initializes the report card with a semester for the user to fill in
}]);