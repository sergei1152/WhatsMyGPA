angular.module('ReportCard',[])

.factory('Grade',function(){
	var Grade=function(grade,weight){
		this.grade=grade;
		this.creditWeight=weight;
	};
	return Grade;
})

.factory('ReportCard',['Grade',function(Grade){
	var gradesPerSemester=6;
	var ReportCard={
		grades:[],
		addGrade: function(grade, credit){
			this.grades.push(new Grade(grade, credit));
		},
		addSemester: function(){
			for(var i=0;i<gradesPerSemester;i++){
				this.addGrade();
			}
		}
	};
	return ReportCard;
}]);