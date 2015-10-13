angular.module('Calculator', ['ReportCard'])

.factory('Regex', function() {
    return {
        letterGradeRegex: /^[a-zA-Z-+]{1,3}$/,
        numberGradeRegex: /^[1-9.]{1,5}$/,
        creditWeightRegex: /^[1-9.]{1,4}$/
    };
})

.factory('Calculate', ["ReportCard", 'Results', 'Regex',
    function(ReportCard, Results, Regex) {
        //filter ReportCard for all valid grades
        function filterGrades(grades, type) {
            for (var i = 0; i < ReportCard.semesters.length; i++) { //iterate through all the semesters
                for (var j = 0; j < ReportCard.semesters[i].length; j++) { //iterate through all the grades in the semesters
                    var grade = ReportCard.semesters[i][j];
                    if (type === "letter") {
                        if (grade && grade.value && grade.creditWeight && grade.value.match(Regex.letterGradeRegex) && grade.creditWeight.match(Regex.creditWeightRegex)) {
                            grades.push(grade);
                        }
                    } else if (type === "number") {
                        if (grade && grade.value && grade.creditWeight && grade.value.match(Regex.numberGradeRegex) && grade.creditWeight.match(Regex.creditWeightRegex)) {
                            grades.push(grade);
                        }
                    }
                }
            }
        }
        //formats the results data structure accordingly
        function setUpResults(Results,selectedUniversity) {
            for (var gradeConversion in selectedUniversity.gradeConversions) {
                if (selectedUniversity.gradeConversions.hasOwnProperty(gradeConversion)) {
                    var conversion = {
	                    type: selectedUniversity.gradeConversions[gradeConversion].type,
	                    name: selectedUniversity.gradeConversions[gradeConversion].name,
	                    min: selectedUniversity.gradeConversions[gradeConversion].min_range,
	                    max: selectedUniversity.gradeConversions[gradeConversion].max_range,
	                    result: null
               	 	};
                	Results.push(conversion);
                }
            }
            return Results;
        }
        return function(university) {
            var input_grades = [];
            var output_grades = [];
            var selectedUniversity = university.selected.value;
            var selectedGradeConversion = selectedUniversity.gradeConversions[university.selectedGradeInput];
            var type = selectedGradeConversion.type;

            filterGrades(input_grades, type);
            Results=[];
            setUpResults(Results,selectedUniversity); //resets the results

            //if number, calculate its respective number and calculate gpa and convert backwards to everything else
            //if letter, simply calculate gpa, then convert backwards to everything else
            for (var i = 0; i < input_grades.length; i++) {
                if (type === "number") {
                    for (var j = 0; j < selectedUniversity.gradeConversions.length; j++) {
                        if (selectedGradeConversion.name === selectedUniversity.gradeConversions[j].name) {
                            console.log('HEELOWEFIJOEWJFOIEWFj');
                        }
                    }
                }

            }
            var results = "hello";
            return results;
        };
    }
]);