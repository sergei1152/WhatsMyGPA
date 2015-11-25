angular.module('Validator',[])

//Regex used throughout the calculator
.factory('Regex', function() {
    return {
        letterGradeRegex: /^[a-zA-Z-+*]{1,3}$/,
        numberGradeRegex: /^[0-9.]{1,5}$/,
        creditWeightRegex: /^[0-9.]{1,4}$/
    };
})

.factory('Validator',['Regex',function(Regex){
	//checks validity of a grade using the predefined regex as well as the currently selected grade conversion
    var validLetterGrades=[];
    var isValidGrade = function(value, selectedGradeConversion) {
        if (selectedGradeConversion.type === 'letter') {
            if (value && value.match(Regex.letterGradeRegex)) { //if its a valid letter
                if(validLetterGrades.indexOf(value.toUpperCase())>-1){ //if that letter exists in the gpa conversion scale
                    return true;
                }  
            } 
            return false;
        } else if (selectedGradeConversion.type === 'number') {
            if (value && value.match(Regex.numberGradeRegex)) { //check if its a valid number
                var valueNumber=Number(value);
                if(value>=selectedGradeConversion.min && value<=selectedGradeConversion.max){ //check if its within a valid range basd on the gpa conversion scale
                    return true;
                }
            } 
            return false;
        } else {
            console.error('Wrong type property for selectedGradeConversion');
        }
    };

    var isValidCredit=function(value){
        if (value && value.match(Regex.creditWeightRegex)) {
            return true;
        } 
        return false;
    };

    var buildLetterIndex=function(selectedGradeConversion){ //builds the letter index used for form validation of letter grades
        if(selectedGradeConversion && selectedGradeConversion.type==='letter'){
            validLetterGrades=[];
            for(var i=0;i<selectedGradeConversion.gpaConversion.length;i++){
                for(var j=0;j<selectedGradeConversion.gpaConversion[i].letters.length;j++){
                    validLetterGrades.push(selectedGradeConversion.gpaConversion[i].letters[j]);
                }
            }
        }
    };

    return {
    	isValidGrade: isValidGrade,
        isValidCredit: isValidCredit,
        buildLetterIndex:buildLetterIndex
    };
}]);