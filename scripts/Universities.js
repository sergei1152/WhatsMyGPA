angular.module('Universities', [])

.factory('UniversityList', function() {
    return {
        universityofwaterloo: {
            name: 'University Of Waterloo',
            location: {
                city: "Waterloo",
                state: "Ontario",
                country: "Canada"
            },
            commonCreditWeights: [0.25, 0.5, 0.75, 0.80, 1],
            gradeConversions: {
            	"percentage": {
                    name: "Percentage (eg. 75%)",
                    type: "number",
                    min_range: 0,
                    max_range: 100,
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
                    name: "Letter (eg. B, A+)",
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
        universityoftoronto: {
            name: 'University Of Toronto',
            location: {
                city: "Toronto",
                state: "Ontario",
                country: "Canada"
            },
            commonCreditWeights: [0.25, 0.5, 0.75, 0.80, 1],
           	gradeConversions: {
            	"percentage": {
                    name: "Percentage (eg. 75%)",
                    type: "number",
                    min_range: 0,
                    max_range: 100,
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
                    name: "Letter (eg. B, A+)",
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
        }
    };
});