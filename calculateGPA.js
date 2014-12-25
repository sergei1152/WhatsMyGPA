var sizeOfGPAList=GPAlist.length;
var maxCourses=6; //size of the number of inputs displayed in the html

function displayPercent(percentage){
  if (!isNaN(percentage) && percentage!=0)
    document.getElementById("percentage-output").innerHTML=Math.round(percentage*100)/100;//rounds to 2 decimal places

  else
    document.getElementById("percentage-output").innerHTML="--";
}

function displayGPA(GPA){
  if (GPA!=0 && !isNaN(GPA))
    document.getElementById("GPA-output").innerHTML=Math.round(GPA*100)/100;//rounds to 2 decimal places

  else 
    document.getElementById("GPA-output").innerHTML="--";
}

//Requires the GPA so as to check whether the GPA is a "true" 0. If so then the user hasn't entered enough inputs properly
function displayLetter(letter, GPA){ 
  if (GPA!=0 && !isNaN(GPA))
    document.getElementById("letter-output").innerHTML=letter;

  else 
    document.getElementById("letter-output").innerHTML="--";
}

function display12Point(grade){
  if (grade!=0 && !isNaN(grade))
    document.getElementById("12point-output").innerHTML=Math.round(grade*100)/100; //rounds to 2 decimal places

  else 
    document.getElementById("12point-output").innerHTML="--";
}

function display9Point(grade){
  if (grade!=0 && !isNaN(grade))
    document.getElementById("9point-output").innerHTML=Math.round(grade*100)/100; //rounds to 2 decimal places

  else 
    document.getElementById("9point-output").innerHTML="--";
}

//Calculates the percent average. This number does not go towards calculating the GPA.
function calculatePercentage(marks,creditWeights){
  var percentage=0;
  var combinedCreditWeight=0; 

  for (var i=0; i<maxCourses; i++){ //checks every input for a valid entry
    
    var mark=parseFloat(marks[i]);
    
    if (mark>=0 && mark<=100 && !isNaN(mark)){ //checks to make sure an input exists and is valid
      var creditWeight=Number(creditWeights[i]);
      percentage+=mark*creditWeight;
      combinedCreditWeight+=creditWeight;
    }
  }
  percentage/=combinedCreditWeight;

  if (isNaN(percentage)) //in case no inputs were filled in and combinedCreditWeight stays at 0
    percentage=0;

  return percentage;
}

//Converts an array of percentage marks to a letter grade, GPA, and 12-point system grade
function convertPercentToGPA(universityIndex, marks, creditWeights){
  var GPAtotal=0;
  var creditTotal=0;
  var pointTotal=0; //for calculating the 12-point grade
  var pointTotal9=0; //used for calculating the 9-point grade

  var referencePercentageIndex=universities[universityIndex][1]; //the index of which percentage ranges to use from the GPA list
  var referenceLetterGradeIndex=universities[universityIndex][2]; //the index of which letter grades to use from the GPA list

  for (var i=0; i<maxCourses; i++){ //checks every input for a valid entry

    //finds the range at which the mark fits in
    for (var j=0; j<sizeOfGPAList; j++){ 

      var mark=parseFloat(marks[i]);

      //checks to make sure an input is valid
      if (mark>=0 &&  mark<=100 &&!isNaN(mark) && mark>=GPAlist[j][referencePercentageIndex]){

        var creditWeight=Number(creditWeights[i]);
        GPAtotal+=GPAlist[j][0]*creditWeight; //adds the GPA to the total
        creditTotal+=creditWeight;
        pointTotal+=GPAlist[j][8]*creditWeight;
        pointTotal9+=GPAlist[j][10]*creditWeight;
        break;
      }
    }
  }

  var GPA=GPAtotal/creditTotal;
  var points=pointTotal/creditTotal;
  var points9=pointTotal9/creditTotal;

  if (isNaN(GPA) || isNaN(points)){//Checks to make sure that the fields were filled in
    GPA=0;
    points=0;
    points9=0;
  }

  //calculates the letter grade based on final GPA
  var i;
  for (i = 0; i <sizeOfGPAList; i++) {
    if (GPA>=GPAlist[i][0]){
      break;
    }
  }

  var grades=new Array(GPA,GPAlist[i][referenceLetterGradeIndex],points,points9);

  return grades;
}

