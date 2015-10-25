angular.module('Grade',[])

.factory('Grade',function(){
	var Grade=function(grade,weight){
		this.value=grade || null;
		this.creditWeight=weight || null;
	};
	return Grade;
});