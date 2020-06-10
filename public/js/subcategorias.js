$(document).ready(function(){
    $("select#categorias").on('change', function(e){
        e.preventDefault();
        //var data = $('select[name=categoria_serv]').val();
        $.ajax({
            type: 'post',
            url: '/post-service',
            data: "subcat=" + $('#categorias').val(),
            dataType: "json",
            success: function (cadena) {
                console.log(cadena);
                let select = $('select#sub_cat');

                select.html('');
                cadena.forEach(items => {
                    select.append(`
                        <option value="${items.id}">${items.nom_scat}</option>
                    `)
                })
            }
        });
        /*.done(function(data){
            $('select#sub_cat').html(data.cadena);
        });*/
    });
});