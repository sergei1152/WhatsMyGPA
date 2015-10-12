angular.module('Calculator',['ReportCard'])

.factory('Regex',function(){
	return {
		letterGradeRegex:/^[a-zA-Z-+]{1,3}$/,
		numberGradeRegex:/^[1-9.]{1,5}$/,
		creditWeightRegex:/^[1-9.]{1,4}$/
	};
})

.factory('Calculate',["ReportCard",'Results','Regex', function(ReportCard,Results,Regex){
	function filterGrades(grades,type){
		//filter ReportCard for all valid grades
		for(var i=0;i<ReportCard.semesters.length;i++){ //iterate through all the semesters
			for(var j=0;j<ReportCard.semesters[i].length;j++){ //iterate through all the grades in the semesters
				var grade=ReportCard.semesters[i][j];
				if(type==="letter"){
					if(grade && grade.value && grade.creditWeight && grade.value.match(Regex.letterGradeRegex) && grade.creditWeight.match(Regex.creditWeightRegex)){
						grades.push(grade);
					}
				}
				else if(type==="number"){
					if(grade && grade.value && grade.creditWeight && grade.value.match(Regex.numberGradeRegex) && grade.creditWeight.match(Regex.creditWeightRegex)){
						grades.push(grade);
					}
				}
				
			}
		}
	}
	
	return function(university){
		var grades=[];
		var type=JSON.parse(university.selectedGradeConversion).type;
		filterGrades(grades,type);

		

		console.log(grades);
		var results="hello";
		return results;
	};
}]);