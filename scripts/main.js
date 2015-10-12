angular.module('WhatsMyGPA.ca', ['Universities','ReportCard', 'ngSanitize','ui.select'])

.controller('InputController',['$scope','UniversityList','ReportCard',function($scope,UniversityList,ReportCard){
	$scope.UniversityList=UniversityList;
  $scope.selectedUniversity={}; //contains the "value" of the univeristy
  $scope.ReportCard=ReportCard;
  $scope.ReportCard.addSemester();
  $scope.selectedGradeInputType={};
  $scope.print=function(){
    console.log(ReportCard.semesters[0]);
    console.log($scope.selectedGradeInputType);
  }
  //called when a user selects their university/college
  $scope.universitySelected=function(selectedUniversity){
    $scope.selectedUniversity=selectedUniversity;
    console.log(selectedUniversity); //same object as selectedUniversity
  };
}]);