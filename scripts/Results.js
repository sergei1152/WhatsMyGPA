angular.module('Results', [])

//formats results for display
.factory('setUpResults', ['Results', function(Results) {
    return function(selectedUniversity) {
        for (var gradeConversion in selectedUniversity.gradeConversions) {
            if (selectedUniversity.gradeConversions.hasOwnProperty(gradeConversion)) {
                var conversion = {
                    type: selectedUniversity.gradeConversions[gradeConversion].type,
                    name: selectedUniversity.gradeConversions[gradeConversion].name,
                    min: selectedUniversity.gradeConversions[gradeConversion].min_range,
                    max: selectedUniversity.gradeConversions[gradeConversion].max_range,
                    result: null,
                    totalCredits: 0,
                    totalGrade: 0
                };
                Results[gradeConversion] = conversion;
            }
        }
    };
}])

//formats results for display
.factory('resetResults', ['Results', function(Results) {
    return function() {
        for (var gradeConversion in Results) {
            if (Results.hasOwnProperty(gradeConversion)) {
                Results[gradeConversion].result=null;
                Results[gradeConversion].totalCredits=0;
                Results[gradeConversion].totalGrade=0;
            }
        }
    };
}])

.factory('Results', function($window) {
    var Results = {};
    $window.Results=Results;
    return Results;
});