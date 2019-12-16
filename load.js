let profile_list = [];

function newgame()
{
    id = "frm1"
    document.getElementById("frm1").style.visibility = "visible";

}

function myFunction()
{
    if (localStorage.getItem("profile_list") !== null)
    {
        profile_list = JSON.parse(localStorage.getItem("profile_list"));
        let profile = {
            name: document.getElementById("myText2").value,
            save: null,
        }
        profile_list.push(profile);
        console.log(profile_list);
        localStorage.setItem("profile_list", JSON.stringify(profile_list));
        localStorage.setItem("active_profile", profile_list.length);
        window.location.href = 'game.html';

    }
    else
    {
        let profile = [
        {
            name: document.getElementById("myText2").value,
            save: null,
        }];
        localStorage.setItem("profile_list", JSON.stringify(profile));
        // console.log(profile_list);
        localStorage.setItem("active_profile", 1);
        window.location.href = 'game.html';
    };





};
let app = angular.module("list_saves", []);

app.controller("get_saves", ['$scope', '$document', function($scope, $document)
{
    console.log("anything");
    $scope.profiles = JSON.parse(localStorage.getItem("profile_list"));



}]);
