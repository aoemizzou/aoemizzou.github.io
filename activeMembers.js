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
            "Name" : "Paige Ackerman",
            "Major" : "Health Sciences"
       },{
            "Name" : "Jessica Austin",
            "Major" : "Mechanical Engineering"
       },{
            "Name" : "Lauren Baratta",
            "Major" : "Chemical Engineering"
       },{
            "Name" : "Lydia Becvar",
            "Major" : "Biological Engineering"
       },{
            "Name" : "Stacey Bonderer",
            "Major" : "Civil Engineering"
       },{
            "Name" : "Megan Carlin",
            "Major" : "Civil and Environnmetal Engineering"
       },{
            "Name" : "Jamie Cottrell",
            "Major" : "Civil Engineering"
       },{
            "Name" : "Laura Deters",
            "Major" : "Biological Engineering"
       },{
            "Name" : "Olivia Flagg-Bourke",
            "Major" : "English and Communications"
       },{
            "Name" : "Libby Freihaut",
            "Major" : "Mechanical Engineering"
       },{
            "Name" : "Martha Gahl",
            "Major" : "Electrical Engineering and Physics"
       },{
            "Name" : "Maria Howell",
            "Major" : "Electrical Engineering and Physics"
       },{
            "Name" : "Tsiania Hughes",
            "Major" : "Computer Engineering"
       },{
            "Name" : "Clare Kercher",
            "Major" : "Biological Engineering"
       },{
            "Name" : "Breanna Ladd",
            "Major" : "Civil Engineering"
       },{
            "Name" : "Josephine Luk",
            "Major" : "Biological Engineering"
       },{
            "Name" : "Kiley Marshall",
            "Major" : "Biological Engineering"
       },{
            "Name" : "Hannah Moss",
            "Major" : "Strategic Communications"
       },{
            "Name" : "Natalie Mowery",
            "Major" : "Industrial Engineering"
       },{
            "Name" : "Allison Park",
            "Major" : "Mechanical Engineering"
       },{
            "Name" : "Lauren Parker",
            "Major" : "Mechanical Engineering"
       },{
            "Name" : "Amber Peterein",
            "Major" : "Civil Engineering and Political Science"
       },{
            "Name" : "Megan Richmond",
            "Major" : "Biological Engineering"
       },{
            "Name" : "Abbie Ries",
            "Major" : "Industrial Engineering"
       },{
            "Name" : "Samantha Sample",
            "Major" : "Electrical and Computer Engineering"
       },{
            "Name" : "Rachel Slings",
            "Major" : "Biologicial Engineering"
       },{
            "Name" : "Kristina Taylor",
            "Major" : "Chemical Engineering"
       },{
            "Name" : "Emma Tomes",
            "Major" : "Biological Engineering"
       },{
            "Name" : "Kennedy Tunks",
            "Major" : "Industrial Engineering"
       }
    ]
});
