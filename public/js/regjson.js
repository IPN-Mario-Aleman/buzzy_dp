jQuery(document).on('submit','#form',function(event){
            event.preventDefault();
            jQuery.ajax({
                url:'main_app/registro.php',
                type:'POST',
                dataType:'json',
                data:$(this).serialize(),
                beforeSend:function(){
                  $('.botonrg').val('Registrando....');
                }
              })
              .done(function(respuesta){
                console.log(respuesta);
                if (!respuesta.error) {
                  $('.correcto').slideDown('slow');
                  setTimeout(function(){
                    $('.correcto').slideUp('slow');
                  },3000);
                  header("Refresh: 1; URL=login.php");
                }else {
                  $('.error').slideDown('slow');
                  setTimeout(function(){
                    $('.error').slideUp('slow');
                  },3000);
                $('.botonlg').val('Registrarse');
                }
              })
              .fail(function(resp){
                console.log(resp.responseText);
              })
              .always(function(){
                console.log("complete");
            });
});
