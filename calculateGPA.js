var sizeOfGPAList=GPAlist.length;
var maxCourses=6;

function calculatePercentage(marks,creditWeights){

  var percentage=0;
  var combinedCreditWeight=0; 

  //calculates the percentage based on the input
  for (var i=0; i<maxCourses; i++){
    var mark=Number(marks[i]);
    
    if (mark>0 && !isNaN(mark)){ //checks to make sure the input is valid
      var creditWeight=Number(creditWeights[i]);
      percentage+=mark*creditWeight;
      combinedCreditWeight+=creditWeight;
    }
  }
  percentage/=combinedCreditWeight;
  return percentage;
}

function displayPercent(percentage){

  //checks to make sure that the percentage is a non-zero number
  if (isNaN(percentage) || percentage==0){
   document.getElementById("message").innerHTML="Input numbers only please";
  }

  else{
    //outputs the percentage
    document.getElementById("percentage-output").innerHTML=Math.round(percentage*100)/100;
  }

}

function displayGPA(GPA){
  GPA=Math.round(GPA*100)/100;
  document.getElementById("GPA-output").innerHTML=""+GPA;
}

function displayLetter(letter){
  document.getElementById("letter-output").innerHTML=letter;
}

function display12Point(grade){
  document.getElementById("12point-output").innerHTML=grade;
}

function convertPercentToGPA(universityIndex, percentage){

  percentage=Math.round(percentage);

  var percentType=universities[universityIndex][1];

  var grades=new Array();
  for (var i=0; i<sizeOfGPAList; i++){
    if (percentage>=GPAlist[i][percentType]){
      //first index represents GPA, second letter, third 12point grade
      var grades=new Array (GPAlist[i][0],GPAlist[i][universities[universityIndex][2]],GPAlist[i][8]);
      break;
    }
  }

  return grades;
}

function convertLetterToGPA(universityIndex, marks, creditWeights){
  var GPAtotal=0;
  var creditTotal=0;

  var referenceLetterGradeIndex=universities[universityIndex][2];
  //scrolls through all the letter marks
  for (var i=0; i<6; i++){

    //scrolls through the GPA list and finds a match to the mark
    for (var j = 0; j <13; j++) {

      //checks if the mark of the course matches a GPA
      if (marks[i].toUpperCase()==GPAlist[j][referenceLetterGradeIndex]){

        GPAtotal+=GPAlist[j][0]*creditWeights[i]; //adds the GPA to the total
        creditTotal+=Number(creditWeights[i]);
        break;
      }
    }
  }

  var GPA=GPAtotal/creditTotal;
  
  if (isNaN(GPA)){//Checks to make sure that the fields were filled in
    GPA=0;
  }

  //calculates the 12-point system grade based on the GPA
  var i;
  for (i = 0; i <13; i++) {
    if (GPA>=GPAlist[i][0]){
      break;
    }
  }

  var grades=new Array(GPA,GPAlist[i][8],GPAlist[i][referenceLetterGradeIndex]);

  return grades;
}
//calculates and outputs the GPA information
function calculateGPA(){
    console.log ("calculateGPA() was called");
    //Storing the values from the input fields
    var marks=new Array(document.getElementById("course_1_value").value,
      document.getElementById("course_2_value").value,
      document.getElementById("course_3_value").value,
      document.getElementById("course_4_value").value,
      document.getElementById("course_5_value").value,
      document.getElementById("course_6_value").value);
      
    var creditWeights=new Array (document.getElementById("course_1_weight").value,
      document.getElementById("course_2_weight").value,
      document.getElementById("course_3_weight").value,
      document.getElementById("course_4_weight").value,
      document.getElementById("course_5_weight").value,
      document.getElementById("course_6_weight").value);
    
    //works as long as the list in university-list.js matches the one in the html
    var universityIndex=document.getElementById("university").selectedIndex;

    //Checks for type of grades inputed
    if (document.getElementById("input-percent").checked)
      var gradeType="percent";
    else if (document.getElementById("input-letter").checked)
      var gradeType="letter";
    else
      var gradeType="12-point";
    
    if (gradeType=="percent"){
      var percentage=calculatePercentage(marks, creditWeights);
      
      var grades=convertPercentToGPA(universityIndex,percentage);
      
      displayPercent(percentage);
      displayGPA(grades[0]);
      displayLetter(grades[1]);
      display12Point(grades[2]);
    }

    else if (gradeType=="letter"){
      var grades=convertLetterToGPA(universityIndex, marks, creditWeights);
      displayGPA(grades[0]);
      displayLetter(grades[1]);
      display12Point(grades[2]);
    }

    return false; //returns a false that stops form submission, since theres nothing to really submit to

  } //end of function