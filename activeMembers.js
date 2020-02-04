//to add a new member copy and paste this and add in name and major within the quotation marks:
//{
//    "Name" : "",
//    "Major" : ""
//}
//MAKE SURE THERE IS A COMMA BETWEEN EACH MEMBER {} OR IT WILL NOT WORK 

var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {

    $scope.portfolio = [
       {
            "Name" : "Jessica Austin",
            "Major" : "Mechanical and Aerospace Engineering"
       },{
            "Name" : "Isabel Banks",
            "Major" : "Biomedical Engineering"
       },{
            "Name" : "Lauren Baratta",
            "Major" : "Chemical Engineering"
       },{
            "Name" : "Olivia Decker",
            "Major" : "Mechanical Engineering and Physics"
       },{
            "Name" : "Abby DeVrieze",
            "Major" : "Biomedical Engineering"
       },{
            "Name" : "Samantha Drainer",
            "Major" : "Mechanical Engineering"
       },{
            "Name" : "Abby Dzurick",
            "Major" : "Journalism"
       },{
            "Name" : "Taryn Fogarty",
            "Major" : "Mechanical Engineering"
       },{
            "Name" : "Sierra Foster",
            "Major" : "Biomedical Engineering"
       },{
            "Name" : "Madelynn Frappier",
            "Major" : "Biomedical Engineering"
       },{
            "Name" : "Cristin Harris",
            "Major" : "Mechanical Engineering"
       },{
            "Name" : "Madeline Hartranft",
            "Major" : "Mechanical Engineering"
       },{
            "Name" : "Mori Hodel",
            "Major" : "Biological Engineering"
       },{
            "Name" : "Noelia Iribe",
            "Major" : "Computer and Electrical Engineering"
       },{
            "Name" : "Riley Jackson",
            "Major" : "Electrical Engineering"
       },{
            "Name" : "Annika Jurczyk",
            "Major" : "Civil Engineering"
       },{
            "Name" : "Reagan Krueger",
            "Major" : "Chemical Engineering"
       },{
            "Name" : "Camila Leiva",
            "Major" : "Biomedical Engineering"
       },{
            "Name" : "Kyra Liebi",
            "Major" : "Civil Engineering"
       },{
            "Name" : "Maria Lusardi",
            "Major" : "Computer Science"
       },{
            "Name" : "Sera McKenna",
            "Major" : "Biomedical Engineering"
       },{
            "Name" : "Devynne Miller",
            "Major" : "Computer Science"
       },{
            "Name" : "Amalia Newman",
            "Major" : "Mathematics"
       },{
            "Name" : "Allison Park",
            "Major" : "Mechanical Engineering"
       },{
            "Name" : "Halle Reach",
            "Major" : "Biomedical Engineering"
       },{
            "Name" : "Abbie Ries",
            "Major" : "Industrial Engineering and Mathematics"
       },{
            "Name" : "Brooke Runge",
            "Major" : "Mechanical Engineering and Mathematics"
       },{
            "Name" : "Emily Seever",
            "Major" : "Biomedical Engineering"
       },{
            "Name" : "Rebecca Shyu",
            "Major" : "Computer Science"
       },{
            "Name" : "Ellie Snoke",
            "Major" : "Chemical Engineering"
       },{
            "Name" : "Ava Steele",
            "Major" : "Chemical Engineering"
       },{
            "Name" : "Kayla Stites",
            "Major" : "Computer Science"
       },{
            "Name" : "Coral Tracy",
            "Major" : "Chemical Engineering and French"
       },{
            "Name" : "Taylor Volkers",
            "Major" : "Biological Engineering"
       },{
            "Name" : "Caelen Walker",
            "Major" : "Computer Science"
       },{
            "Name" : "Shelby Wiseman",
            "Major" : "Mechanical and Aerospace Engineering"
       },{
            "Name" : "Kiersten York",
            "Major" : "Mechanical Engineering"
       }
    ]
});
