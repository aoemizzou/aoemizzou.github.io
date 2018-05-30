var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {

    $scope.portfolio = [
       {
            "Name" : "Jessica Austin",
            "Major" : "Mechanical Engineering"
       },{
            "Name" : "Sarah Twomey",
            "Major" : "Computer Science and Information Technology"
       },{
            "Name" : "Allison Weyhrich",
            "Major" : "Mechanical Engineering"
        },{
            "Name" : "Kiersten York",
            "Major" : "Mechanical Engineering"
        },{
            "Name" : "Allison Weyhrich",
            "Major" : "Mechanical Engineering"
        }
    ]
});
