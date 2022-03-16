// Feedback from the form

$(document).ready(function(){
    $('myForm').keydown(function(){
        var name = $('#name').val();
        var email = $('name').val();
        var message = $('message').val();
        var key = e.which;
        if (key == 13) {
            if (name == ""){
                alert('Name is missing!');
            } else if (email == ""){
                alert('Email address is missing');
            } else if (message == "") {
                alert('Message is missing');
            } else {
                $('myForm').submit();
                alert("Hello " + name + " We have received your messege. Thanks for reaching out to us."); 
            }
        }
    });
});