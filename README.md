#WhatsMyGPA

######A universal GPA calculator supporting grade conversions for over 50 Canadian universities
######[www.whatsmygpa.ca](http://www.whatsmygpa.ca)

##Features
- [x] Supports grade conversions for 54 Canadian universities
- [x] Has support for a large range of credit weights, including 0.25,0.5,0.75,1,3,6,9,and 12
- [x] Supports percentage input (eg. 84.56%), letter grade input (eg. A+) , and 12-Point grade input
- [x] Outputs a percentage, a GPA, a letter grade, a 12-Point and a 9-Point grade corresponding to your cumulative average
- [x] Supports multiple semester input

##How the Calculations Work
The program handles the different GPA conversions used by many universities by incorporating the GPA conversion chart found [here](http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html)

To calculate the percent average, the following formula is used:
```
Percent Average = ∑ (grade * credit) / ∑ credit

*Where grade is the input, and credit is the corresponding credit weight*
```
This is only used to calculate the final percent average, which is not used towards calculating the GPA. Instead to calculate the GPA, *each* percentage/letter/12-Point grade is converted to its GPA equivalent using the data from the table found [here](http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html). Then the formula shown above is used to calculate the cumulative GPA. A similar calculation is used towards calculating the 12 point and 9 point grades. 

A letter grade is assigned based on the final cumulative GPA and the University (eg. an "A" in McGill corresponds to a "A+" for York).

##Some Problems I Faced
The clear issue with making a universal GPA calculator is the inconsistencies in grading between different universities. There's a very useful GPA conversion chart that I used [here](http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html), however the problem was figuring out a way to incorporate the chart (without using a huge mass of if/else statements). Arrays were the obvious solution, but figuring out a way to organize the array was another challenge. In the end I decided making two 2-D arrays. One array held all the GPAs and their possible combinations of percentage, letter, 12 point, and 9 point ranges. The other held a list of universities and the index of their corresponding percentage/letter ranges from the first array. Doing it this way allowed the list to be easily readable and modifiable.

Unfortunately, no GPA calculator is perfect (even though I tried really hard on this one). There's bound to be credit weights that some of  universities have that aren't supported, so if you spot a credit weight that should exist, please email me and let me know.