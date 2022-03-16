// Feedback from the form
$(document).ready(function(){
    $("#desc1").hide();
    $("div#desc2").hide();
    $("div#desc3").hide();
    $("div#desc4").hide();
    $("div#desc5").hide();
    $("div#desc6").hide();
    $("div#desc7").hide();
    $("div#desc8").hide();

    $("myForm").keypress(function(e){
        var name = $("#name").val();
        var email = $("name").val();
        var message = $("message").val();
        var key = e.which;
        if (key == 13) {
            if (name == ""){
                alert("Name is missing!");
            } else if (email == ""){
                alert("Email address is missing");
            } else if (message == "") {
                alert("Message is missing");
            } else {
                $("myForm").submit();
                alert("Hello " + name + " We have received your messege. Thanks for reaching out to us."); 
            }
        }
    });
    $("#submit").click(function(){        
        var jina = $("#name").val();
        var pepe = $("#email").val();
        var ujumbe = $("#message").val();

        if(jina == ""){
            alert("Name is missing!");
        } else if (pepe == "") {
            alert("Email Address is missing!");
        } else if (ujumbe == ""){
            alert("Message is missing!");
        } else {
            alert("Hello " + jina + " We have received your messege. Thanks for reaching out to us.")
        }

    });
    

    // HOVER effect on the portfolio
    //On mouse hoover, the title is shown on each portfolio project.
    $("div#portfolio1").mouseover(function(){
        $("div#desc1").show();
    })
    .mouseout(function(){
        $("div#desc1").hide();
    })
    $("div#portfolio2").mouseover(function(){
        $("div#desc2").show();
    })
    .mouseout(function(){
        $("div#desc2").hide();
    })
    $("div#portfolio3").mouseover(function(){
        $("div#desc3").show();
    })
    .mouseout(function(){
        $("div#desc3").hide();
    })
    $("div#portfolio4").mouseover(function(){
        $("div#desc4").show();
    })
    .mouseout(function(){
        $("div#desc4").hide();
    })
    $("div#portfolio5").mouseover(function(){
        $("div#desc5").show();
    })
    .mouseout(function(){
        $("div#desc5").hide();
    })

    $("div#portfolio6").mouseover(function(){
        $("div#desc6").show();
    })
    .mouseout(function(){
        $("div#desc6").hide();
    })
    $("div#portfolio7").mouseover(function(){
        $("div#desc7").show();
    })
    .mouseout(function(){
        $("div#desc7").hide();
    })
    $("div#portfolio8").mouseover(function(){
        $("div#desc8").show();
    })
    .mouseout(function(){
        $("div#desc8").hide();

    });
    $('#portfolio1 img').hover(function () {
        $(this).stop().animate({
            opacity: .3
        }, 100);
        $('.text0').removeClass('hide');
    }, function () {
        $(this).stop().animate({
            opacity: 1}, 600);
        $('.text0').addClass('hide');
    });

   $(".designContent").hide();
   $(".designImg, .designContent").on("click", function(){
       $(".designImg, .designContent").toggle();
   });
   $(".devContent").hide();
   $(".devImg, .devContent").on("click", function(){
       $(".devImg, .devContent").toggle();
   });
   $(".designContent").hide();
   $(".productImg, .productContent").on("click", function(){
       $(".productImg, .productContent").toggle();
   });
});