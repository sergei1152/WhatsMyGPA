angular.module('Universities',[])

.factory('UniversityList',function(){
	return {
		universityofwaterloo:{
			name: 'University Of Waterloo',
			location:{
				city: "Waterloo",
				state: "Ontario",
				country: "Canada"
			},
			commonCreditWeights:[0.25,0.5,0.75,0.80,1],
			percentageGradeToGPA: { //assumes a 4.0 GPA system
				"4.0": {
					value: 4,
					min: 90,
					max: 100
				},
				"3.90":{
					value: 3.9,
					min: 85,
					max: 89
				},
				"3.70":{
					value: 3.7,
					min: 80,
					max: 84
				},
				"3.30":{
					value: 3.3,
					min: 77,
					max: 79
				},
				"3.00":{
					value: 3,
					min: 73,
					max: 76
				},
				"2.70":{
					value: 2.7,
					min: 70,
					max: 72
				},
				"2.30":{
					value: 2.3,
					min: 67,
					max: 69
				},
				"2.00":{
					value: 2,
					min: 63,
					max: 66
				},
				"1.70":{
					value: 1.7,
					min: 60,
					max: 62
				},
				"1.30":{
					value: 1.3,
					min: 57,
					max: 59
				},
				"1.00":{
					value: 1,
					min: 53,
					max: 55
				},
				"0.70":{
					value:0.7 ,
					min: 50,
					max: 52
				},
				"0.00":{
					value: 0,
					min: 0,
					max: 49
				}
			},
			letterGradeToGPA:{
				'4.0':{
					value: 4,
					letters: ['A+']
				},
				'3.90':{
					value: 3.9,
					letters:['A']
				},
				'3.70':{
					value: 3.7,
					letters:['A-']
				},
				'3.30':{
					value: 3.3,
					letters:['B+']
				},
				'3.00':{
					value: 3,
					letters:['B']
				},
				'2.70':{
					value: 2.7,
					letters:['B-']
				},
				'2.30':{
					value: 2.3,
					letters:['C+']
				},
				'2.00':{
					value: 2,
					letters:['C']
				},
				'1.70':{
					value: 1.7,
					letters:['C-']
				},
				'1.30':{
					value: 1.3,
					letters:['D+']
				},
				'1.00':{
					value: 1,
					letters:['D']
				},
				'0.70':{
					value: 0.7,
					letters:['D-']
				},
				'0.00':{
					value: 0,
					letters:['E','F']
				}
			},
			customGradeToGPA:false
		},
		universityoftoronto:{
			name: 'University Of Toronto',
			location:{
				city: "Toronto",
				state: "Ontario",
				country: "Canada"
			},
			commonCreditWeights:[0.25,0.5,0.75,0.80,1],
			percentageGradeToGPA: { //assumes a 4.0 GPA system
				"4.0": {
					value: 4,
					min: 90,
					max: 100
				},
				"3.90":{
					value: 3.9,
					min: 85,
					max: 89
				},
				"3.70":{
					value: 3.7,
					min: 80,
					max: 84
				},
				"3.30":{
					value: 3.3,
					min: 77,
					max: 79
				},
				"3.00":{
					value: 3,
					min: 73,
					max: 76
				},
				"2.70":{
					value: 2.7,
					min: 70,
					max: 72
				},
				"2.30":{
					value: 2.3,
					min: 67,
					max: 69
				},
				"2.00":{
					value: 2,
					min: 63,
					max: 66
				},
				"1.70":{
					value: 1.7,
					min: 60,
					max: 62
				},
				"1.30":{
					value: 1.3,
					min: 57,
					max: 59
				},
				"1.00":{
					value: 1,
					min: 53,
					max: 55
				},
				"0.70":{
					value:0.7 ,
					min: 50,
					max: 52
				},
				"0.00":{
					value: 0,
					min: 0,
					max: 49
				}
			},
			letterGradeToGPA:{
				'4.0':{
					value: 4,
					letters: ['A+']
				},
				'3.90':{
					value: 3.9,
					letters:['A']
				},
				'3.70':{
					value: 3.7,
					letters:['A-']
				},
				'3.30':{
					value: 3.3,
					letters:['B+']
				},
				'3.00':{
					value: 3,
					letters:['B']
				},
				'2.70':{
					value: 2.7,
					letters:['B-']
				},
				'2.30':{
					value: 2.3,
					letters:['C+']
				},
				'2.00':{
					value: 2,
					letters:['C']
				},
				'1.70':{
					value: 1.7,
					letters:['C-']
				},
				'1.30':{
					value: 1.3,
					letters:['D+']
				},
				'1.00':{
					value: 1,
					letters:['D']
				},
				'0.70':{
					value: 0.7,
					letters:['D-']
				},
				'0.00':{
					value: 0,
					letters:['E','F']
				}
			},
			customGradeToGPA:false
		}
	};
});