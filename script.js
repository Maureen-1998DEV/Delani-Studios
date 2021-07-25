$(document).ready(function(){
    $(".design").click (function(){
       $(".designText").toggle();   
  });     
  $(".designText").click (function(){
       $(".design").toggle();
    });
    $(".development").click(function(){
        $(".developmentText").toggle();
    });
    $(".developmentText").click(function(){
        $(".development").toggle();
    });
    $(".productManagement").click(function(){
        $(".productManagementText").toggle();
    });
    $(".productManagement").click(function(){
      $(".productManagement").toggle();
    });
});