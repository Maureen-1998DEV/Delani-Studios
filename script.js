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
    
    $(".divOne").hover(function () {
        $(".portFolioImagesOne").animate({ opacity: 1 }, 100);
        $(".overlayOne").addClass("overlay-hover-effect");
    }
        , function () {
            $(".portFolioImagesOne").animate({ opacity: 0 }, 100);
            $(".overlayOne").removeClass("overlay-hover-effect");
        }
    );

    $(".divTwo").hover(function () {
        
        $(".portfolioImages").animate({ opacity: 1 }, 50);
        $(".overlay").addClass("overlay-hover-effect");
    }
        , function () {

            $(".portFolioImages").animate({ opacity: 0 }, 50);
            $(".overlay").removeClass("overlay-hover-effect");
        }
    );

    $(".divThree").hover(function () {
        
        $(".portFolioImages").animate({ opacity: 1 }, 50);
        $(".portFolioImages").addClass("overlay-hover-effect");
    }
        , function () {
            // out
            $(".portFolioImages").animate({ opacity: 0 }, 50);
            $(".overlay").removeClass("overlay-hover-effect");
        }
    );

    $(".divFour").hover(function () {
        $(".portFolioImages").animate({ opacity: 1 }, 50);
        $(".overlay").addClass("overlay-hover-effect");
    }
        , function () {
            $(".po4").animate({ opacity: 0 }, 50);
            $(".pn4").removeClass("overlay-hover-effect");
        }
    );

    $(".divFive").hover(function () {
        $(".portFolioImages").animate({ opacity: 1 }, 50);
        $(".overlay").addClass("overlay-hover-effect");
    }
        , function () {
            $(".portFolioImages").animate({ opacity: 0 }, 50);
            $(".overlay").removeClass("overlay-hover-effect");
        }
    );

    $(".divSix").hover(function () {

        $(".poxrtFolioImages").animate({ opacity: 1 }, 50);
        $(".overlay").addClass("overlay-hover-effect");
    }
        , function () {
        
            $(".po6").animate({ opacity: 0 }, 50);
            $(".pn6").removeClass("overlay-hover-effect");
        }
    );

    $(".divSeven").hover(function () {
        $(".portFolioImage").animate({ opacity: 1 }, 50);
        $(".overlay").addClass("overlay-hover-effect");
    }
        , function () {
            $(".portFolioImage").animate({ opacity: 0 }, 50);
            $(".overlay").removeClass("overlay-hover-effect");
        }
    );

    $(".divEight").hover(function () {
        $(".portFolioImage").animate({ opacity: 1 }, 50);
        $(".portFolioImage").addClass("overlay-hover-effect");
    }
        , function () {
            $(".").animate({ opacity: 0 }, 50);
            $(".pn8").removeClass("overlay-hover-effect");
        }
    );
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
    });
});
