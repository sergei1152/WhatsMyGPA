angular.module('ReportCard',[])

.factory('Grade',function(){
	var Grade=function(grade,weight){
		this.value=grade;
		this.creditWeight=weight;
	};
	return Grade;
})

.factory('ReportCard',['Grade',function(Grade){
	var gradesPerSemester=6;
	var ReportCard={
		semesters:[],
		addSemester: function(){
			var newSemester=[];
			for(var i=0;i<gradesPerSemester;i++){
				newSemester.push(new Grade());
			}
			this.semesters.push(newSemester);
		}
	};
	return ReportCard;
}])

//The service that stores the results of the calculations
.factory('Results',function(){
	var results={};
	return results;
});