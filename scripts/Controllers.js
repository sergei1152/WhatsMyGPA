angular.module('WhatsMyGPA.ca', ['Universities','ReportCard','Calculator', 'ngSanitize','ui.select','ui.validate','Facebook','Results','Validator','Filters'])

.controller('InputController',['$scope','UniversityList','ReportCard','Calculate','setUpResults','Results','Validator',function($scope,UniversityList,ReportCard,Calculate,setUpResults,Results,Validator){
	$scope.UniversityList=UniversityList;
  $scope.ReportCard=ReportCard;
  $scope.university={
    selected: null, //the selected university
    selectedGradeInput: null //the input grade type the user selected
  };

  $scope.Calculate=function(){
      Calculate($scope.university);
  };
  $scope.validateGrade=function(value){
    var emptyStringRegex=/^\s*$/; //because inputs arent required, and empty inputs simply wont be counted towards final
    if((typeof value==='string' && value.match(emptyStringRegex)) || value===null){
      return true;
    }
    if($scope.university.selected && $scope.university.selectedGradeInput){//otherwise if the grade value isnt empty, do proper validation
      return Validator.isValidGrade(value, $scope.university.selected.value.gradeConversions[$scope.university.selectedGradeInput]);
    }
    return true; //if the user hasnt selected a university of grade input type yet
  };

  $scope.validateCredit=function(value){
    var emptyStringRegex=/^\s*$/; //because inputs arent required, and empty inputs simply wont be counted towards final
    if((typeof value==='string' && value.match(emptyStringRegex))|| value===null){
      return true;
    }
    if($scope.university.selected && $scope.university.selectedGradeInput){//otherwise if the grade value isnt empty, do proper validation
     return Validator.isValidCredit(value);
    }
    return true;//if either university of grade input type wasnt selected
  };
    
  $scope.universitySelected=function(){
    setUpResults($scope.university.selected.value);
    if($scope.university.selectedGradeInput){ //if a grade input was already selected and the other university has the grade input type
      var selectedGradeConversion=$scope.university.selected.value.gradeConversions[$scope.university.selectedGradeInput];
      if(selectedGradeConversion){
        Validator.buildLetterIndex(selectedGradeConversion);
      }
      else{ //if the grade input type doesnt exist in the university
        

      }
    }
  };

  $scope.gradeInputTypeSelected=function(){
    if($scope.university.selected){
      var selectedGradeConversion=$scope.university.selected.value.gradeConversions[$scope.university.selectedGradeInput];
      Validator.buildLetterIndex(selectedGradeConversion);
    }
    else{
      console.error('Error: You need to select a univeristy first.');
    }
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