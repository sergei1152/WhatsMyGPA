//Conversion Factors from: http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html
//Note: Assuming a percent converstion index of 1 and letter index of 5 for unspecified percentages and GPA's on the website

/*First number represents the percentage conversion index, the second
number represents the letter grade conversion index*/
var universities=new Array(
    new Array("Acadia",1,5),
    new Array("Alberta",1,5),
    new Array("Athabasca",1,5),
    new Array("Bishop",1,5),
    new Array("Brandon",1,5),
    new Array("Brock",1,5),
    new Array("Calgary",1,5),
    new Array("Carleton",1,5),
    new Array("Concordia",1,5),
    new Array("Dalhousie",1,5),
    new Array("Guelph",1,5),
    new Array("Lakehead",1,5),
    new Array("Laurentian",1,5),
    new Array("Laval",1,5),
    new Array("Lethbridge",1,5),
    new Array("Manitoba",1,7),
    new Array("McGill",1,6),
    new Array("McMaster",1,5),
    new Array("Memorial",4,5),
    new Array("Moncton",1,5),
    new Array("Montreal",1,5),
    new Array("Mt.Allison",1,5),
    new Array("Mt. St.Vincent",1,5),
    new Array("New Brunswick",1,5),
    new Array("Nipissing",1,5),
    new Array("Northern BC",1,5),
    new Array("Ottawa",1,5),
    new Array("PEI",1,5),
    new Array("Quebec",1,5),
    new Array("Queen's",1,5),
    new Array("Queen's Engineering",2,5),
    new Array("Regina",1,5),
    new Array("RMC/CMR",2,5),
    new Array("Royal Roads",1,5),
    new Array("Ryerson",1,5),
    new Array("Saskatchewan",1,5),
    new Array("Sherbrooke",1,5),
    new Array("Simon Fraser",1,5),
    new Array("St.Francis Xavier",1,5),
    new Array("St.Mary's",1,5),
    new Array("St.Thomas",1,5),
    new Array("Ste-Anne",1,5),
    new Array("Toronto",1,5),
    new Array("Trent",1,5),
    new Array("Trinity Western",1,5),
    new Array("UBC",1,5),
    new Array("UOIT",1,5),
    new Array("Victoria",1,5),
    new Array("Waterloo",1,5),
    new Array("Western",1,5),
    new Array("Laurier",1,5),
    new Array("Windsor",1,5),
    new Array("Winnipeg",1,5),
    new Array("York",1,7)
);

//Contains data for the percentage grade corresponding to a GPA
//101 indicates that the percentage does not exist for the specified GPA
var GPAlist=new Array(
    //GPA-0, low-percent-1, low-percent-2,low-percent-3, letter-5, letter-6, letter-7, 12-point-8
    //Assuming that a 3.8 GPA is also an 11 in the 12-point system
    new Array(4.0,90,93,94,94,"A+","A","A+",12),
    new Array(3.9,85,84,85,85,"A","A","A",11),
    new Array(3.7,80,75,80,80,"A-", "A-","A",10),
    new Array(3.3,77,72,75,75,"B+","B+","B+",9),
    new Array(3.00,73,69,70,70,"B","B","B",8),
    new Array(2.70,70,66,65,65,"B-","B-","B",7),
    new Array(2.3,67,64,60,60,"C+","C+","C+",6),
    new Array(2.00,63,62,55,55,"C","C","C",5),
    new Array(1.70,60,60,50,101,"C-","C-","C",4),
    new Array(1.30,57,56,101,101, "D+", "D+","D+",3),
    new Array(1.00,53,53,101,50,"D","D","D",2),
    new Array(0.70,50,50,101,101,"D-","D-","D",1),
    new Array(0.0,0,0,0,0,"E/F","E/F","E/F",0)
);