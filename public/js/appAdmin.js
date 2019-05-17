$(document).ready(function () {

    ListPersona();

    function ListPersona(){
        $.ajax({
            url: 'persona/persona',
            method: "GET",
            cache: false,
            data: { },
            success: function (response) {
                $('#tableUsuarios').DataTable().clear().draw();
                for(var i = 0; i < response.length; i++){
                    $('#tableUsuarios').DataTable().row.add([
                        response[i].Nombre,
                        response[i].Apellido,
                        response[i].Correo,
                        response[i].Usuario,
                        "<button class='btn btn-primary editarPersona' data-id='" + response[i].idCuenta + "'><i class='fas fa-edit'></i> Editar</button><button class='btn btn-danger eliminarPersona' data-id='" + response[i].idCuenta + "'><i class='fas fa-trash-alt'></i> Eliminar</button>"
                    ]).draw(false);
                }

            },
        });
    }

    
    $("body").on('click', '.editarPersona', function(){
        alert("Se dio de baja la cuenta " + $(this).data("id"));
    });

    $("body").on('click', '.eliminarPersona', function(){
        var id = $(this).data("id");
        alert("Se dio de baja la cuenta " + id);
        
        $.ajax({
            url: 'persona/persona',
            method: "DELETE",
            cache: false,
            data: { idCuenta : id },
            success: function (response) {
                ListPersona();
            },
        });
    });

    

$('#table').DataTable({
    responsive: true,
    dom: 'lBfrtip',
    buttons: [

        {
            extend: 'excel',
            text: 'Exportar a Excel',
            className: 'btn-success mr-2 btnExcel mt-3'
        },
        {
            extend: 'pdf',
            text: 'Exportar a pdf',
            className: 'btn-info btnPdf mt-3'
        }
    ],

    "language": {

        "sProcessing": "Procesando...",
        "sLengthMenu": "Mostrar _MENU_ registros",
        "sZeroRecords": "No se encontraron resultados",
        "sEmptyTable": "Ningún dato disponible en esta tabla",
        "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": "Buscar:",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst": "Primero",
            "sLast": "Último",
            "sNext": "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }

    }

});

//Pone iconos en los botones de exportar
$('.btnExcel').prepend("<i class='fas fa-file-excel mr-2'></i>");
$('.btnPdf').prepend("<i class='far fa-file-pdf mr-2'></i>");

});