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
    $(".contactUs").submit(function(event) {
        var  namePerson= $("input#name").val();
        var personEmail = $("input#email").val();
        var textArea = $("input#textarea").val();
        if( namePerson.length<3){
            alert("put your two names👊");
        }else if (personEmail==="") {
            alert("input email");
         } else if (textArea==="") {
            alert("type your text😞");
        }
        else{
            alert(`${namePerson} We have recieved your message🎉`)
        };
  $(".portfolioImages").hide();
  $(".overlay").animate({ opacity: 1 });

  $(".overlay").hover(
    function () {
      $(this).animate({ opacity: 0.4 }, 200);
      $(".portfolioImages").fadeIn();
    },
    function () {
      $(this).animate({ opacity: 1 }, 500);
      $(".portfolioImages").fadeOut();
    }
  );

  $(".image_description-2").hide();
  $(".hover-2").animate({ opacity: 1 });

  $(".hover-2").hover(
    function () {
      $(this).stop().animate({ opacity: 0.4 }, 200);
      $(".image_description-2").fadeIn();
    },
    function () {
      $(this).stop().animate({ opacity: 1 }, 500);
      $(".image_description-2").fadeOut();
    }
  );      
        event.preventDefault();

    });
});