//Converts an array of letter grades into a final letter grade, a GPA, and a 12-point system grade
function convertLetterToGPA(universityIndex, marks, creditWeights){
  var GPAtotal=0;
  var creditTotal=0;
  var pointTotal=0; //to calculate the 12-point grade
  var pointTotal9=0; //used for calculating the 9-point grade

  var referenceLetterGradeIndex=universities[universityIndex][2]; //index of where to obtain the letter grade from the GPAlist

  for (var i=0; i<maxCourses; i++){ //checks every input for a valid entry

    
    for (var j = 0; j <sizeOfGPAList; j++) {

      ///tries to match the entry with a mark in the GPAlist
      if (marks[i].toUpperCase()==GPAlist[j][referenceLetterGradeIndex]){

        var creditWeight=Number(creditWeights[i]);
        GPAtotal+=GPAlist[j][0]*creditWeight; //adds the GPA to the total
        creditTotal+=creditWeight;
        pointTotal+=GPAlist[j][8]*creditWeight;
        pointTotal9+=GPAlist[j][10]*creditWeight;
        break;
      }
    }
  }

  var GPA=GPAtotal/creditTotal;
  var points=pointTotal/creditTotal;
  var points9=pointTotal9/creditTotal;

  if (isNaN(GPA) || isNaN(points)){//Checks to make sure that the fields were filled in (since a creditTotal would be 0)
    GPA=0;
    points=0;
    points9=0;
  }

  //matches a letter grade to the GPA
  var i;
  for (i = 0; i <sizeOfGPAList; i++) {
    if (GPA>=GPAlist[i][0]){
      break;
    }
  }

  var grades=new Array(GPA,GPAlist[i][referenceLetterGradeIndex],points,points9);

  return grades;
}

//Converts an array of 12-point system grades to a GPA, and a corresponding letter grade
function convert12PointToGPA(universityIndex, marks, creditWeights){
  var GPAtotal=0;
  var creditTotal=0;
  var PointTotal=0; //for calculating the 12-point grade
  var pointTotal9=0; //used for calculating the 9-point grade 

  var referenceLetterGradeIndex=universities[universityIndex][2]; //the index of which letter grades to use from the GPA list

  for (var i=0; i<maxCourses; i++){ //checks every input for a valid entry

    for (var j=0; j<sizeOfGPAList; j++){

      var mark=parseFloat(marks[i]);

      //tries to match the letter to one in the GPAlist
      if (mark>=GPAlist[j][8] && !isNaN(mark) && mark<=12 && mark >=0){ //if input is valid and if it finds the input in the list
        
        var creditWeight=Number(creditWeights[i]);
        PointTotal+=mark*creditWeight;
        pointTotal9+=GPAlist[j][10]*creditWeight;
        GPAtotal+=GPAlist[j][0]*creditWeight; //adds the GPA to the total
        creditTotal+=creditWeight;
        break;
      }
    }
  }

  var GPA=GPAtotal/creditTotal;
  var points=PointTotal/creditTotal;
  var points9=pointTotal9/creditTotal;

  if (isNaN(GPA) || isNaN(points)){//Checks to make sure that the fields were filled in
    GPA=0;
    points=0;
    points9=0;
  }

  //calculates the letter grade based on the GPA
  var i;
  for (i = 0; i <sizeOfGPAList; i++) {
    if (GPA>=GPAlist[i][0]){
      break;
    }
  }

  var grades=new Array(GPA,GPAlist[i][referenceLetterGradeIndex],points,points9);

  return grades;
  
}

//Main function that stores the inputs and calculates and outputs the final grades
function calculateGPA(){

    var marks=new Array();
    var creditWeights=new Array();

    //Storing the values from the input fields
    for (var i=1; i<=maxCourses; i++){
      marks.push(document.getElementById("course_"+i+"_value").value);
      creditWeights.push( document.getElementById("course_"+i+"_weight").value)
    }

    //Storing the university selected index. Works as long as the list in university-list.js matches the one in the html.
    var universityIndex=document.getElementById("university").selectedIndex;

    //Checks for type of grades inputed from the radio buttons
    if (document.getElementById("input-percent").checked)
      var gradeType="percent";
    else if (document.getElementById("input-letter").checked)
      var gradeType="letter";
    else
      var gradeType="12-point";
    
    //converts and outputs the percentage to a GPA
    if (gradeType=="percent"){
      var percentage=calculatePercentage(marks,creditWeights);
      var grades=convertPercentToGPA(universityIndex,marks, creditWeights);
      
      displayPercent(percentage);
    }

    //converts and outputs the letter grades to a GPA
    else if (gradeType=="letter"){
      var grades=convertLetterToGPA(universityIndex, marks, creditWeights);
      displayPercent(0);
    }

    //converts and outputs the 12-point grades to a GPA
    else if (gradeType=="12-point"){
      var grades=convert12PointToGPA(universityIndex, marks, creditWeights);
      displayPercent(0);
    }

    displayGPA(grades[0]);
    displayLetter(grades[1],grades[0]);
    display12Point(grades[2]);
    display9Point(grades[3]);

    return false; //returns a false that stops form submission, since theres nothing to submit to

  } //end of function