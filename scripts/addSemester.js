//adds an additional 6 entries by clicking the + button
function addSemester(){

	var newSemester = document.createElement('div');

	newSemester.innerHTML = "\
      <h4>Grade</h4> <h4>Credit</h4>\
      <br>\
      <input type='text' id='course_"+(maxCourses+1)+"_value'>\
      <select id='course_"+(maxCourses+1)+"_weight'>\
          <option value='0.25'>0.25</option>\
          <option value='0.5'>0.5</option>\
          <option value='0.75'>0.75</option>\
          <option value='0.8'>0.80</option>\
          <option value='1.0'>1.0</option>\
          <option value='3.0'>3.0</option>\
          <option value='4.0'>4.0</option>\
          <option value='6.0'>6.0</option>\
          <option value='9.0'>9.0</option>\
          <option value='12.0'>12.0</option>\
      </select>\
      <br>\
      <input type='text' id='course_"+(maxCourses+2)+"_value'>\
      <select id='course_"+(maxCourses+2)+"_weight'>\
          <option value='0.25'>0.25</option>\
          <option value='0.5'>0.5</option>\
          <option value='0.75'>0.75</option>\
          <option value='0.8'>0.80</option>\
          <option value='1.0'>1.0</option>\
          <option value='3.0'>3.0</option>\
          <option value='4.0'>4.0</option>\
          <option value='6.0'>6.0</option>\
          <option value='9.0'>9.0</option>\
          <option value='12.0'>12.0</option>\
      </select>\
      <br>\
      <input type='text' id='course_"+(maxCourses+3)+"_value'>\
      <select id='course_"+(maxCourses+3)+"_weight'>\
          <option value='0.25'>0.25</option>\
          <option value='0.5'>0.5</option>\
          <option value='0.75'>0.75</option>\
          <option value='0.8'>0.80</option>\
          <option value='1.0'>1.0</option>\
          <option value='3.0'>3.0</option>\
          <option value='4.0'>4.0</option>\
          <option value='6.0'>6.0</option>\
          <option value='9.0'>9.0</option>\
          <option value='12.0'>12.0</option>\
      </select>\
      <br>\
      <input type='text' id='course_"+(maxCourses+4)+"_value'>\
      <select id='course_"+(maxCourses+4)+"_weight'>\
          <option value='0.25'>0.25</option>\
          <option value='0.5'>0.5</option>\
          <option value='0.75'>0.75</option>\
          <option value='0.8'>0.80</option>\
          <option value='1.0'>1.0</option>\
          <option value='3.0'>3.0</option>\
          <option value='4.0'>4.0</option>\
          <option value='6.0'>6.0</option>\
          <option value='9.0'>9.0</option>\
          <option value='12.0'>12.0</option>\
      </select>\
      <br>\
      <input type='text' id='course_"+(maxCourses+5)+"_value'>\
      <select id='course_"+(maxCourses+5)+"_weight'>\
          <option value='0.25'>0.25</option>\
          <option value='0.5'>0.5</option>\
          <option value='0.75'>0.75</option>\
          <option value='0.8'>0.80</option>\
          <option value='1.0'>1.0</option>\
          <option value='3.0'>3.0</option>\
          <option value='4.0'>4.0</option>\
          <option value='6.0'>6.0</option>\
          <option value='9.0'>9.0</option>\
          <option value='12.0'>12.0</option>\
      </select>\
      <br>\
      <input type='text' id='course_"+(maxCourses+6)+"_value'>\
      <select id='course_"+(maxCourses+6)+"_weight'>\
          <option value='0.25'>0.25</option>\
          <option value='0.5'>0.5</option>\
          <option value='0.75'>0.75</option>\
          <option value='0.8'>0.80</option>\
          <option value='1.0'>1.0</option>\
          <option value='3.0'>3.0</option>\
          <option value='4.0'>4.0</option>\
          <option value='6.0'>6.0</option>\
          <option value='9.0'>9.0</option>\
          <option value='12.0'>12.0</option>\
      </select>\
      <br>";

    //adding class to change styles so that the new inputs flow to the left instead of being in the center
  document.getElementById('first-semester').classList.add('semester-input-multiple');
  newSemester.classList.add('semester-input-multiple');
  newSemester.classList.add('semester-input');

	document.getElementById('semesters').appendChild(newSemester);


	 maxCourses+=6;
}