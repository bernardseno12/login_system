$(document).ready(function(){
    var $btn = $("#btn");
    var $div1 = $("#p1").hide(); 
    var $div2 = $("#p2").hide(); 

    $btn.on("click", () => {
        var $name = $.trim($("#name").val());
        var $pass = $("#pass").val();

        if($name == ''){
            $div1.show();
        }
        else{
            $div1.hide();
        }

        if($pass == ''){
            $div2.show();
        }
        else{
            $div2.hide();
        }
    });

});