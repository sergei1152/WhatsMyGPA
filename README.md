# WhatsMyGPA

###### A universal GPA calculator supporting grade conversions for over 50 Canadian universities and colleges, with more added daily
###### [www.whatsmygpa.ca](http://www.whatsmygpa.ca)

![Screenshot of WhatsMyGPA.ca](https://raw.githubusercontent.com/sergei1152/WhatsMyGPA/master/screenshot.png)

## Features
- [x] Supports grade conversions for over 54 Canadian universities and colleges (more to be added)
- [x] Customized credit weight suggestions based on university. Users can input custom values as well.
- [x] Supports input and conversion to and from any grading system, whether it be letter, percentage, 4.33 GPA, 9-Point, 12-Point, etc...
- [x] Multiple semester input
- [x] View conversion table for your University, as well as the source for where the data came from
- [x] Save your grades and university selection in local storage so you don't have to input it again after a refresh
- [x] Responsive mobile design

## How the Calculations Work
This is the magic formula that is used in the calculator for finding the cumulative average in any grading system.
```
Cumulative Average = ∑ (converted_grade * credit) / ∑ credit

*Where converted grade is the original grade converted to the output grade (if necessary), and credit is the corresponding credit weight*
```

For example, say we want to convert an 84 and a 78 both worth 1 credit weight to find the final GPA average. The calculation is as follows: 
```
1. Convert each grade to output grading scale (this if for a sample university)
84% = 3.7 GPA
78% = 3.0 GPA

2. Use the formula:
  (3.7*1 + 3.0*1)/(1+1)= 3.35 GPA (cumulative)
```

So the calculator takes each input grade, converts it to the corresponding numerical output grade, then uses the formula to find the cumulative grade for that output grade. If the input grade type and output grade type is the same, no conversion is done. If the input grade type is a letter, then the 4.0 GPA scale is used as the intermediary in the calculations, before the final thing is converted back to a letter grade.

# Missing Your University?
Create a [Github issue](https://github.com/sergei1152/WhatsMyGPA/issues) stating what university is missing, and preferably a link to the university's page for their grading system. You'll need to sign up for github if you dont have an account.

# Developing
To start developing, you need to have node installed. The app uses bower and gulp to manage dependencies and build the files.

Open up the terminal, cd into the project directory, and run `npm install -g bower gulp` to install the required dependencies globally. Run `bower install` after to install all of the front-end dependencies, and `npm install` to install everything else. Run `gulp build` to build the files necessary, and run `gulp watch` to build everything on a file change.
