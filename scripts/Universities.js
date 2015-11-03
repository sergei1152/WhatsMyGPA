angular.module('Universities', [])

.factory('UniversityList', function() {
    var gpa={
        name: "GPA",
        example: "2.1, 4.0",
        type: "number",
        min: 0,
        max: 4
    };

    return {
        /*Retrieved from:
            http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html
        */
        universityofwaterloo: {
            name: 'University Of Waterloo',
            location: {
                city: "Waterloo",
                state: "Ontario",
                country: "Canada"
            },
            commonCreditWeights: [0.25, 0.5, 0.75, 0.80, 1],
            gradeConversions: {
                gpa: gpa,
            	"percentage": {
                    name: "Percentage",
                    example: "75%, 67%",
                    type: "number",
                    min: 0,
                    max: 100,
                    gpaConversion: [{
                        value: 4,
                        min: 90,
                        max: 100
                    }, {
                        value: 3.9,
                        min: 85,
                        max: 89
                    }, {
                        value: 3.7,
                        min: 80,
                        max: 84
                    }, {
                        value: 3.3,
                        min: 77,
                        max: 79
                    }, {
                        value: 3,
                        min: 73,
                        max: 76
                    }, {
                        value: 2.7,
                        min: 70,
                        max: 72
                    }, {
                        value: 2.3,
                        min: 67,
                        max: 69
                    }, {
                        value: 2,
                        min: 63,
                        max: 66
                    }, {
                        value: 1.7,
                        min: 60,
                        max: 62
                    }, {
                        value: 1.3,
                        min: 57,
                        max: 59
                    }, {
                        value: 1,
                        min: 53,
                        max: 55
                    }, {
                        value: 0.7,
                        min: 50,
                        max: 52
                    }, {
                        value: 0,
                        min: 0,
                        max: 49
                    }]
                }, 
                "letter":{
                    name: "Letter",
                    example:"B, A+",
                    type: "letter",
                    gpaConversion: [{
                        value: 4,
                        letters: ['A+']
                    }, {
                        value: 3.9,
                        letters: ['A']
                    }, {
                        value: 3.7,
                        letters: ['A-']
                    }, {
                        value: 3.3,
                        letters: ['B+']
                    }, {
                        value: 3,
                        letters: ['B']
                    }, {
                        value: 2.7,
                        letters: ['B-']
                    }, {
                        value: 2.3,
                        letters: ['C+']
                    }, {
                        value: 2,
                        letters: ['C']
                    }, {
                        value: 1.7,
                        letters: ['C-']
                    }, {
                        value: 1.3,
                        letters: ['D+']
                    }, {
                        value: 1,
                        letters: ['D']
                    }, {
                        value: 0.7,
                        letters: ['D-']
                    }, {
                        value: 0,
                        letters: ['E', 'F']
                    }]
                }
            }
        },
        /*Retrieved from:
            https://www.utsc.utoronto.ca/aacc/sites/utsc.utoronto.ca.aacc/files/tipsheets/Academic_Advising_Tipsheets/howtocalculateyourGPA.pdf
        */
        universityoftoronto: {
            name: 'University Of Toronto',
            location: {
                city: "Toronto",
                state: "Ontario",
                country: "Canada"
            },
            commonCreditWeights: [0.5,1],
           	gradeConversions: {
                gpa: gpa,
            	"percentage": {
                    name: "Percentage",
                    example: "75%, 67%",
                    type: "number",
                    min: 0,
                    max: 100,
                    gpaConversion: [{
                        value: 4,
                        min: 85,
                        max: 100
                    }, {
                        value: 3.7,
                        min: 80,
                        max: 84
                    }, {
                        value: 3.3,
                        min: 77,
                        max: 79
                    }, {
                        value: 3,
                        min: 73,
                        max: 76
                    }, {
                        value: 2.7,
                        min: 70,
                        max: 72
                    }, {
                        value: 2.3,
                        min: 67,
                        max: 69
                    }, {
                        value: 2,
                        min: 63,
                        max: 66
                    }, {
                        value: 1.7,
                        min: 60,
                        max: 62
                    }, {
                        value: 1.3,
                        min: 57,
                        max: 59
                    }, {
                        value: 1,
                        min: 53,
                        max: 56
                    }, {
                        value: 0.7,
                        min: 50,
                        max: 52
                    }, {
                        value: 0,
                        min: 0,
                        max: 49
                    }]
                }, 
                "letter":{
                    name: "Letter",
                    example:"B, A+",
                    type: "letter",
                    gpaConversion: [{
                        value: 4,
                        letters: ['A+','A']
                    }, {
                        value: 3.7,
                        letters: ['A-']
                    }, {
                        value: 3.3,
                        letters: ['B+']
                    }, {
                        value: 3,
                        letters: ['B']
                    }, {
                        value: 2.7,
                        letters: ['B-']
                    }, {
                        value: 2.3,
                        letters: ['C+']
                    }, {
                        value: 2,
                        letters: ['C']
                    }, {
                        value: 1.7,
                        letters: ['C-']
                    }, {
                        value: 1.3,
                        letters: ['D+']
                    }, {
                        value: 1,
                        letters: ['D']
                    }, {
                        value: 0.7,
                        letters: ['D-']
                    }, {
                        value: 0,
                        letters: ['E', 'NC']
                    }]
                }
            }
        }
    };
});