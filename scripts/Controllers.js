angular.module('WhatsMyGPA.ca', ['Universities','ReportCard','Calculator', 'ngSanitize','ui.select',,'ui.validate','Facebook','Results'])

.controller('InputController',['$scope','UniversityList','ReportCard','Calculate','setUpResults','Results',function($scope,UniversityList,ReportCard,Calculate,setUpResults,Results){
	$scope.UniversityList=UniversityList;
  $scope.ReportCard=ReportCard;
  $scope.university={
    selected: null, //the selected university
    selectedGradeInput: null //the input grade type the user selected
  };
  $scope.gradeForm;

  $scope.Calculate=function(valid){
    debugger
     Calculate($scope.university);
    if(valid){
      Calculate($scope.university);
    }
  };

  $scope.universitySelected=function(){
    $("#university-selection").blur();
    setUpResults($scope.university.selected.value);
  };

  $scope.getGradeRegex=function(){
    return  /^[0-9.]{1,5}$/;
  };

  $scope.ReportCard.addSemester(); //initializes the report card with a semester for the user to fill in
}])

.controller('OutputController', ['$scope', 'Results','Facebook', function($scope, Results,Facebook){
  $scope.Results=Results;

  $scope.isEmpty=function(object){ //so that if the results are empty, 
    for(var key in object){
      if(object.hasOwnProperty(key)){
        return false;
      }
    }
    return true;
  };

  $scope.Facebook=Facebook;
}]);