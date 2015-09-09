$(document).on("ready",function() {  
       
    //$('#btn_val').bind('click', mostrardatos);
    $('body').css({'background':'green'});
    $('#btn_val').on('click', mostrardatos);
    $('#btn_ejem').on('click', ejem_div);
    
});

function mostrardatos(){
    var nombre=$("#txt_nombre").val();
    var apellido=$("#txt_apellido").val();
    //alert( nombre+apellido);
    var data={nombre1:nombre,apellido1:apellido}

    $.ajax({
                type: "POST",
                url: "formulario.php",
                data: data,
                beforeSend:function(){
                    $("#resultado").html("Espere por favor")
                
                },
                success: function(msg){
                    $("#resultado").html("");
                    $("#resultado").html(msg);                    
                },
                error: function(msg){                
                    $("resultado").html("error"); 
                     
                }
    });




}
function ejem_div(){

    if($("#flag").val()==0){
        $("#ejemplo_div").hide();
        $("#flag").val("1");
    }else{
        $("#ejemplo_div").show();
        $("#flag").val("0");
    }


}
