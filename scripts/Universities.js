angular.module('Universities', [])

.factory('UniversityList', function() {
  var gpa = {
    name: "GPA",
    example: "2.1, 4.0",
    type: "number",
    min: 0,
    max: 4
  };

  var commonPercentage1 = {
    name: "Percentage",
    example: "75%, 67%",
    type: "number",
    min: 0,
    max: 100,
    gpaConversion: [{
      value: 4,
      min: 89.5, //90-100
      max: 100
    }, {
      value: 3.9,
      min: 84.5, //85-89
      max: 89.5
    }, {
      value: 3.7,
      min: 79.5, //80-84
      max: 84.5
    }, {
      value: 3.3,
      min: 76.5, //77-79
      max: 79.5
    }, {
      value: 3,
      min: 72.5, //73-76
      max: 76.5
    }, {
      value: 2.7,
      min: 69.5, //70-72
      max: 72.5
    }, {
      value: 2.3,
      min: 66.5, //67-69
      max: 69.5
    }, {
      value: 2,
      min: 62.5, //63-66
      max: 66.5
    }, {
      value: 1.7,
      min: 59.5, //60-62
      max: 62.5
    }, {
      value: 1.3,
      min: 56.5, //57-59
      max: 59.5
    }, {
      value: 1,
      min: 52.5, //53-56
      max: 56.5
    }, {
      value: 0.7,
      min: 49.5, //50-52
      max: 52.5
    }, {
      value: 0,
      min: 0, //0-49
      max: 49.5
    }]
  };
  var commonLetter1 = {
    name: "Letter",
    example: "B, A+",
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
  };

  var common12Point1 = {
    name: "12-Point",
    example: "6, 11.5",
    min: 0,
    max: 12,
    type: "number",
    gpaConversion: [{
      value: 4,
      min: 11.5, //12
      max: 12
    }, {
      value: 3.9,
      min: 10.5, //11
      max: 11.5
    }, {
      value: 3.7,
      min: 9.5, //10
      max: 10.5
    }, {
      value: 3.3,
      min: 8.5, //9
      max: 9.5
    }, {
      value: 3,
      min: 7.5, //8
      max: 8.5
    }, {
      value: 2.7,
      min: 6.5, //7
      max: 7.5
    }, {
      value: 2.3,
      min: 5.5, //6
      max: 6.5
    }, {
      value: 2,
      min: 4.5, //5
      max: 5.5
    }, {
      value: 1.7,
      min: 3.5, //4
      max: 4.5
    }, {
      value: 1.3,
      min: 2.5, //3
      max: 3.5
    }, {
      value: 1,
      min: 1.5, //2
      max: 2.5
    }, {
      value: 0.7,
      min: 0.5, //1
      max: 1.5
    }, {
      value: 0,
      min: 0, //0
      max: 0.5
    }]
  };

  return {
    /*Based from:
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
        "percentage": commonPercentage1,
        "letter": commonLetter1
      }
    },
    /*Based from:
    https://www.utsc.utoronto.ca/aacc/sites/utsc.utoronto.ca.aacc/files/tipsheets/Academic_Advising_Tipsheets/howtocalculateyourGPA.pdf
*/
    universityoftoronto: {
      name: 'University Of Toronto',
      location: {
        city: "Toronto",
        state: "Ontario",
        country: "Canada"
      },
      commonCreditWeights: [0, 0.5, 1],
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
            min: 84.5, //85-100
            max: 100
          }, {
            value: 3.7,
            min: 79.5, //80-84
            max: 84.5
          }, {
            value: 3.3,
            min: 76.5, //77-79
            max: 79.5
          }, {
            value: 3,
            min: 72.5, //73-76
            max: 76.5
          }, {
            value: 2.7,
            min: 69.5, //70-72
            max: 72.5
          }, {
            value: 2.3,
            min: 66.5, //67-69
            max: 69.5
          }, {
            value: 2,
            min: 62.5, //63-66
            max: 66.5
          }, {
            value: 1.7,
            min: 59.5, //60-62
            max: 62.5
          }, {
            value: 1.3,
            min: 56.5, //57-59
            max: 59.5
          }, {
            value: 1,
            min: 52.5, //53-56
            max: 56.5
          }, {
            value: 0.7,
            min: 49.5, //50-52
            max: 52.5
          }, {
            value: 0,
            min: 0, //0-49
            max: 49.5
          }]
        },
        "letter": {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+', 'A']
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
            letters: ['F', 'E', 'NC']
          }]
        }
      }
    },
    /*Based from:
   http://laps.yorku.ca/student-resources/gpa-calculator/
   ^^ That calculator isnt accurate as it treats E as a 0 in a 9 point conversion even though the chart on the same website lists it should be a 1
   Also used http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html for gpa conversions
   and http://calendars.registrar.yorku.ca/2013-2014/academic/grades/ for percentage conversions
*/
    yorkuniversity: {
      name: 'York University',
      location: {
        city: "Toronto",
        state: "Ontario",
        country: "Canada"
      },
      commonCreditWeights: [0, 1, 1.5, 2, 3, 4, 5, 6, 9, 12],
      gradeConversions: {
        gpa: gpa,
        "letter": {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          }, {
            value: 3.8,
            letters: ['A']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          }, {
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1.3,
            letters: ['D+']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0.7,
            letters: ['E']
          }, {
            value: 0,
            letters: ['F', 'NC']
          }]
        },
        "point9": {
          name: "9-Point",
          example: "5, 9",
          type: "number",
          min: 0,
          max: 9,
          gpaConversion: [{
            value: 4,
            min: 8.5,//9
            max: 9
          }, {
            value: 3.8,
            min: 7.5,//8
            max: 8.5
          }, {
            value: 3.3,
            min: 6.5,//7
            max: 7.5
          }, {
            value: 3,
            min: 5.5,//6
            max: 6.5
          }, {
            value: 2.3,
            min: 4.5,//5
            max: 5.5
          }, {
            value: 2,
            min: 3.5,//4
            max: 4.5
          }, {
            value: 1.3,
            min: 2.5,//3
            max: 3.5
          }, {
            value: 1,
            min: 1.5, //2
            max: 2.5
          }, {
            value: 0.7,
            min: 0.5, //1
            max: 1.5
          }, {
            value: 0,
            min: 0, //0
            max: 0.5
          }]
        },
        "percentage": {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 89.5, //90-100
            max: 100.5
          }, {
            value: 3.8,
            min: 79.5, //80-89
            max: 89.5
          }, {
            value: 3.3,
            min: 74.5, //75-79
            max: 79.5
          }, {
            value: 3,
            min: 69.5, //70-74
            max: 74.5
          }, {
            value: 2.3,
            min: 64.5, //65-69
            max: 69.5
          }, {
            value: 2,
            min: 59.5, //60-64
            max: 64.5
          }, {
            value: 1.3,
            min: 54.5, //55-59
            max: 59.5
          }, {
            value: 1,
            min: 49.5, //50-54
            max: 54.5
          }, {
            value: 0.7,
            min: 39.5, //40-49
            max: 49.5
          }, {
            value: 0,
            min: 0, //0-39
            max: 39.5
          }]
        }
      }
    },
    /*Based from:
    http://www.ryerson.ca/studentguide/academics/grades--gpa--academic-standing.html
    and
    http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html
*/
    ryersonuniversity: {
      name: 'Ryerson University',
      location: {
        city: "Toronto",
        state: "Ontario",
        country: "Canada"
      },
      commonCreditWeights: [0, 0.5, 1, 2],
      gradeConversions: {
        gpa: gpa,
        "percentage": commonPercentage1,
        "letter": commonLetter1,
        "gpa4.3": {
          name: "4.33 GPA",
          example: "3.7, 4.33",
          type: "number",
          min: 0,
          max: 4.33,
          gpaConversion: [{
            value: 4,
            min: 4.165, //aka 4.33
            max: 4.33
          }, {
            value: 3.9,
            min: 3.835, //aka 4.0
            max: 4.165
          }, {
            value: 3.7,
            min: 3.5, //aka 3.67
            max: 3.835
          }, {
            value: 3.3,
            min: 3.165, //aka 3.33
            max: 3.5
          }, {
            value: 3,
            min: 2.835, //aka 3.0
            max: 3.165
          }, {
            value: 2.7,
            min: 2.5, //aka 2.67
            max: 2.835
          }, {
            value: 2.3,
            min: 2.165, //aka 2.33
            max: 2.5
          }, {
            value: 2,
            min: 1.835, //aka 2.0
            max: 2.165
          }, {
            value: 1.7,
            min: 1.5, //aka 1.67
            max: 1.835
          }, {
            value: 1.3,
            min: 1.165, //aka 1.33
            max: 1.5
          }, {
            value: 1,
            min: 0.835, //aka 1.0
            max: 1.165
          }, {
            value: 0.7,
            min: 0.335,//aka 0.67
            max: 0.835
          }, {
            value: 0,
            min: 0, //aka 0
            max: 0.335
          }]
        }
      }
    },
    /*Retrieved from http://legacy.wlu.ca/calendars/section.php?cal=1&s=505&sp=1723&ss=2151&y=53
and http://legacy.wlu.ca/page.php?grp_id=1402&p=12614
*/
    wilfridlaurieruniversity: {
      name: 'Wilfred Laurier University',
      location: {
        city: "Waterloo",
        state: "Ontario",
        country: "Canada"
      },
      commonCreditWeights: [0, 0.25, 0.5, 1],
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
            min: 89.5,//90-100
            max: 100
          }, {
            value: 3.9,
            min: 84.5, //85-89
            max: 89.5
          }, {
            value: 3.7,
            min: 79.5,//80-84
            max: 84.5
          }, {
            value: 3.3,
            min: 76.5,//77-79
            max: 79.5
          }, {
            value: 3,
            min: 72.5,//73-76
            max: 76.5
          }, {
            value: 2.7,
            min: 69.5,//70-72
            max: 72.5
          }, {
            value: 2.3,
            min: 66.5,//67-69
            max: 69.5
          }, {
            value: 2,
            min: 62.5, //63-66
            max: 66.5
          }, {
            value: 1.7,
            min: 59.5, //60-62
            max: 62.5
          }, {
            value: 1.3,
            min: 56.5, //57-59
            max: 59.5
          }, {
            value: 1,
            min: 52.5, //53-56
            max: 56.5
          }, {
            value: 0.7,
            min: 49.5, //50-52
            max: 52.5
          }, {
            value: 0,
            min: 0, //0-49
            max: 49.5
          }]
        },
        "letter": {
          name: "Letter",
          example: "B, A+",
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
            letters: ['F', 'E', 'XF', 'DR']
          }]
        },
        "point12": common12Point1
      }
    },
    /*
    Retrived from:
      http://www.senecacollege.ca/registrar/records/senecatranscript.html
      and
      http://www.senecacollege.ca/registrar/records/gpa.html
    */
    senecacollege: {
      name: 'Seneca College',
      location: {
        city: "Toronto",
        state: "Ontario",
        country: "Canada"
      },
      commonCreditWeights: [0, 0.5, 1, 5],
      gradeConversions: {
        gpa: gpa,
        "letter": {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+', 'A']
          }, {
            value: 3.5,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          }, {
            value: 2.5,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1.5,
            letters: ['D+']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['F', 'DNA']
          }]
        },
        "percentage": {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 79.5, //80-100
            max: 100
          }, {
            value: 3.5,
            min: 74.5, //75-79
            max: 79.5
          }, {
            value: 3,
            min: 69.5, //70-74
            max: 74.5
          }, {
            value: 2.5,
            min: 64.5,//65-69
            max: 69.5
          }, {
            value: 2,
            min: 59.5,//60-64
            max: 64.5
          }, {
            value: 1.5,
            min: 54.5,//55-59
            max: 59.5
          }, {
            value: 1,
            min: 49.5,//50-54
            max: 54.5
          }, {
            value: 0,
            min: 0,//0-49
            max: 49.5
          }]
        }
      }
    },
    /*Based from: http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html
    and https://iss.mcmaster.ca/incoming-exchange-students/academics-undergraduate/grading-system.html
    */
    mcmasteruniversity: {
      name: 'McMaster University',
      location: {
        city: "Hamilton",
        state: "Ontario",
        country: "Canada"
      },
      commonCreditWeights: [0, 2, 3, 4, 5, 6, 8, 9, 12],
      gradeConversions: {
        gpa: gpa,
        percentage: commonPercentage1,
        "letter": commonLetter1,
        "point12":common12Point1
      }
    }
  };
});