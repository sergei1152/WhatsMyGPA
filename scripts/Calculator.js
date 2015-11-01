angular.module('Calculator', ['ReportCard', 'Validator', 'Results'])

.factory('Calculate', ["ReportCard", 'Results', 'Validator', 'resetResults',
    function(ReportCard, Results, Validator, resetResults) {
        function isDefined(value) {
            if (typeof value !== 'undefined' && value) {
                return true;
            } else {
                return false;
            }
        }

        //filter ReportCard for all valid grades that pass the regex
        /*Parameters
            grades: empty array where the valid grades will be injected into
            selectedGradeConversion: input grade type
        */
        function filterGrades(grades, selectedGradeConversion) {
            for (var i = 0; i < ReportCard.semesters.length; i++) { //iterate through all the semesters
                for (var j = 0; j < ReportCard.semesters[i].length; j++) { //iterate through all the grades in the semesters
                    var grade = ReportCard.semesters[i][j];
                    //if it is a valid letter or number grade
                    
                    if (isDefined(grade) && isDefined(grade.value) && isDefined(grade.creditWeight) && Validator.isValidGrade(grade.value, selectedGradeConversion) && Validator.isValidCredit(grade.creditWeight)) {
                        if (selectedGradeConversion.type === "letter") {
                            grades.push({
                                value: grade.value.toUpperCase(),
                                creditWeight: Number(grade.creditWeight)
                            });
                        } else if (selectedGradeConversion.type === "number") {
                            grades.push({
                                value: Number(grade.value),
                                creditWeight: Number(grade.creditWeight)
                            });
                        }
                    }
                }
            }
        }

        //Converts a grade to its equivalent gpa value by looking at the grade conversion data
        function convertGradeToGPA(grade, selectedGradeConversion, selectedGradeConversionKey) { //third parameter is optional
            if (typeof selectedGradeConversionKey !== 'undefined' && selectedGradeConversionKey && selectedGradeConversionKey === 'gpa') { //if input is gpa return the type
                
                return grade;
            } else {
                //formatting the input grades
                if (selectedGradeConversion.type === "number") {
                    grade = Math.round(grade);
                }

                for (var i = 0; i < selectedGradeConversion.gpaConversion.length; i++) { //iterate through all gpa values in grade conversion table
                    if (selectedGradeConversion.type === 'number') {
                        if (grade >= selectedGradeConversion.gpaConversion[i].min && grade <= selectedGradeConversion.gpaConversion[i].max) { //check if grade is within max and min range, if so return selected gpa value
                            
                            return selectedGradeConversion.gpaConversion[i].value;
                        }
                    } else if (selectedGradeConversion.type === "letter") {
                        if (selectedGradeConversion.gpaConversion[i].letters.indexOf(grade) > -1) { //check if grade exists in the "letters" array
                            
                            return selectedGradeConversion.gpaConversion[i].value;
                        }
                    } else {
                        console.error('Invalid grade conversion type from dataset');
                    }
                }
            }
        }
        /*Converts a gpa to the equivalient grade. If its like a percentage where a range of percentages equal to a single
          gpa, it will take the average of those percentages. If the input is like 12-point where is point is equivalent
          to a single gpa, it will take the average of min and max and so it will still equal to the grade
          If the output grade is letter, it will pick the maximum gpa thats less than the input grade
        */
        function convertGPAToGrade(gpa, selectedGradeConversion, selectedGradeConversionKey) {
            if (typeof selectedGradeConversionKey !== 'undefined' && selectedGradeConversionKey && selectedGradeConversionKey === 'gpa') { //if input is gpa return the type
                
                return gpa;
            } else {
                var maximumGPA = 0;
                var i=0;
                if (selectedGradeConversion.type === 'letter') {
                    //finds the maximum gpa that corresponds to the input gpa (eg. 3.83.  Highest gpa would be 3.7 and thus a A-)
                    for (i = 0; i < selectedGradeConversion.gpaConversion.length; i++) {
                        if (gpa >= selectedGradeConversion.gpaConversion[i].value && maximumGPA < selectedGradeConversion.gpaConversion[i].value) {
                            maximumGPA = selectedGradeConversion.gpaConversion[i].value;
                        }
                    }
                    for (i = 0; i < selectedGradeConversion.gpaConversion.length; i++) { //convert the maximum gpa back to its letter grade equivalent
                        if (selectedGradeConversion.gpaConversion[i].value === maximumGPA) { 
                            return selectedGradeConversion.gpaConversion[i].letters[0]; //return the first letter in the letters array
                        }
                    }
                } else if (selectedGradeConversion.type === 'number') {
                    //finds the maximum gpa that corresponds to the input gpa (eg. 3.83.  Highest gpa would be 3.7 and thus a A-)
                    for (i = 0; i < selectedGradeConversion.gpaConversion.length; i++) {
                        if (gpa >= selectedGradeConversion.gpaConversion[i].value && maximumGPA < selectedGradeConversion.gpaConversion[i].value) {
                            maximumGPA = selectedGradeConversion.gpaConversion[i].value;
                        }
                    }
                    
                    for (i = 0; i < selectedGradeConversion.gpaConversion.length; i++) { //convert the maximum gpa back to its letter grade equivalent
                        if (selectedGradeConversion.gpaConversion[i].value === maximumGPA) {
                            return (selectedGradeConversion.gpaConversion[i].min+selectedGradeConversion.gpaConversion[i].max)/2; //return the average percentage for that gpa
                        }
                    }
                } else {
                    console.error('Invalid grade conversion type from dataset');
                }
            }

        }

        //does the final devision between the totalGrade and totalCredit to get the resulting grades for each output type
        function calculateFinalResult(selectedUniversity) {
            for (var outputGradeKey in Results) {
                if (Results.hasOwnProperty(outputGradeKey)) {
                    if (Results[outputGradeKey].type === "number") {
                        var result = Results[outputGradeKey].totalGrade / Results[outputGradeKey].totalCredits; //does the devision
                        result = Math.round(result * 100) / 100; //rounds to 2 decimal places
                        Results[outputGradeKey].result = result || 0;
                    } else if (Results[outputGradeKey].type === "letter") {
                        var finalGPA = Results[outputGradeKey].totalGrade / Results[outputGradeKey].totalCredits;
                        Results[outputGradeKey].result = convertGPAToGrade(finalGPA, selectedUniversity.gradeConversions[outputGradeKey]) || ''; //converts the finalGPA to its letter grade equivalent
                    } else {
                        console.error('Wrong output grade conversion type in results. Must be either letter or number');
                    }
                }
            }
        }
        return function(university) {
            if(!university.selected || !university.selectedGradeInput){ //if the university or grade conversion was not picked
                return;
            }
            var input_grades = [];
            var selectedUniversity = university.selected.value;
            var selectedGradeConversionKey = university.selectedGradeInput;
            var selectedGradeConversion = selectedUniversity.gradeConversions[selectedGradeConversionKey];
            var type = selectedGradeConversion.type;

            //setup input grades
            filterGrades(input_grades, selectedGradeConversion);

            resetResults(); //resets results
            for (var i = 0; i < input_grades.length; i++) { //iterate through all valid grades
                for (var gradeConversionKey in selectedUniversity.gradeConversions) { //iterate through all grade conversions
                    if (selectedUniversity.gradeConversions.hasOwnProperty(gradeConversionKey)) {
                        var outputGradeConversion = selectedUniversity.gradeConversions[gradeConversionKey]; //the grade conversion type to convert to
                        if (university.selectedGradeInput === gradeConversionKey && type === "number") { //if the input grade is the same as the output grade and is number, no conversion needed
                            Results[university.selectedGradeInput].totalGrade += input_grades[i].value * input_grades[i].creditWeight;
                            Results[university.selectedGradeInput].totalCredits += input_grades[i].creditWeight;
                        } else {
                            var convertedGrade;
                            if (outputGradeConversion.type === "letter") { //do a gpa conversion, calculate cumulitive gpa, the convert to letter grade since we cant add up letter grades
                                convertedGrade=convertGradeToGPA(input_grades[i].value, selectedGradeConversion, selectedGradeConversionKey);
                                if(convertedGrade!==NaN){
                                    Results[gradeConversionKey].totalGrade += convertedGrade * input_grades[i].creditWeight;
                                    Results[gradeConversionKey].totalCredits += input_grades[i].creditWeight;
                                }
                            } else if (outputGradeConversion.type === "number") { //do a gpa conversion first and convert to the the output grade (ie. Percentage -> GPA -> 12-Point)
                                convertedGrade= convertGPAToGrade(convertGradeToGPA(input_grades[i].value, selectedGradeConversion, selectedGradeConversionKey), outputGradeConversion,gradeConversionKey);
                                if(convertedGrade!==NaN){
                                    Results[gradeConversionKey].totalGrade += convertedGrade* input_grades[i].creditWeight;
                                    Results[gradeConversionKey].totalCredits += input_grades[i].creditWeight;
                                }
                            } else {
                                console.error('Grade conversions types can either be letter or number');
                            }
                        }
                    }
                }
            }
            calculateFinalResult(selectedUniversity); //do the final devision
        };
    }
]);