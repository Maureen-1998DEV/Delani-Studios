$(document).ready(function(){
    $(".design").click (function(){
        $(".designText").toggle();
    
        
    });
    $(".designText").click (function(){
        $(".design").toggle();
    
    });
});