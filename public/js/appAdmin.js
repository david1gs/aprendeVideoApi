$(document).ready(function () {

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

/* LIMPIAR MODALES */

$("body").on("click", "#btnAgregarPersona", function () {
    $("#agregar-nombre").val("");
    $("#agregar-primerApellido").val("");
    $("#agregar-correo").val("");
    $("#agregar-password").val("");
    $("#agregar-password2").val("");

});

$("body").on("click", "#editarCerrar", function () {

    $("#agregar-nombre").val("");
    $("#agregar-primerApellido").val("");
    $("#agregar-correo").val("");
    $("#agregar-password").val("");
    $("#agregar-password2").val("");


});

});