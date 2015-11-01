angular.module('WhatsMyGPA.ca', ['Universities','ReportCard','Calculator', 'ngSanitize','ui.select','ui.validate','Facebook','Results','Validator','Filters','luegg.directives'])

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
  
  //event for when the user selects the university
  $scope.universitySelected=function(){
    setUpResults($scope.university.selected.value);

    //selects the first grade conversion type from the university
    for(var key in $scope.university.selected.value.gradeConversions){
      if($scope.university.selected.value.gradeConversions.hasOwnProperty(key)){
        $scope.university.selectedGradeInput=key;
        break;
      }
    }
    $scope.gradeInputTypeSelected();
  };

  //selects the radio button when a user clicks on the text
  $scope.selectGradeInput=function(event){
    var relatedRadio=$(event.target).siblings('input[type=radio');
    $scope.university.selectedGradeInput=relatedRadio.val();
    $scope.gradeInputTypeSelected();
  }

  //event for when the user selects the grade input type
  $scope.gradeInputTypeSelected=function(){
    if($scope.university.selected){
      var selectedGradeConversion=$scope.university.selected.value.gradeConversions[$scope.university.selectedGradeInput];
      Validator.buildLetterIndex(selectedGradeConversion);
    }
    else{
      console.error('Error: You need to select a univeristy first.');
    }
  };

  //for mobile. If the grade input type is letter, makes the input type tel which is easier for if youre using a phone
  $scope.getInputType=function(){
    if($scope.university.selectedGradeInput){
      var selectedGradeConversionType=$scope.university.selected.value.gradeConversions[$scope.university.selectedGradeInput].type;
      if(selectedGradeConversionType==='number'){
        return 'tel';
      }
      return 'text';
    }
    return "text";
  }

  $scope.clearGrades=function(){
    for (var i = 0; i < ReportCard.semesters.length; i++) { //iterate through all the semesters
      for (var j = 0; j < ReportCard.semesters[i].length; j++) { //iterate through all the grades in the semesters
        var grade = ReportCard.semesters[i][j];
        grade.value='';
        grade.creditWeight='';
      }
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