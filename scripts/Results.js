angular.module('Results', [])

//formats results for display
.factory('setUpResults', ['Results', function(Results) {
    return function(selectedUniversity) {
		Results={};
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

.factory('Results', function() {
    var Results = {};
    return Results;
});