angular.module('Storage',['ReportCard','Validator'])

.factory('Storage',['ReportCard','Validator',function(ReportCard,Validator){
	function isDefined(value) {
      if (typeof value !== 'undefined' && value) {
          return true;
      } else {
          return false;
      }
  }

  function storageAvailable(type) { //checks if storage is supported and available for use
		try {
			var storage = window[type],
				x = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		}
		catch(e) {
			return false;
		}
	}

	var storage={
		on: false
	};

	storage.saveUniversity=function(university){
		if(!this.on){
      return false;
    }
		localStorage.setItem('university',university);
    return true;
	};

	storage.saveGradeInput=function(type){
		if(!this.on){
      return false;
    }
		localStorage.setItem('grade_input_type',type);
    return true;
	};

  //saves only the valid grades onto session storage
	storage.saveGrades=function(selectedGradeConversion){
    if(!this.on){
      return false;
    }
    if(!selectedGradeConversion){
      console.error('Storage.saveGrades function requires selectedGradeConversion!');
    }
    var valid_grades=[];
    for (var i = 0; i < ReportCard.semesters.length; i++) { //iterate through all the semesters
      for (var j = 0; j < ReportCard.semesters[i].length; j++) { //iterate through all the grades in the semesters
        var grade = ReportCard.semesters[i][j];
        //if it is a valid letter or number grade
        if (isDefined(grade) && isDefined(grade.value) && isDefined(grade.creditWeight) && Validator.isValidGrade(grade.value, selectedGradeConversion) && Validator.isValidCredit(grade.creditWeight)) {
          valid_grades.push({
            value: grade.value,
            creditWeight: grade.creditWeight
          });
        }
      }
    }
    localStorage.setItem('grades',JSON.stringify(valid_grades));
    return true;
	};

	storage.getUniversity=function(){
		if(!this.on){
      return false;
    }
		return localStorage.getItem('university');
	};
	storage.getGradeType=function(){
		if(!this.on){
      return false;
    }
		return localStorage.getItem('grade_input_type');
	};

  storage.getGrades=function(){
    if(!this.on){
      return false;
    }
    return localStorage.getItem('grades');
  };

	storage.loadGrades=function(){
    if(!this.on || !storage.getGrades()){
      return false;
    }
    var localGrades=JSON.parse(storage.getGrades());
    if(localGrades.length>0){ //if there is at least one valid grade in local storage
      ReportCard.addGrades(localGrades);
    }
    return true;
	};

	if(storageAvailable('localStorage')){
		storage.on=true;
	}

	return storage;
}]);