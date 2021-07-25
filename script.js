$(document).ready(function(){
    $("#design").click(function (e) {
        $("#design").toggle();
        $("#designText").show();
    });
    $("#designText").click(function (e) {
        $("#design").toggle();
        $("#designText").toggle();
    });
    $("#development").click(function (e) {
        $("#development").toggle();
        $("#developmentText").show();
    
    });
    $("#developmentText").click(function (e) {
        $("#development").toggle();
        $("#developmentText").toggle();
    });
    $("#productManagement").click(function (e) {
        $("#productManagement").toggle();
        $("#productManagementText").show();
    
    });
    $("#productManagementText").click(function (e) {
        $("#productManagement").toggle();
        $("#productManagementText").toggle();
    });
});