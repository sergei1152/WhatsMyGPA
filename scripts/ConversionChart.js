angular.module('ConversionChart',[])

.factory('ConversionChart',function(){
	return {
		setUniversity: function(university){
			this.university=university;
		}
	};
})
.controller('ConversionChartModal',['$scope','$uibModalInstance','ConversionChart',function($scope,$uibModalInstance,ConversionChart){
	$scope.selectedUniversity=ConversionChart.university;
  $scope.gradeConversions=[];
  $scope.close=function(){
    $uibModalInstance.dismiss('close');
  };
  var gradeConversions=ConversionChart.university.gradeConversions;
  for(var gradeConversion in gradeConversions){
    if(gradeConversions.hasOwnProperty(gradeConversion) && gradeConversions[gradeConversion].gpaConversion){ //if its a non-gpa conversion
      var conversion= gradeConversions[gradeConversion];
      var newConversion={
        name: gradeConversions[gradeConversion].name,
        values:[]
      }
      for(var i=0;i<conversion.gpaConversion.length;i++){
        if(conversion.type==='number'){
          if(conversion.gpaConversion[i].min===conversion.gpaConversion[i].max){
            newConversion.values.push(conversion.gpaConversion[i].min);
          }
          else{
            newConversion.values.push(conversion.gpaConversion[i].min+' - '+conversion.gpaConversion[i].max);
          }
        }
        else if (conversion.type==='letter'){
          var letters='';
          for( var j=0;j<conversion.gpaConversion[i].letters.length;j++){
            letters+=conversion.gpaConversion[i].letters[j]+' ';
          }
          newConversion.values.push(letters);
        }
      }
      $scope.gradeConversions.push(newConversion);
    }
  }

  //generate the 4.0 gpa table based on the data from the first conversion
  for(var gradeConversion in gradeConversions){
    if(gradeConversions.hasOwnProperty(gradeConversion) && gradeConversions[gradeConversion].gpaConversion){ //if its a non-gpa conversion
      var conversion= gradeConversions[gradeConversion];
      var newConversion={
        name: '4.0 GPA',
        values:[]
      }
      for(var i=0;i<conversion.gpaConversion.length;i++){
        newConversion.values.push(conversion.gpaConversion[i].value);
      }
      $scope.gradeConversions.push(newConversion);
      break;
    }
  }
}]);