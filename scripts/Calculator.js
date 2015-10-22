angular.module('Calculator', ['ReportCard'])

.factory('Regex', function() {
    return {
        letterGradeRegex: /^[a-zA-Z-+]{1,3}$/,
        numberGradeRegex: /^[0-9.]{1,5}$/,
        creditWeightRegex: /^[0-9.]{1,4}$/
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
                            grades.push({
                            	value: grade.value.toUpperCase(),
                            	creditWeight: Number(grade.creditWeight)
                            });
                        }
                    } else if (type === "number") {
                        if (grade && grade.value && grade.creditWeight && grade.value.match(Regex.numberGradeRegex) && grade.creditWeight.match(Regex.creditWeightRegex)) {
                            grades.push({
                            	value: Number(grade.value),
                            	creditWeight: Number(grade.creditWeight)
                            });
                        }
                    }
                }
            }
        }
        //formats the results data structure for display
        function setUpResults(Results,selectedUniversity) {
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
                	Results[gradeConversion]=conversion;
                }
            }
            return Results;
        }
        //Converts a grade to its equivalent gpa value by looking at the grade conversion data
        function convertGradeToGPA(grade, selectedGradeConversion){
        	//formatting the input grades
        	 if(selectedGradeConversion.type==="number"){
        	 	grade=Math.round(Number(grade));
        	 }

        	 for(var i=0;i<selectedGradeConversion.gpaConversion.length;i++){
        	 	if(selectedGradeConversion.type==='number'){
        	 		if(grade>=selectedGradeConversion.gpaConversion[i].min && grade<=selectedGradeConversion.gpaConversion[i].max){
        	 			return selectedGradeConversion.gpaConversion[i].value;
        	 		}
        	 	}
        	 	else if (selectedGradeConversion.type==="letter"){
        	 		if(selectedGradeConversion.gpaConversion[i].letters.indexOf(grade)>-1){
        	 			return selectedGradeConversion.gpaConversion[i].value;
        	 		}
        	 	}
        	 	else{
        	 		console.error('Invalid grade conversion type from dataset');
        	 	}
        	 }
        }
        //converts a gpa to the equivalient grade. If its like a percentage where a range of percentages equal to a single
        //gpa, it will take the average of those percentages. If the input is like 12-point where is point is equivalent
        //to a single gpa, it will take the average of min and max and so it will still equal to the grade
        function convertGPAToGrade(gpa, selectedGradeConversion){
        	for(var i=0;i<selectedGradeConversion.gpaConversion.length;i++){
        		if(selectedGradeConversion.gpaConversion[i].value===gpa){
        			if(selectedGradeConversion.type==="number"){
        				return (selectedGradeConversion.gpaConversion[i].min+selectedGradeConversion.gpaConversion[i].max)/2;
        			}
        			else if(selectedGradeConversion.type==="letter"){
        				return selectedGradeConversion.gpaConversion[i].letters[0];
        			}
        			else{
        				console.error('Invalid grade conversion type from dataset');
        			}
        		}
        	}
        }
        function calculateFinalResult(Results){
        	for(var outputGradeKey in Results){
        		if(Results.hasOwnProperty(outputGradeKey)){
        			Results[outputGradeKey].result=Results[outputGradeKey].totalGrade/Results[outputGradeKey].totalCredits;
        		}
        	}
        }
        return function(university) {
            var input_grades = [];
            var output_grades = [];
            var selectedUniversity = university.selected.value;
            var selectedGradeConversion = selectedUniversity.gradeConversions[university.selectedGradeInput];
            var type = selectedGradeConversion.type;

            //setup input grades
            filterGrades(input_grades, type);

            //set up results
            setUpResults(Results,selectedUniversity);
            //if number, calculate its respective number and calculate gpa and convert backwards to everything else
            //if letter, simply calculate gpa, then convert backwards to everything else
            for (var i = 0; i < input_grades.length; i++) {
                if (type === "number") { //convert the input grade to gpa and then to output grade, unless the output grade is same as the input grade
                   	for (var gradeConversionKey in selectedUniversity.gradeConversions) {
                   		var outputGradeConversion=selectedUniversity.gradeConversions[gradeConversionKey]; //the output grade conversion type
	                	if (selectedUniversity.gradeConversions.hasOwnProperty(gradeConversionKey)) {
	                       if(university.selectedGradeInput===gradeConversionKey){ //if the input grade is the same as the output grade, no conversion needed
	                       		Results[university.selectedGradeInput].totalGrade+=input_grades[i].value*input_grades[i].creditWeight;
	                       		Results[university.selectedGradeInput].totalCredits+=input_grades[i].creditWeight;
	                       }
	                       else{ //else do a gpa conversion first and convert to the the output grade (ie. Percentage -> GPA -> 12-Point)
	                       		Results[gradeConversionKey].totalGrade+=convertGPAToGrade(convertGradeToGPA(input_grades[i].value,selectedGradeConversion),outputGradeConversion)*input_grades[i].creditWeight;
	                       		Results[gradeConversionKey].totalCredits+=input_grades[i].creditWeight;
	                       }
	                    }
	                }
                }//TODO: WHAT HAPPENS WHEN THE OUTPUT TYPE IS A LETTER
                else if (type==="letter"){ 
                	
                }
            }

            calculateFinalResult(Results);
            console.log(Results);
        };
    }
]);