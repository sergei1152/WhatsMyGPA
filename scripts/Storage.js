angular.module('Storage',['ReportCard'])

.factory('Storage',['ReportCard',function(ReportCard){
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
		if(this.on){
			localStorage.setItem('university',university);
		}
	};

	storage.saveGradeInput=function(type){
		if(this.on){
			localStorage.setItem('grade_input_type',type);
		}
	};

	storage.saveGrades=function(){

	};

	storage.getUniversity=function(){
		if(this.on){
			return localStorage.getItem('university');
		}
		return false;
	};
	storage.getGradeType=function(){
		if(this.on){
			return localStorage.getItem('grade_input_type');
		}
		return false;
	};

	if(storageAvailable('localStorage')){
		storage.on=true;
	}

	return storage;
}]);