angular.module('Universities', [])

.factory('UniversityList', function() {
  var gpa = {
    name: "4.0 GPA",
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
      min: 12,
      max: 12
    }, {
      value: 3.9,
      min: 11,
      max: 11
    }, {
      value: 3.7,
      min: 10,
      max: 10
    }, {
      value: 3.3,
      min: 9,
      max: 9
    }, {
      value: 3,
      min: 8,
      max: 8
    }, {
      value: 2.7,
      min: 7,
      max: 7
    }, {
      value: 2.3,
      min: 6,
      max: 6
    }, {
      value: 2,
      min: 5,
      max: 5
    }, {
      value: 1.7,
      min: 4,
      max: 4
    }, {
      value: 1.3,
      min: 3,
      max: 3
    }, {
      value: 1,
      min: 2,
      max: 2
    }, {
      value: 0.7,
      min: 1,
      max: 1
    }, {
      value: 0,
      min: 0,
      max: 0
    }]
  };

  var common433 = {
    name: "4.33 GPA",
    example: "3.7, 4.33",
    type: "number",
    min: 0,
    max: 4.33,
    gpaConversion: [{
      value: 4,
      min: 4.33,
      max: 4.33
    }, {
      value: 3.9,
      min: 4,
      max: 4
    }, {
      value: 3.7,
      min: 3.67,
      max: 3.67
    }, {
      value: 3.3,
      min: 3.33,
      max: 3.33
    }, {
      value: 3,
      min: 3,
      max: 3
    }, {
      value: 2.7,
      min: 2.67,
      max: 2.67
    }, {
      value: 2.3,
      min: 2.33,
      max: 2.33
    }, {
      value: 2,
      min: 2,
      max: 2
    }, {
      value: 1.7,
      min: 1.67,
      max: 1.67
    }, {
      value: 1.3,
      min: 1.33,
      max: 1.33
    }, {
      value: 1,
      min: 1,
      max: 1
    }, {
      value: 0.7,
      min: 0.67,
      max: 0.67
    }, {
      value: 0,
      min: 0,
      max: 0
    }]
  };

  var commonPercentage2={
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
  };

  var commonLetter2={
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
  };

  var common43={
    name: "4.3 GPA",
    example: "4.3, 3.8",
    type: "number",
    min: 0,
    max: 4.3,
    gpaConversion: [{
      value: 4,
      min: 4.3,
      max: 4.3
    }, {
      value: 3.9,
      min: 4,
      max: 4
    }, {
      value: 3.7,
      min: 3.7,
      max: 3.7
    }, {
      value: 3.3,
      min: 3.3,
      max: 3.3
    }, {
      value: 3,
      min: 3,
      max: 3
    }, {
      value: 2.7,
      min: 2.7,
      max: 2.7
    }, {
      value: 2.3,
      min: 2.3,
      max: 2.3
    }, {
      value: 2,
      min: 2,
      max: 2
    }, {
      value: 1.7,
      min: 1.7,
      max: 1.7
    }, {
      value: 1.3,
      min: 1.3,
      max: 1.3
    }, {
      value: 1,
      min: 1,
      max: 1
    }, {
      value: 0.7,
      min: 0.7,
      max: 0.7
    }, {
      value: 0,
      min: 0,
      max: 0
    }]
  };

  var common43_2={
    name: "4.3 GPA",
    example: "4.3, 3.8",
    type: "number",
    min: 0,
    max: 4.3,
    gpaConversion: [{
      value: 4,
      min: 4.3,
      max: 4.3
    }, {
      value: 3.9,
      min: 4,
      max: 4
    }, {
      value: 3.7,
      min: 3.7,
      max: 3.7
    }, {
      value: 3.3,
      min: 3.3,
      max: 3.3
    }, {
      value: 3,
      min: 3,
      max: 3
    }, {
      value: 2.7,
      min: 2.7,
      max: 2.7
    }, {
      value: 2.3,
      min: 2.3,
      max: 2.3
    }, {
      value: 2,
      min: 2,
      max: 2
    }, {
      value: 1.7,
      min: 1.7,
      max: 1.7
    }, {
      value: 1.3,
      min: 1.3,
      max: 1.3
    }, {
      value: 1,
      min: 1,
      max: 1
    }, {
      value: 0,
      min: 0,
      max: 0
    }]
  };

  var commonLetter3={
    name: "Letter",
    example: "B, A+",
    type: "letter",
    gpaConversion: [{
      value: 4,
      letters: ['A+','A*']
    }, {
      value: 3.9,
      letters: ['A']
    },{
      value: 3.7,
      letters: ['A-']
    }, {
      value: 3.3,
      letters: ['B+']
    }, {
      value: 3,
      letters: ['B']
    },{
      value: 2.7,
      letters: ['B-']
    },{
      value: 2.3,
      letters: ['C+']
    }, {
      value: 2,
      letters: ['C']
    },{
      value: 1.7,
      letters: ['C-']
    }, {
      value: 1.3,
      letters: ['D+']
    },{
      value: 1,
      letters: ['D']
    }, {
      value: 0,
      letters: ['F','E']
    }]
  };

  var common9={
    name: "9-Point",
    example: "5, 9",
    type: "number",
    min: 0,
    max: 9,
    gpaConversion: [{
      value: 4,
      min: 9,
      max: 9
    }, {
      value: 3.9,
      min: 8,
      max: 8
    }, {
      value: 3.7,
      min: 7,
      max: 7
    }, {
      value: 3.3,
      min: 6,
      max: 6
    }, {
      value: 3,
      min: 5,
      max: 5
    }, {
      value: 2.3,
      min: 4,
      max: 4
    }, {
      value: 1.3,
      min: 3,
      max: 3
    }, {
      value: 1,
      min: 2,
      max: 2
    }, {
      value: 0.7,
      min: 1,
      max: 1
    }, {
      value: 0,
      min: 0,
      max: 0
    }]
  };

  var commonLetter4 = {
    name: "Letter",
    example: "B, A+",
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
      value: 0,
      letters: ['E', 'F']
    }]
  };
  var commonPercentage4={
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
      min: 76,
      max: 79
    }, {
      value: 3,
      min: 73,
      max: 75
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
      min: 64,
      max: 66
    }, {
      value: 1.7,
      min: 60,
      max: 63
    }, {
      value: 1.3,
      min: 55,
      max: 59
    }, {
      value: 1,
      min: 50,
      max: 54
    }, {
      value: 0,
      min: 0,
      max: 49
    }]
  };
  var commonLetter5 = {
    name: "Letter",
    example: "B, A+",
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
    },{
      value: 0.7,
      letters: ['D-']
    }, {
      value: 0,
      letters: ['F']
    }]
  };
  var commonLetter6 = {
    name: "Letter",
    example: "B, A+",
    type: "letter",
    gpaConversion: [{
      value: 4,
      letters: ['A+']
    },{
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
      value: 1,
      letters: ['D']
    }, {
      value: 0,
      letters: ['F','E']
    }]
  };
  var common43_6={
    name: "4.3 GPA",
    example: "4.3, 3.8",
    type: "number",
    min: 0,
    max: 4.3,
    gpaConversion: [{
      value: 4,
      min: 4.3,
      max: 4.3
    }, {
      value: 3.9,
      min: 4,
      max: 4
    }, {
      value: 3.7,
      min: 3.7,
      max: 3.7
    }, {
      value: 3.3,
      min: 3.3,
      max: 3.3
    }, {
      value: 3,
      min: 3,
      max: 3
    }, {
      value: 2.7,
      min: 2.7,
      max: 2.7
    }, {
      value: 2.3,
      min: 2.3,
      max: 2.3
    }, {
      value: 2,
      min: 2,
      max: 2
    }, {
      value: 1.7,
      min: 1.7,
      max: 1.7
    }, {
      value: 1,
      min: 1,
      max: 1
    }, {
      value: 0,
      min: 0,
      max: 0
    }]
  };

  return {
    universityofwaterloo: {
      name: 'University of Waterloo',
      location: {
        city: "Waterloo",
        state: "Ontario",
        country: "CA"
      },
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
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
      name: 'University of Toronto (UFT)',
      location: {
        city: "Toronto",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [0, 0.5, 1],
      sources:[' http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html','https://www.utsc.utoronto.ca/aacc/sites/utsc.utoronto.ca.aacc/files/tipsheets/Academic_Advising_Tipsheets/howtocalculateyourGPA.pdf'],
      gradeConversions: {
        gpa: gpa,
        "percentage":commonPercentage2,
        "letter": commonLetter2
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
        country: "CA"
      },
      commonCreditWeights: [0, 1, 1.5, 2, 3, 4, 5, 6, 9, 12],
      sources:['http://laps.yorku.ca/student-resources/gpa-calculator/','http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html','http://calendars.registrar.yorku.ca/2013-2014/academic/grades/'],
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
            min: 9,
            max: 9
          }, {
            value: 3.8,
            min: 8,
            max: 8
          }, {
            value: 3.3,
            min: 7,
            max: 7
          }, {
            value: 3,
            min: 6,
            max: 6
          }, {
            value: 2.3,
            min: 5,
            max: 5
          }, {
            value: 2,
            min: 4,
            max: 4
          }, {
            value: 1.3,
            min: 3,
            max: 3
          }, {
            value: 1,
            min: 2,
            max: 2
          }, {
            value: 0.7,
            min: 1,
            max: 1
          }, {
            value: 0,
            min: 0,
            max: 0
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
            min: 90,
            max: 100
          }, {
            value: 3.8,
            min: 80,
            max: 89
          }, {
            value: 3.3,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.3,
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          }, {
            value: 1.3,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          }, {
            value: 0.7,
            min: 40,
            max: 49
          }, {
            value: 0,
            min: 0,
            max: 39
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
        country: "CA"
      },
      commonCreditWeights: [0, 0.5, 1, 2],
      sources:['http://www.ryerson.ca/studentguide/academics/grades--gpa--academic-standing.html','http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html'],
      gradeConversions: {
        gpa: gpa,
        "percentage": commonPercentage1,
        "letter": commonLetter1,
        "gpa4.3": common433
      }
    },
    /*Retrieved from http://legacy.wlu.ca/calendars/section.php?cal=1&s=505&sp=1723&ss=2151&y=53
    and http://legacy.wlu.ca/page.php?grp_id=1402&p=12614
    */
    wilfridlaurieruniversity: {
      name: 'Wilfrid Laurier University',
      location: {
        city: "Waterloo",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [0, 0.25, 0.5, 1],
      sources:['http://legacy.wlu.ca/calendars/section.php?cal=1&s=505&sp=1723&ss=2151&y=53','http://legacy.wlu.ca/page.php?grp_id=1402&p=12614'],
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
        country: "CA"
      },
      commonCreditWeights: [0, 0.5, 1, 5],
      sources:['http://www.senecacollege.ca/registrar/records/senecatranscript.html','http://www.senecacollege.ca/registrar/records/gpa.html'],
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
            min: 80,
            max: 100
          }, {
            value: 3.5,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.5,
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          }, {
            value: 1.5,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          }, {
            value: 0,
            min: 0,
            max: 49
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
        country: "CA"
      },
      commonCreditWeights: [0, 2, 3, 4, 5, 6, 8, 9, 12],
      sources:['http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html','https://iss.mcmaster.ca/incoming-exchange-students/academics-undergraduate/grading-system.html'],
      gradeConversions: {
        gpa: gpa,
        percentage: commonPercentage1,
        "letter": commonLetter1,
        "point12":common12Point1
      }
    },
    queensuniversity: {
      name: 'Queen\'s University',
      location: {
        city: "Kingston",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [1,1.5,3,3.5,3.75,4,4.5,6,9,12],
      sources:['http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html','http://www.queensu.ca/english/undergrad/gradeCalculator.html','http://engineering.queensu.ca/Current-Students/Grade-Point-Index.html','http://www.queensu.ca/calendars/business/pg205.html'],
      gradeConversions: {
        gpa: gpa,
        "letter":commonLetter1,
        "percentage": commonPercentage1,
        "4.3scale": common43
      }
    },
    uoit: {
      name: 'Ontario Institute of Technology (UOIT)',
      location: {
        city: "Oshawa",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [0,0.5,1,3],
      sources:['http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html','http://uoit.ca/main/current-students/academics/registration-and-records/grading.php'],
      gradeConversions: {
        gpa: gpa,
        "letter":{
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
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['E', 'F']
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
            min: 60,
            max: 66
          }, {
            value: 1,
            min: 50,
            max: 59
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        },
        "4.3scale": {
          name: "4.3 GPA",
          example: "4.3, 3.8",
          type: "number",
          min: 0,
          max: 4.3,
          gpaConversion: [{
            value: 4,
            min: 4.3,
            max: 4.3
          }, {
            value: 3.9,
            min: 4,
            max: 4
          }, {
            value: 3.7,
            min: 3.7,
            max: 3.7
          }, {
            value: 3.3,
            min: 3.3,
            max: 3.3
          }, {
            value: 3,
            min: 3,
            max: 3
          }, {
            value: 2.7,
            min: 2.7,
            max: 2.7
          }, {
            value: 2.3,
            min: 2.3,
            max: 2.3
          }, {
            value: 2,
            min: 2,
            max: 2
          }, {
            value: 1,
            min: 1,
            max: 1
          }, {
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    mcgill: {
      name: 'McGill University',
      location: {
        city: "Montréal",
        state: "Quebec",
        country: "CA"
      },
      commonCreditWeights: [3,6],
      sources:['https://www.mcgill.ca/gps/files/gps/tricouncil.gpa-calculation-conversion.sept_._2011.final__0.pdf','https://www.mcgill.ca/study/2012-2013/university_regulations_and_resources/undergraduate/gi_grading_and_grade_point_averages'],
      gradeConversions: {
        gpa: gpa,
        "letter":{
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A','A+']
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
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['E', 'F']
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
            min: 85,
            max: 100
          }, {
            value: 3.7,
            min: 80,
            max: 84
          }, {
            value: 3.3,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.7,
            min: 65,
            max: 69
          }, {
            value: 2.3,
            min: 60,
            max: 64
          }, {
            value: 2,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    durhamcollege: {
      name: 'Durham College',
      location: {
        city: "Oshawa",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [1,3,6],
      sources:['http://www.durhamcollege.ca/wp-content/uploads/grading-and-promotion-procedure.pdf'],
      gradeConversions: {
        gpa: gpa,
        "letter":{
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          }, {
            value: 3.9,
            letters: ['A']
          },{
            value: 3.7,
            letters: ['A-']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          },{
            value: 2.7,
            letters: ['C+']
          }, {
            value: 2.3,
            letters: ['C']
          }, {
            value: 2,
            letters: ['D+']
          },{
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['E', 'F']
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
            min: 90,
            max: 100
          },{
            value: 3.9,
            min: 85,
            max: 89
          }, {
            value: 3.7,
            min: 80,
            max: 84
          }, {
            value: 3.3,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.7,
            min: 65,
            max: 69
          }, {
            value: 2.3,
            min: 60,
            max: 64
          }, {
            value: 2,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        },
        "5point":{
          name:"5 Point",
          example:"5.0, 3.5",
          type:"number",
          min: 0,
          max: 5,
          gpaConversion:[{
            value: 4,
            min: 5,
            max: 5
          },{
            value: 3.9,
            min: 4.5,
            max: 4.5
          },{
            value:3.7,
            min: 4,
            max: 4
          },{
            value: 3.3,
            min: 3.5,
            max: 3.5
          },{
            value: 3,
            min: 3,
            max: 3
          },{
            value: 2.7,
            min: 2.5,
            max: 2.5
          },{
            value: 2.3,
            min: 2,
            max: 2
          },{
            value: 2,
            min: 1.5,
            max: 1.5
          },{
            value: 1,
            min: 1,
            max: 1
          },{
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    unbc:{
      name: "University of Northern British Columbia (UNBC)",
      location:{
        city:"Prince George",
        state:"British Columbia",
        country:"CA"
      },
      commonCreditWeights: [1,3,4],
      sources:['http://www.unbc.ca/assets/advising/tmp/gpa_calculation.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter1,
        percentage:commonPercentage1,
        gpa433: common433
      }
    },
    western:{
      name: "Western University (UWO)",
      location:{
        city:"London",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0.25,0.5,0.75,1],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf','http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter1,
        percentage:commonPercentage1
      }
    },
    brock:{
      name: "Brock University",
      location:{
        city:"St. Catharines",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0.25,0.5,0.75,1],
      sources:['http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter1,
        percentage:commonPercentage1
      }
    },
    carleton:{
      name: "Carleton University",
      location:{
        city:"Ottawa",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0.25,0.5,0.75,1],
      sources:['https://carleton.ca/npsia/calculate-your-gpa/','http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter1,
        percentage:commonPercentage1,
        point12: common12Point1
      }
    },
    guelph:{
      name: "University of Guelph",
      location:{
        city:"Guelph",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0.25,0.5,0.75,1],
      sources:['https://www.uoguelph.ca/uaic/faq/grades/how-do-i-calculate-gpa-using-my-guelph-grades'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter2,
        percentage:commonPercentage2
      }
    },
    ottawa:{
      name: "University of Ottawa",
      location:{
        city:"Ottawa",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0.25,0.5,0.75,1],
      sources:['http://www.uottawa.ca/academic-regulations/academic-standing.html','http://www.uottawa.ca/administration-and-governance/academic-regulation-10-grading-system'],
      gradeConversions: {
        gpa: gpa,
        letter: {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          }, {
            value: 3.9,
            letters: ['A']
          },{
            value: 3.7,
            letters: ['A-']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          },{
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1.3,
            letters: ['D+']
          },{
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['E', 'F']
          }]
        },
        percentage:{
          name: "Percentage",
          example: "78%, 67%",
          type: 'number',
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 90,
            max: 100
          },{
            value: 3.9,
            min: 85,
            max: 89
          }, {
            value: 3.7,
            min: 80,
            max: 84
          }, {
            value: 3.3,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.3,
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          }, {
            value: 1.3,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        },
        point10:{
          name: '10 Point',
          example: '10, 5',
          type:"number",
          min: 0,
          max: 10,
          gpaConversion:[{
            value: 4,
            min: 10,
            max: 10
          },{
            value: 3.9,
            min: 9,
            max: 9
          },{
            value: 3.7,
            min: 8,
            max: 8
          },{
            value: 3.3,
            min: 7,
            max: 7
          },{
            value: 3,
            min: 6,
            max: 6
          },{
            value: 2.3,
            min: 5,
            max: 5
          },{
            value: 2,
            min: 4,
            max: 4
          },{
            value: 1.3,
            min: 3,
            max: 3
          },{
            value: 1,
            min: 2,
            max: 2
          },{
            value: 0,
            min: 1,
            max: 1
          },{
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    trent:{
      name: "Trent University",
      location:{
        city:"Peterborough",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0.5,1],
      sources:['http://www.ouac.on.ca/docs/orpas/c_orpas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        percentage:commonPercentage1
      }
    },
    trinitywestern:{
      name: "Trinity Western University",
      location:{
        city:"Langley",
        state:"British Columbia",
        country:"CA"
      },
      commonCreditWeights: [1,2,3,5],
      sources:['http://twu.ca/academics/calendar/2012-2013/academic-information/grading-practices/default.html'],
      gradeConversions: {
        gpa: gpa,
        percentage:commonPercentage1,
        letter: commonLetter1,
        gpa43: common43
      }
    },
    victoriauniversity:{
      name: "University of Victoria",
      location:{
        city:"Victoria",
        state:"British Columbia",
        country:"CA"
      },
      commonCreditWeights: [0.5,1,1.5,3],
      sources:['http://web.uvic.ca/calendar2015-09/GRAD/FARe/Grad.html','http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html'],
      gradeConversions: {
        gpa: gpa,
        percentage: {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 90,
            max: 100
          },{
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
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          }, {
            value: 1,
            min: 50,
            max: 59
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        },
        letter: {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          }, {
            value: 3.9,
            letters: ['A']
          },{
            value: 3.7,
            letters: ['A-']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          },{
            value: 2.7,
            letters: ['B-']
          },{
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['E', 'F']
          }]
        },
        point9: {
          name: "9 Point",
          example: "9, 7",
          type: "number",
          min: 0,
          max: 9,
          gpaConversion: [{
            value: 4,
            min: 9,
            max: 9
          },{
            value: 3.9,
            min: 8,
            max: 8
          }, {
            value: 3.7,
            min: 7,
            max: 7
          }, {
            value: 3.3,
            min: 6,
            max: 6
          }, {
            value: 3,
            min: 5,
            max: 5
          }, {
            value: 2.7,
            min: 4,
            max: 4
          }, {
            value: 2.3,
            min: 3,
            max: 3
          }, {
            value: 2,
            min: 2,
            max: 2
          }, {
            value: 1,
            min: 1,
            max: 1
          },{
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    centennialcollege:{
      name: "Centennial College",
      location:{
        city:"Toronto",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [1,2,3,4],
      sources:['https://www.centennialcollege.ca/pdf/mycentennial/GradingPolicy.pdf','http://facultyweb.centennialcollege.ca/inika/gpacalculator/default.aspx'],
      gradeConversions: {
        gpa: gpa,
        percentage: {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 90,
            max: 100
          },{
            value: 3.8,
            min: 80,
            max: 89
          }, {
            value: 3.3,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.3,
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          }, {
            value: 1.3,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          }, {
            value: 0,
            min: 0,
            max: 49
          }]
        },
        letter: {
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
          },{
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          },{
            value: 1.3,
            letters: ['D+']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['E', 'F']
          }]
        },
        point45: {
          name: "4.5 GPA",
          example: "4.5, 3",
          type: "number",
          min: 0,
          max: 4.5,
          gpaConversion: [{
            value: 4,
            min: 4.5,
            max: 4.5
          },{
            value: 3.8,
            min: 4,
            max: 4
          }, {
            value: 3.3,
            min: 3.5,
            max: 3.5
          }, {
            value: 3,
            min: 3,
            max: 3
          }, {
            value: 2.3,
            min: 2.5,
            max: 2.5
          }, {
            value: 2,
            min: 2,
            max: 2
          }, {
            value: 1.3,
            min: 1.5,
            max: 1.5
          }, {
            value: 1,
            min: 1,
            max: 1
          }, {
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    windsoruniversity:{
      name: "University of Windsor",
      location:{
        city:"Windsor",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [1,2.5,3,4.25,6,8],
      sources:['http://www1.uwindsor.ca/advisingcentre/marking-scale','http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html'],
      gradeConversions: {
        gpa: gpa,
        percentage: {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 93,
            max: 100
          },{
            value: 3.9,
            min: 86,
            max: 92
          }, {
            value: 3.7,
            min: 80,
            max: 85
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
          },{
            value: 1.3,
            min: 57,
            max: 59
          },{
            value: 1,
            min: 53,
            max: 56
          },{
            value: 0.7,
            min: 50,
            max: 52
          },{
            value: 0,
            min: 35,
            max: 49
          },{
            value: 0,
            min: 0,
            max: 34
          }]
        },
        letter: {
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
          },{
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          }, {
            value: 2.7,
            letters: ['B-']
          },{
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          },{
            value: 1.7,
            letters: ['C-']
          },{
            value: 1.3,
            letters: ['D+']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0.7,
            letters: ['D-']
          },{
            value: 0,
            letters: ['F']
          },{
            value: 0,
            letters: ['F-']
          }]
        },
        point13: {
          name: "13 Point",
          example: "13, 9.5",
          type: "number",
          min: 0,
          max: 13,
          gpaConversion: [{
            value: 4,
            min: 13,
            max: 13
          },{
            value: 3.9,
            min: 12,
            max: 12
          }, {
            value: 3.7,
            min: 11,
            max: 11
          }, {
            value: 3.3,
            min: 10,
            max: 10
          }, {
            value: 3,
            min: 9,
            max: 9
          }, {
            value: 2.7,
            min: 8,
            max: 8
          }, {
            value: 2.3,
            min: 7,
            max: 7
          }, {
            value: 2,
            min: 6,
            max: 6
          }, {
            value: 1.7,
            min: 5,
            max: 5
          },{
            value: 1.3,
            min: 4,
            max: 4
          },{
            value: 1,
            min: 3,
            max: 3
          },{
            value: 0.7,
            min: 2,
            max: 2
          },{
            value: 0,
            min: 1,
            max: 1
          },{
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    winnipeguniversity:{
      name: "University of Winnipeg",
      location:{
        city:"Winnipeg",
        state:"Manitoba",
        country:"CA"
      },
      commonCreditWeights: [3,6],
      sources:['http://uwinnipeg.ca/academic-advising/calculating-gpa.pdf','http://www.ouac.on.ca/docs/orpas/c_orpas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter: {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          }, {
            value: 3.9,
            letters: ['A']
          },{
            value: 3.7,
            letters: ['A-']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          },{
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['F']
          }]
        },
        point45: {
          name: "4.5 GPA",
          example: "4.5, 3",
          type: "number",
          min: 0,
          max: 4.5,
          gpaConversion: [{
            value: 4,
            min: 4.5,
            max: 4.5
          },{
            value: 3.9,
            min: 4.25,
            max: 4.25
          },{
            value: 3.7,
            min: 4,
            max: 4
          }, {
            value: 3.3,
            min: 3.5,
            max: 3.5
          }, {
            value: 3,
            min: 3,
            max: 3
          }, {
            value: 2.3,
            min: 2.5,
            max: 2.5
          }, {
            value: 2,
            min: 2,
            max: 2
          }, {
            value: 1,
            min: 1,
            max: 1
          }, {
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    ubc:{
      name: "University of British Columbia (UBC)",
      location:{
        city:"Vancouver",
        state:"British Columbia",
        country:"CA"
      },
      commonCreditWeights: [1,1.5,2,3,6],
      sources:['http://students.arts.ubc.ca/advising/academic-performance/gpa-equivalency/','http://www.ouac.on.ca/docs/orpas/c_orpas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        percentage: {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 90,
            max: 100
          },{
            value: 3.9,
            min: 89,
            max: 89
          }, {
            value: 3.9,
            min: 88,
            max: 88
          },{
            value: 3.9,
            min: 87,
            max: 87
          },{
            value: 3.9,
            min: 86,
            max: 86
          },{
            value: 3.9,
            min: 85,
            max: 85
          },{
            value: 3.7,
            min: 84,
            max: 84
          },{
            value: 3.7,
            min: 83,
            max: 83
          },{
            value: 3.7,
            min: 82,
            max: 82
          },{
            value: 3.7,
            min: 81,
            max: 81
          },{
            value: 3.7,
            min: 80,
            max: 80
          },{
            value: 3.3,
            min: 79,
            max: 79
          },{
            value: 3.3,
            min: 78,
            max: 78
          },{
            value: 3.3,
            min: 77,
            max: 77
          },{
            value: 3,
            min: 76,
            max: 76
          },{
            value: 3,
            min: 75,
            max: 75
          },{
            value: 3,
            min: 74,
            max: 74
          },{
            value: 3,
            min: 73,
            max: 73
          },{
            value: 2.7,
            min: 72,
            max: 72
          },{
            value: 2.7,
            min: 71,
            max: 71
          },{
            value: 2.7,
            min: 70,
            max: 70
          },{
            value: 2.3,
            min: 69,
            max: 69
          },{
            value: 2.3,
            min: 68,
            max: 68
          },{
            value: 2.3,
            min: 67,
            max: 67
          },{
            value: 2,
            min: 66,
            max: 66
          },{
            value: 2,
            min: 65,
            max: 65
          },{
            value: 2,
            min: 64,
            max: 64
          },{
            value: 2,
            min: 63,
            max: 63
          },{
            value: 1.7,
            min: 62,
            max: 62
          },{
            value: 1.7,
            min: 61,
            max: 61
          },{
            value: 1.7,
            min: 60,
            max: 60
          },{
            value: 1.3,
            min: 59,
            max: 59
          },{
            value: 1.3,
            min: 58,
            max: 58
          },{
            value: 1.3,
            min: 57,
            max: 57
          },{
            value: 1,
            min: 56,
            max: 56
          },{
            value: 1,
            min: 55,
            max: 55
          },{
            value: 1,
            min: 54,
            max: 54
          },{
            value: 1,
            min: 53,
            max: 53
          },{
            value: 0.7,
            min: 52,
            max: 52
          },{
            value: 0.7,
            min: 51,
            max: 51
          },{
            value: 0.7,
            min: 50,
            max: 50
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        },
        gpa43: {
          name: "4.33 GPA",
          example: "4.33, 3",
          type: "number",
          min: 0,
          max: 4.33,
          gpaConversion: [{
            value: 4,
            min: 4.33,
            max: 4.33
          },{
            value: 3.9,
            min: 4.3,
            max: 4.3
          }, {
            value: 3.9,
            min: 4.2,
            max: 4.2
          },{
            value: 3.9,
            min: 4.1,
            max: 4.1
          },{
            value: 3.9,
            min: 4,
            max: 4
          },{
            value: 3.9,
            min: 3.95,
            max: 3.95
          },{
            value: 3.7,
            min: 3.9,
            max: 3.9
          },{
            value: 3.7,
            min: 3.85,
            max: 3.85
          },{
            value: 3.7,
            min: 3.8,
            max: 3.8
          },{
            value: 3.7,
            min: 3.75,
            max: 3.75
          },{
            value: 3.7,
            min: 3.7,
            max: 3.7
          },{
            value: 3.3,
            min: 3.6,
            max: 3.6
          },{
            value: 3.3,
            min: 3.5,
            max: 3.5
          },{
            value: 3.3,
            min: 3.4,
            max: 3.4
          },{
            value: 3,
            min: 3.3,
            max: 3.3
          },{
            value: 3,
            min: 3.2,
            max: 3.2
          },{
            value: 3,
            min: 3.1,
            max: 3.1
          },{
            value: 3,
            min: 3,
            max: 3
          },{
            value: 2.7,
            min: 2.95,
            max: 2.95
          },{
            value: 2.7,
            min: 2.9,
            max: 2.9
          },{
            value: 2.7,
            min: 2.8,
            max: 2.8
          },{
            value: 2.3,
            min: 2.7,
            max: 2.7
          },{
            value: 2.3,
            min: 2.65,
            max: 2.65
          },{
            value: 2.3,
            min: 2.6,
            max: 2.6
          },{
            value: 2,
            min: 2.55,
            max: 2.55
          },{
            value: 2,
            min: 2.5,
            max: 2.5
          },{
            value: 2,
            min: 2.4,
            max: 2.4
          },{
            value: 2,
            min: 2.3,
            max: 2.3
          },{
            value: 1.7,
            min: 2.2,
            max: 2.2
          },{
            value: 1.7,
            min: 2.1,
            max: 2.1
          },{
            value: 1.7,
            min: 2,
            max: 2
          },{
            value: 1.3,
            min: 1.9,
            max: 1.9
          },{
            value: 1.3,
            min: 1.8,
            max: 1.8
          },{
            value: 1.3,
            min: 1.7,
            max: 1.7
          },{
            value: 1,
            min: 1.6,
            max: 1.6
          },{
            value: 1,
            min: 1.5,
            max: 1.5
          },{
            value: 1,
            min: 1.4,
            max: 1.4
          },{
            value: 1,
            min: 1.3,
            max: 1.3
          },{
            value: 0.7,
            min: 1.2,
            max: 1.2
          },{
            value: 0.7,
            min: 1.1,
            max: 1.1
          },{
            value: 0.7,
            min: 1,
            max: 1
          },{
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    albertauniversity:{
      name: "University of Alberta",
      location:{
        city:"Edmonton",
        state:"Alberta",
        country:"CA"
      },
      commonCreditWeights: [1,1.5,2,3,4,5,6,7],
      sources:['https://www.augustana.ualberta.ca/programs/lab/resources/gpa_calculator.html','http://www.efs.ualberta.ca/Intranet/~/media/English%20and%20Film%20Studies/Documents/Instructor/GradingChart.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter: {
          name: "Letter",
          example: "B, A+",
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
          },{
            value: 2.7,
            letters: ['B-']
          },{
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          },{
            value: 1.7,
            letters: ['C-']
          }, {
            value: 1.3,
            letters: ['D+']
          },{
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['F','F4']
          }]
        },
        percentage: {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 86,
            max: 100
          }, {
            value: 3.7,
            min: 82,
            max: 85
          }, {
            value: 3.3,
            min: 78,
            max: 81
          }, {
            value: 3,
            min: 74,
            max: 77
          }, {
            value: 2.7,
            min: 70,
            max: 73
          }, {
            value: 2.3,
            min: 66,
            max: 69
          }, {
            value: 2,
            min: 62,
            max: 65
          }, {
            value: 1.7,
            min: 58,
            max: 61
          },{
            value: 1.3,
            min: 54,
            max: 57
          },{
            value: 1,
            min: 50,
            max: 53
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    sherbrokeuniversity:{
      name: "Université de Sherbrooke",
      location:{
        city:"Sherbrooke",
        state:"Québec",
        country:"CA"
      },
      commonCreditWeights: [1,3,6,9],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf','http://www.goforaplus.com/gpa-calculation/'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter3,
        gpa43: common43_2
      }
    },
    saskatchewanuniversity:{
      name: "University of Saskatchewan",
      location:{
        city:"Saskatoon",
        state:"Saskatchewan",
        country:"CA"
      },
      commonCreditWeights: [3,6],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf','http://students.usask.ca/academics/grading/grading-system.php#CalculatingYourAverage'],
      gradeConversions: {
        gpa: gpa,
        percentage: commonPercentage1
      }
    },
    concordiauniversity:{
      name: "Concordia University",
      location:{
        city:"Montreal",
        state:"Québec",
        country:"CA"
      },
      commonCreditWeights: [3,6],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf','https://www.concordia.ca/encs/students/sas/undergrad-program-info/grade-point-average.html'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter1,
        percentage: commonPercentage1,
        gpa43: common43
      }
    },
    montrealuniversity:{
      name: "Université de Montréal",
      location:{
        city:"Montreal",
        state:"Québec",
        country:"CA"
      },
      commonCreditWeights: [3,6],
      sources:['http://www.iro.umontreal.ca/~vaucher/Publications/Guide_Evaluation.pdf','http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        percentage:{
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
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          }, {
            value: 1.7,
            min: 57,
            max: 59
          }, {
            value: 1.3,
            min: 54,
            max: 56
          },{
            value: 1,
            min: 50,
            max: 53
          }, {
            value: 0,
            min: 35,
            max: 49
          },{
            value: 0,
            min: 0,
            max: 34
          }]
        },
        letter:{
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
            value: 0,
            letters: ['E']
          }, {
            value: 0,
            letters: [ 'F']
          }]
        },
        gpa43:{
          name: "4.3 GPA",
          example: "4.3, 3.8",
          type: "number",
          min: 0,
          max: 4.3,
          gpaConversion: [{
            value: 4,
            min: 4.3,
            max: 4.3
          }, {
            value: 3.9,
            min: 4,
            max: 4
          }, {
            value: 3.7,
            min: 3.7,
            max: 3.7
          }, {
            value: 3.3,
            min: 3.3,
            max: 3.3
          }, {
            value: 3,
            min: 3,
            max: 3
          }, {
            value: 2.7,
            min: 2.7,
            max: 2.7
          }, {
            value: 2.3,
            min: 2.3,
            max: 2.3
          }, {
            value: 2,
            min: 2,
            max: 2
          }, {
            value: 1.7,
            min: 1.7,
            max: 1.7
          }, {
            value: 1.3,
            min: 1.3,
            max: 1.3
          }, {
            value: 1,
            min: 1,
            max: 1
          }, {
            value: 0,
            min: 0.5,
            max: 0.5
          }, {
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    athabasca:{
      name: "Athabasca University",
      location:{
        city:"Athabasca",
        state:"Alberta",
        country:"CA"
      },
      commonCreditWeights: [0,1.5,3,6],
      sources:['http://ous.athabascau.ca/policy/registry/undergraduategradingpolicy2002.pdf'],
      gradeConversions: {
        gpa: gpa,
        percentage:commonPercentage4,
        letter: commonLetter4
      }
    },
    acadia:{
      name: "Acadia University",
      location:{
        city:"Wolfville",
        state:"Nova Scotia",
        country:"CA"
      },
      commonCreditWeights: [1,1.5,3,6],
      sources:['http://registrar.acadiau.ca/Examinationsandgrades.html'],
      gradeConversions: {
        gpa: gpa,
        letter: {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+','A']
          }, {
            value: 3.67,
            letters: ['A-']
          }, {
            value: 3.33,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          }, {
            value: 2.67,
            letters: ['B-']
          }, {
            value: 2.33,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1.67,
            letters: ['C-']
          }, {
            value: 1.33,
            letters: ['D+']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0.67,
            letters: ['D-']
          }, {
            value: 0,
            letters: ['F']
          }]
        }
      }
    },
    conestoga:{
      name: "Conestoga College",
      location:{
        city:"Kitchener",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [1,2,3,4],
      sources:['https://www.conestogac.on.ca/admissions/records/achievement.jsp'],
      gradeConversions: {
        gpa: gpa,
        letter: {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          }, {
            value: 3.75,
            letters: ['A']
          },  {
            value: 3.5,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          },  {
            value: 2.5,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['F']
          }]
        },
        percentage:{
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
            value: 3.75,
            min: 80,
            max: 89
          }, {
            value: 3.5,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.5,
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          }, {
            value: 1,
            min: 55,
            max: 59
          }, {
            value: 0,
            min: 0,
            max: 54
          }]
        }
      }
    },
    georgebrowncollege:{
      name: "George Brown College",
      location:{
        city:"Toronto",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0,1],
      sources:['http://www.georgebrown.ca/current_students/grades/'],
      gradeConversions: {
        gpa: gpa,
        letter: {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+','A']
          }, {
            value: 3.7,
            letters: ['A-']
          },  {
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
          },{
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['F']
          }]
        },
        percentage:{
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 86,
            max: 100
          }, {
            value: 3.7,
            min: 80,
            max: 85
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
          },{
            value: 1.3,
            min: 57,
            max: 59
          },{
            value: 1,
            min: 50,
            max: 56
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    humbercollege:{
      name: "Humber College",
      location:{
        city:"Toronto",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0,1,3,6],
      sources:[],
      gradeConversions: {
        percentage:commonPercentage1
      }
    },
    universitydequebec:{
      name: "University of Quebec",
      location:{
        city:"Quebec City",
        state:"Quebec",
        country:"CA"
      },
      commonCreditWeights: [1,3,6],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter1,
        gpa43: common43,
        percentage: commonPercentage1
      }
    },
    reginauniversity:{
      name: "University of Regina",
      location:{
        city:"Regina",
        state:"Saskatchewan",
        country:"CA"
      },
      commonCreditWeights: [1,3,6],
      sources:['http://www.uregina.ca/student/registrar/assets/docs/pdf/The_Grading_System_at_UR.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter5,
        percentage:{
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 87,
            max: 100
          }, {
            value: 3.7,
            min: 80,
            max: 86
          }, {
            value: 3.3,
            min: 76,
            max: 79
          }, {
            value: 3,
            min: 73,
            max: 75
          }, {
            value: 2.7,
            min: 70,
            max: 72
          }, {
            value: 2.3,
            min: 66,
            max: 69
          }, {
            value: 2,
            min: 63,
            max: 65
          }, {
            value: 1.7,
            min: 60,
            max: 62
          },{
            value: 1.3,
            min: 56,
            max: 59
          },{
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
        }
      }
    },
    rmc_cmr:{
      name: "Royal Military College of Canada",
      location:{
        city:"Kingston",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0.5,1,2,3,4],
      sources:['https://www.rmcc-cmrc.ca/en/registrars-office/academic-regulations'],
      gradeConversions: {
        gpa: gpa,
        letter:{
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
          },  {
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
          },{
            value: 1,
            letters: ['D']
          },{
            value: 0.7,
            letters: ['D-']
          },{
            value: 0,
            letters: ['E']
          }, {
            value: 0,
            letters: ['F']
          }]
        },
        percentage:{
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 94,
            max: 100
          }, {
            value: 3.9,
            min: 87,
            max: 93
          },{
            value: 3.7,
            min: 80,
            max: 86
          }, {
            value: 3.3,
            min: 76,
            max: 79
          }, {
            value: 3,
            min: 73,
            max: 75
          }, {
            value: 2.7,
            min: 70,
            max: 72
          }, {
            value: 2.3,
            min: 66,
            max: 69
          }, {
            value: 2,
            min: 63,
            max: 65
          }, {
            value: 1.7,
            min: 60,
            max: 62
          },{
            value: 1.3,
            min: 56,
            max: 59
          },{
            value: 1,
            min: 53,
            max: 55
          }, {
            value: 0.7,
            min: 50,
            max: 52
          }, {
            value: 0,
            min: 40,
            max: 49
          },{
            value: 0,
            min: 0,
            max: 39
          }]
        }
      }
    },
    sainte_anne:{
      name: "Univesity of Sainte-Anne",
      location:{
        city:"Point de l'Eglise",
        state:"Nova Scotia",
        country:"CA"
      },
      commonCreditWeights: [0.5,1,3,6],
      sources:['https://www.usainteanne.ca/academic-regulations'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter6,
        percentage:{
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 94,
            max: 100
          }, {
            value: 3.9,
            min: 87,
            max: 93
          },{
            value: 3.7,
            min: 81,
            max: 86
          }, {
            value: 3.3,
            min: 78,
            max: 80
          }, {
            value: 3,
            min: 75,
            max: 77
          }, {
            value: 2.7,
            min: 72,
            max: 74
          }, {
            value: 2.3,
            min: 69,
            max: 71
          }, {
            value: 2,
            min: 66,
            max: 68
          }, {
            value: 1.7,
            min: 63,
            max: 65
          },{
            value: 1,
            min: 60,
            max: 62
          },{
            value: 0,
            min: 0,
            max: 59
          }]
        }
      }
    },
    saint_thomas_stu:{
      name: "St. Thomas University",
      location:{
        city:"Fredericton",
        state:"New Brunswick",
        country:"CA"
      },
      commonCreditWeights: [0,3,6,9],
      sources:['http://w3.stu.ca/stu/currentstudents/documents/EvaluationandGrading.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter6,
        gpa43: common43_6
      }
    },
    saint_mary:{
      name: "St. Mary's University",
      location:{
        city:"Halifax",
        state:"Nova Scotia",
        country:"CA"
      },
      commonCreditWeights: [1.5,3,6],
      sources:['http://www.smu.ca/academics/final-exams-gpa-calculation.html','http://www.smu.ca/academics/gpa-calculator.html'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter6,
        gpa43: common43_6,
        percentage:{
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
          },{
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
          },{
            value: 1,
            min: 50,
            max: 59
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    pei:{
      name: "University of Prince Edward Island",
      location:{
        city:"Charlottetown",
        state:"Prince Edward Island",
        country:"CA"
      },
      commonCreditWeights: [1,3,6],
      sources:['http://www.upei.ca/programsandcourses/regulation-10-grading'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter1,
        gpa43: common43,
        percentage:{
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 91,
            max: 100
          }, {
            value: 3.9,
            min: 85,
            max: 90
          },{
            value: 3.7,
            min: 80,
            max: 84
          }, {
            value: 3.3,
            min: 77,
            max: 79
          }, {
            value: 3,
            min: 74,
            max: 76
          }, {
            value: 2.7,
            min: 70,
            max: 73
          }, {
            value: 2.3,
            min: 67,
            max: 69
          }, {
            value: 2,
            min: 64,
            max: 66
          }, {
            value: 1.7,
            min: 60,
            max: 63
          },{
            value: 1.3,
            min: 57,
            max: 59
          },{
            value: 1,
            min: 54,
            max: 56
          },{
            value: 0.7,
            min: 50,
            max: 53
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    nippising:{
      name: "Nippising University",
      location:{
        city:"North Bay",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [1,3,6],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf','http://academiccalendar.nipissingu.ca/~/Catalog/ViewCatalog.aspx?topicgroupid=523','http://www.nipissingu.ca/departments/academic-advising/Documents/AVGCALC.PDF'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter1,
        percentage: commonPercentage1
      }
    },
    newbrunswick:{
      name: "University of New Brunswick",
      location:{
        city:"Fredericton",
        state:"New Brunswick",
        country:"CA"
      },
      commonCreditWeights: [1,3,4,6],
      sources:['http://www.unb.ca/fredericton/engineering/depts/civil/currentstudents/grades.html','http://www.unb.ca/fredericton/studentservices/academics/calculating-gpa.html','http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter:{
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
          },  {
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
            value: 1,
            letters: ['D']
          },{
            value: 0,
            letters: ['F']
          }]
        },
        gpa43:{
          name: "4.3 GPA",
          example: "4.3, 3.8",
          type: "number",
          min: 0,
          max: 4.3,
          gpaConversion: [{
            value: 4,
            min: 4.3,
            max: 4.3
          }, {
            value: 3.9,
            min: 4,
            max: 4
          }, {
            value: 3.7,
            min: 3.7,
            max: 3.7
          }, {
            value: 3.3,
            min: 3.3,
            max: 3.3
          }, {
            value: 3,
            min: 3,
            max: 3
          }, {
            value: 2.7,
            min: 2.7,
            max: 2.7
          }, {
            value: 2.3,
            min: 2.3,
            max: 2.3
          }, {
            value: 2,
            min: 2,
            max: 2
          },{
            value: 1,
            min: 1,
            max: 1
          }, {
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    ocad:{
      name: "OCAD University",
      location:{
        city:"Toronto",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0.5,1],
      sources:['http://www.ocadu.ca/about/governance/VP-academic/new-grading-policy.htm','http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter1,
        percentage: {
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
            min: 74,
            max: 76
          }, {
            value: 2.7,
            min: 70,
            max: 73
          }, {
            value: 2.3,
            min: 67,
            max: 69
          }, {
            value: 2,
            min: 64,
            max: 66
          }, {
            value: 1.7,
            min: 60,
            max: 63
          }, {
            value: 1.3,
            min: 57,
            max: 59
          }, {
            value: 1,
            min: 54,
            max: 56
          }, {
            value: 0.7,
            min: 50,
            max: 53
          }, {
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    moncton:{
      name: "Universite de Moncton",
      location:{
        city:"Edmundston",
        state:"New Brunswick",
        country:"CA"
      },
      commonCreditWeights: [1,3,6],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter1
      }
    },
    manitoba:{
      name: "University of Manitoba",
      location:{
        city:"Winnipeg",
        state:"Manitoba",
        country:"CA"
      },
      commonCreditWeights: [0.5,1,3,4.5],
      sources:['http://umanitoba.ca/faculties/engineering/departments/ece/pros_students/grad/gpa.html','http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter:{
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          }, {
            value: 3.8,
            letters: ['A','A-']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B','B-']
          }, {
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C','C-']
          }, {
            value: 1.3,
            letters: ['D+']
          },  {
            value: 1,
            letters: ['D','D-']
          }, {
            value: 0,
            letters: ['F']
          }]
        },
        point45:{
          name:"4.5 Point",
          example:"4.5, 3.5",
          type:"number",
          min: 0,
          max: 4.5,
          gpaConversion:[{
            value: 4,
            min: 4.5,
            max: 4.5
          },{
            value: 3.8,
            min: 4,
            max: 4
          },{
            value:3.3,
            min: 3.5,
            max: 3.5
          },{
            value: 3,
            min: 3,
            max: 3
          },{
            value: 2.3,
            min: 2.5,
            max: 2.5
          },{
            value: 2,
            min: 2,
            max: 2
          },{
            value: 1.3,
            min: 1.5,
            max: 1.5
          },{
            value: 1,
            min: 1,
            max: 1
          },{
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    mun:{
      name: "Memorial University",
      location:{
        city:"St. John's",
        state:"Newfoundland",
        country:"CA"
      },
      commonCreditWeights: [1,3,6],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        percentage:{
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 94,
            max: 100
          }, {
            value: 3.9,
            min: 85,
            max: 93
          }, {
            value: 3.7,
            min: 80,
            max: 84
          }, {
            value: 3.3,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.7,
            min: 65,
            max: 69
          }, {
            value: 2.3,
            min: 60,
            max: 64
          }, {
            value: 2,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          }, {
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    saint_vincent:{
      name: "Mount Saint Vincent",
      location:{
        city:"Halifax",
        state:"Nova Scotia",
        country:"CA"
      },
      commonCreditWeights: [0.5,1],
      sources:['http://www.msvu.ca/en/home/studentservices/academicadvisingsupport/academicadvising/gpacalculator.aspx','http://www.msvu.ca/en/home/programsdepartments/academiccalendars/undergradprograms/regulations/gradingexaminations.aspx','http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter6,
        gpa43: common43_6,
        percentage: {
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
            value: 1,
            min: 50,
            max: 59
          }, {
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    mount_allison:{
      name: "Mount Allison University",
      location:{
        city:"Sackville",
        state:"New Brunswick",
        country:"CA"
      },
      commonCreditWeights: [1,3,6],
      sources:['http://www.mta.ca/~amiller/m1251/gradeconversion.htm','http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter1,
        gpa43: common43,
        percentage: {
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
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          },  {
            value: 2.7,
            min: 67,
            max: 69
          }, {
            value: 2.3,
            min: 64,
            max: 66
          }, {
            value: 2,
            min: 61,
            max: 63
          }, {
            value: 1.7,
            min: 58,
            max: 60
          }, {
            value: 1.3,
            min: 54,
            max: 57
          }, {
            value: 1,
            min: 51,
            max: 53
          },{
            value: 0.7,
            min: 50,
            max: 50
          }, {
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    lethbridge:{
      name: "University of Lethbridge",
      location:{
        city:"Lethbridge",
        state:"Alberta",
        country:"CA"
      },
      commonCreditWeights: [1,1.5,3,6],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter:commonLetter1
      }
    },
    bishops:{
      name: "Bishop's University",
      location:{
        city:"Sherbrooke",
        state:"Quebec",
        country:"CA"
      },
      commonCreditWeights: [1,1.5,3,6],
      sources:['http://www3.ubishops.ca/registrarial-services/grading-scale-gpa-conversion'],
      gradeConversions: {
        gpa: gpa,
        percentage:commonPercentage1
      }
    },
    lakehead:{
      name: "Lakehead University",
      location:{
        city:"Thunder Bay",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0.5,1],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        percentage:commonPercentage1,
        letter: commonLetter1
      }
    },
    dalhousie:{
      name: "Dalhousie University",
      location:{
        city:"Halifax",
        state:"Nova Scotia",
        country:"CA"
      },
      commonCreditWeights: [0,1,1.5,3,6],
      sources:['http://www.dal.ca/campus_life/student_services/academic-support/grades-and-student-records/gpa-calculator.html','http://www.dal.ca/campus_life/student_services/academic-support/grades-and-student-records/grade-scale-and-definitions.html'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter6,
        gpa43: common43_6,
        percentage:{
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
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          }, {
            value: 1.7,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          }, {
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    brandon:{
      name: "Brandon University",
      location:{
        city:"Brandon",
        state:"Manitoba",
        country:"CA"
      },
      commonCreditWeights: [0,1,3,6],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter1
      }
    },
    calgary:{
      name: "University of Calgary",
      location:{
        city:"Calgary",
        state:"Alberta",
        country:"CA"
      },
      commonCreditWeights: [1,2,3,4,5,6],
      sources:['http://www.ucalgary.ca/pubs/calendar/current/f-5.html','http://www.ucalgary.ca/pubs/calendar/current/f-2.html'],
      gradeConversions: {
        gpa: gpa,
        letter: {
          name: "Letter",
          example: "B, A+",
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
            value: 0,
            letters: ['F','I']
          }]
        }
      }
    },
    lavaluniversity:{
      name: "Laval University",
      location:{
        city:"Quebec City",
        state:"Quebec",
        country:"CA"
      },
      commonCreditWeights: [1,3,6],
      sources:['http://www.goforaplus.com/gpa-calculation/','http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter: {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          },{
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
          },{
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['F','E']
          }]
        },
        gpa433:{
          name: "4.33 GPA",
          example: "4.33, 3.8",
          type: "number",
          min: 0,
          max: 4.33,
          gpaConversion: [{
            value: 4,
            min: 4.33,
            max: 4.33
          }, {
            value: 3.9,
            min: 4,
            max: 4
          }, {
            value: 3.7,
            min: 3.67,
            max: 3.67
          }, {
            value: 3.3,
            min: 3.33,
            max: 3.33
          }, {
            value: 3,
            min: 3,
            max: 3
          }, {
            value: 2.7,
            min: 2.67,
            max: 2.67
          }, {
            value: 2.3,
            min: 2.33,
            max: 2.33
          }, {
            value: 2,
            min: 2,
            max: 2
          }, {
            value: 1.7,
            min: 1.67,
            max: 1.67
          },{
            value: 1.3,
            min: 1.33,
            max: 1.33
          }, {
            value: 1,
            min: 1,
            max: 1
          }, {
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    laurentianuniversity:{
      name: "Laurentian University",
      location:{
        city:"Sudbury",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0,1,1.5,2,3,6],
      sources:['http://laurentian.ca/transcripts','http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter: {
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
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          },  {
            value: 1.3,
            letters: ['D+']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0.7,
            letters: ['E']
          },{
            value: 0,
            letters: ['F']
          }]
        },
        percentage:{
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
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          },  {
            value: 2.3,
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          },  {
            value: 1.3,
            min: 55,
            max: 59
          },{
            value: 1,
            min: 50,
            max: 54
          },{
            value: 0.7,
            min: 40,
            max: 49
          }, {
            value: 0,
            min: 0,
            max: 39
          }]
        },
        gpa10:{
          name: "10-Point",
          example: "10, 8",
          type: "number",
          min: 0,
          max: 10,
          gpaConversion: [{
            value: 4,
            min: 10,
            max: 10
          }, {
            value: 3.9,
            min: 9,
            max: 9
          }, {
            value: 3.7,
            min: 8,
            max: 8
          }, {
            value: 3.3,
            min: 7,
            max: 7
          }, {
            value: 3,
            min: 6,
            max: 6
          },  {
            value: 2.3,
            min: 5,
            max: 5
          }, {
            value: 2,
            min: 4,
            max: 4
          },  {
            value: 1.3,
            min: 3,
            max: 3
          },{
            value: 1,
            min: 2,
            max: 2
          },{
            value: 0.7,
            min: 1,
            max: 1
          }, {
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    sfu:{
      name: "Simon Fraser University",
      location:{
        city:"Burnaby",
        state:"British Columbia",
        country:"CA"
      },
      commonCreditWeights: [1,2,3,4,5],
      sources:['https://www.sfu.ca/students/academic-calendar-archive/calendar-spring-2012/student-info/grading.html','http://www.sfu.ca/students/advising-resources/calculators/gpa-calculator.html','http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter6,
        gpa433:{
          name: "4.33 GPA",
          example: "4.33, 3.8",
          type: "number",
          min: 0,
          max: 4.33,
          gpaConversion: [{
            value: 4,
            min: 4.33,
            max: 4.33
          }, {
            value: 3.9,
            min: 4,
            max: 4
          }, {
            value: 3.7,
            min: 3.67,
            max: 3.67
          }, {
            value: 3.3,
            min: 3.33,
            max: 3.33
          }, {
            value: 3,
            min: 3,
            max: 3
          }, {
            value: 2.7,
            min: 2.67,
            max: 2.67
          }, {
            value: 2.3,
            min: 2.33,
            max: 2.33
          }, {
            value: 2,
            min: 2,
            max: 2
          }, {
            value: 1.7,
            min: 1.67,
            max: 1.67
          },{
            value: 1,
            min: 1,
            max: 1
          }, {
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    xavieruniversity:{
      name: "St. Francis Xavier University",
      location:{
        city:"Antigonish",
        state:"Nova Scotia",
        country:"CA"
      },
      commonCreditWeights: [0,1,3,6],
      sources:['http://www.ouac.on.ca/docs/omsas/c_omsas_b.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter1,
        percentage: commonPercentage1
      }
    },
    mohawlkcollege:{
      name: "Mohawk College",
      location:{
        city:"Hamilton",
        state:"Ontario",
        country:"CA"
      },
      commonCreditWeights: [0,1,2,3,4,6,12],
      sources:['http://www.mohawkcollege.ca/studentservices/recordsregistration/gradingEvaluation/grading-evaluation-system.html'],
      gradeConversions: {
        gpa: gpa,
        percentage: commonPercentage1
      }
    },
    douglascollege:{
      name: "Douglas College",
      location:{
        city:"New Westminster",
        state:"British Columbia",
        country:"CA"
      },
      commonCreditWeights: [0,1,2,1.5,3,4,4.5,5,5.5,6,9],
      sources:['https://www.douglascollege.ca/~/media/31860A31D38142059097A1FE1EFE43CC.ashx'],
      gradeConversions: {
        gpa: gpa,
        gpa433: {
          name: "4.33 GPA",
          example: "3.7, 4.33",
          type: "number",
          min: 0,
          max: 4.33,
          gpaConversion: [{
            value: 4,
            min: 4.33,
            max: 4.33
          }, {
            value: 3.9,
            min: 4,
            max: 4
          }, {
            value: 3.7,
            min: 3.67,
            max: 3.67
          }, {
            value: 3.3,
            min: 3.33,
            max: 3.33
          }, {
            value: 3,
            min: 3,
            max: 3
          }, {
            value: 2.7,
            min: 2.67,
            max: 2.67
          }, {
            value: 2.3,
            min: 2.33,
            max: 2.33
          }, {
            value: 2,
            min: 2,
            max: 2
          }, {
            value: 1.7,
            min: 1.67,
            max: 1.67
          },{
            value: 1,
            min: 1,
            max: 1
          },{
            value: 0,
            min: 0,
            max: 0
          }]
        },
        percentage:{
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 95,
            max: 100
          }, {
            value: 3.9,
            min: 90,
            max: 94
          }, {
            value: 3.7,
            min: 85,
            max: 89
          }, {
            value: 3.3,
            min: 80,
            max: 84
          }, {
            value: 3,
            min: 75,
            max: 79
          }, {
            value: 2.7,
            min: 70,
            max: 74
          }, {
            value: 2.3,
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          }, {
            value: 1.7,
            min: 55,
            max: 59
          },{
            value: 1,
            min: 50,
            max: 54
          }, {
            value: 0,
            min: 0,
            max: 49
          }]
        },
        letter:{
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
          },{
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          },{
            value: 1.7,
            letters: ['C-']
          }, {
            value: 1,
            letters: ['P']
          }, {
            value: 0,
            letters: ['F','UN']
          }]
        }
      }
    }
  };
});
