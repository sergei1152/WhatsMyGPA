angular.module('WhatsMyGPA.ca', ['Universities', 'ngSanitize','ui.select'])

.controller('InputController',['$scope','UniversityList',"$timeout",function($scope,UniversityList){
	$scope.UniversityList=UniversityList;
  $scope.selectedUniversity; //contains the "value" of the univeristy
  $scope.gradeInputTypes={};
  $scope.getGradeInputTypeName=getGradeInputTypeName;
  //called when a user selects their university/college
  $scope.universitySelected=function(selectedUniversity){
    setGradeInputs($scope.gradeInputTypes,selectedUniversity);
    console.log(selectedUniversity); //same object as selectedUniversity
  }
  function setGradeInputs(gradeInputTypes,selectedUniversity){
    if(selectedUniversity.value){
      if(selectedUniversity.value.percentageGradeToGPA){
        gradeInputTypes.percentageGradeToGPA=selectedUniversity.value.percentageGradeToGPA;
      }
      if(selectedUniversity.value.letterGradeToGPA){
        gradeInputTypes.letterGradeToGPA=selectedUniversity.value.letterGradeToGPA;
      }
      if(selectedUniversity.value.customGradeToGPA){
        gradeInputTypes.customGradeToGPA=selectedUniversity.value.customGradeToGPA;
      }
    }
    else{
      console.error('Selected university should have a key and value property');
    }
  }
  function getGradeInputTypeName(key){
    if($scope.gradeInputTypes[key]){

      if(key==="percentageGradeToGPA"){
        return "Percentage (eg. 67%)";
      }
      else if (key==="letterGradeToGPA"){
        return "Letter (eg. A+, B-)";
      }
      else{ //if the input type is custom
        return $scope.gradeInputTypes[key].name;
      }
      
    }
  }
}]);