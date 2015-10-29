angular.module('Validator',[])

//Regex used throughout the calculator
.factory('Regex', function() {
    return {
        letterGradeRegex: /^[a-zA-Z-+]{1,3}$/,
        numberGradeRegex: /^[0-9.]{1,5}$/,
        creditWeightRegex: /^[0-9.]{1,4}$/
    };
})

.factory('Validator',['Regex',function(Regex){
	//checks validity of a grade using the predefined regex
    var isValidGrade = function(value, selectedGradeConversion) {
        if (selectedGradeConversion.type === 'letter') {
            if (value.match(Regex.letterGradeRegex)) {
                return true;
            } else {
                return false;
            }
        } else if (selectedGradeConversion.type === 'number') {
            if (value.match(Regex.numberGradeRegex)) {
                return true;
            } else {
                return false;
            }
        } else {
            console.error('Wrong type property for selectedGradeConversion');
        }
    };

    var isValidCredit=function(value){
        if (value.match(Regex.creditWeightRegex)) {
            return true;
        } else {
            return false;
        }
    }

    return {
    	isValidGrade: isValidGrade,
        isValidCredit: isValidCredit
    };
}]);