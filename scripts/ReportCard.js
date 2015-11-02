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
		},
		addGrades: function(grades){ //note: clears all previous grades
      this.semesters=[];
      var numberOfSemestersNeeded=Math.ceil(grades.length/gradesPerSemester);
			for(var i=0;i<numberOfSemestersNeeded;i++){ //make sure there are enough inputs for all the grades
        this.addSemester();
			}
      for(i=0;i<grades.length;i++){
        var semester=Math.floor(i/gradesPerSemester);
        var grade=i-semester*gradesPerSemester;
         ReportCard.semesters[semester][grade].value=grades[i].value;
         ReportCard.semesters[semester][grade].creditWeight=grades[i].creditWeight;
      }

		}
	};
	return ReportCard;
}]);

