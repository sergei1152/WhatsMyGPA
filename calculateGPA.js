function calculatePercentage(marks,creditWeights){

  var percentage=0;
  var combinedCreditWeight=0; 

  //calculates the percentage based on the input
  for (var i=0; i<6; i++){
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

function outputPercentage(percentage){

  //checks to make sure that the percentage is a non-zero number
  if (isNaN(percentage) || percentage==0){
   document.getElementById("message").innerHTML="Input numbers only please";
  }

  else{
    //outputs the percentage
    document.getElementById("percentage").innerHTML=percentage;
  }

}

function convertPercentToGPA(universityIndex, percentage){

  percentage=Math.round(percentage);

  var percentType=universities[universityIndex][1];

  var grades=new Array();
  for (var i=0; i<15; i++){
    if (percentage>GPAlist[i][percentType]){
      //first index represents GPA, second letter, third 12point grade
      var grades=new Array (GPAlist[i][0],GPAlist[i][universities[universityIndex][2]],GPAlist[i][8]);
      break;
    }
  }

  return grades;
}
//calculates and outputs the GPA information
function calculateGPA(){
    
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
    
    //NOTE: Do error checking to make sure all the inputs are valid (ie all percentages)
    if (gradeType=="percent"){
      var percentage=calculatePercentage(marks, creditWeights);
      outputPercentage(percentage);
      var grades=convertPercentToGPA(universityIndex,percentage);
      document.getElementById("GPA").innerHTML=""+grades[0];

    }

    return false; //returns a false that stops form submission, since theres nothing to really submit to
  } //end of function

