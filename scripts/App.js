angular.module('WhatsMyGPA.ca', ['Universities','ReportCard','Calculator', 'ngSanitize','ui.select','ui.validate','Facebook','Results','Validator','Filters','luegg.directives','Storage','ui.bootstrap','ConversionChart','Meta'])

.controller('InputController',['$scope','UniversityList','ReportCard','Calculate','setUpResults','Results','Validator','Storage','ConversionChart','searchStatus','Meta',function($scope,UniversityList,ReportCard,Calculate,setUpResults,Results,Validator,Storage,ConversionChart,searchStatus,Meta){
	$scope.UniversityList=UniversityList;
  $scope.ReportCard=ReportCard;
  $scope.university={
    selected: null, //the selected university
    selectedGradeInput: null //the input grade type the user selected
  };

  $scope.Calculate=function(source){
      Calculate($scope.university);
      Storage.saveGrades($scope.university.selected.value.gradeConversions[$scope.university.selectedGradeInput]);
      Meta.sendUniqueEvent('Calculation','unique');
      if(source==='button'){
        Meta.sendEvent('Calculation','button_click');
      }
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
  $scope.universitySelected=function(notWriteStorage){
    setUpResults($scope.university.selected.value);
    ConversionChart.setUniversity($scope.university.selected.value);
    //selects the first grade conversion type from the university
    for(var key in $scope.university.selected.value.gradeConversions){
      if($scope.university.selected.value.gradeConversions.hasOwnProperty(key)){
        $scope.university.selectedGradeInput=key;
        break;
      }
    }
    //set the key value of the university (needed for local storage)
    for(var key in UniversityList){
      if(UniversityList.hasOwnProperty(key) && UniversityList[key].name===$scope.university.selected.value.name ){
        $scope.university.selected.key=key;
        break;
      }
    }
    if(notWriteStorage){
      $scope.gradeInputTypeSelected(true);
    }
    else{
      $scope.gradeInputTypeSelected(false);
    }
    Meta.sendEvent('Selections','university_selected',$scope.university.selected.value.name);
    Storage.saveUniversity($scope.university.selected.key);
  };

  //event for when the user selects the grade input type
  $scope.gradeInputTypeSelected=function(notWriteStorage){
    if($scope.university.selected){
      var selectedGradeConversion=$scope.university.selected.value.gradeConversions[$scope.university.selectedGradeInput];
      Validator.buildLetterIndex(selectedGradeConversion);
      if(Storage.on && !notWriteStorage){
        Storage.saveGradeInput($scope.university.selectedGradeInput);
      }
    }
    else{
      console.error('Error: You need to select a univeristy first.');
    }
    Meta.sendEvent('Selections','grade_input_type',$scope.university.selectedGradeInput);
  };

  $scope.clearGrades=function(){
    for (var i = 0; i < ReportCard.semesters.length; i++) { //iterate through all the semesters
      for (var j = 0; j < ReportCard.semesters[i].length; j++) { //iterate through all the grades in the semesters
        var grade = ReportCard.semesters[i][j];
        grade.value='';
        grade.creditWeight='';
      }
    }
    Meta.sendEvent('Interaction','click','clear_grades');
    Storage.saveGrades($scope.university.selected.value.gradeConversions[$scope.university.selectedGradeInput]);
  };

  $scope.addGrades=function(){
    ReportCard.addSemester();
    $scope.angularScrollGlue=true;
    setTimeout(function(){
      $scope.angularScrollGlue=false;
    },1);
    Meta.sendEvent('Interaction','click','add_grades');
  };
  
  $scope.ReportCard.addSemester(); //initializes the report card with a semester for the user to fill in

  //for displaying the Cant find your university? link when the search results come back with no universities
  $scope.searchSuccess=function(){
    return searchStatus.success;
  };

  //retrieving stuff from local storage and setting it
  if(Storage.getUniversity()){ //retrieving university
    var key=Storage.getUniversity();
    if(UniversityList[key]){
      $scope.university.selected={
        key:key,
        value: UniversityList[key]
      };
      $scope.universitySelected(true);
      if(Storage.getGradeType()){ //retrieving grade input type
        $scope.university.selectedGradeInput=Storage.getGradeType();
        $scope.gradeInputTypeSelected();
      }
    }
  }
  if(Storage.getGrades()){
    Storage.loadGrades();
  }
  Meta.initialize();
}])

.controller('OutputController', ['$scope', 'Results','Facebook','$uibModal','Meta', function($scope, Results,Facebook,$uibModal,Meta){
  $scope.Results=Results;

  $scope.isEmpty=function(object){ //so that if the results are empty, 
    for(var key in object){
      if(object.hasOwnProperty(key)){
        return false;
      }
    }
    return true;
  };

  $scope.open = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'ConversionChart.html',
      controller:'ConversionChartModal'
    });
    Meta.sendEvent('Interaction','click','open_conversion_chart');
  };

  $scope.Facebook=Facebook;
  Meta.initialize();
}]);