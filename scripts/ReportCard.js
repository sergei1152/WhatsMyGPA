angular.module('ReportCard',['Grade'])

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
}]);

