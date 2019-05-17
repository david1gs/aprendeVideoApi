$(document).ready(function () {

    /////////////////////////////// GESTION USUARIOS

    /**AGREGAR USUARIO */
    $('#btnAgregarPersona').on('click', function () {

        var nombre = $('#agregar-nombre');
        var primerApellido = $('#agregar-primerApellido');
        var usuario = $('#agregar-usuario');
        var correo = $('#agregar-correo');
        var password = $('#agregar-password');

        $.ajax({

            url: '',
            cache: false,
            method: 'POST',
            data: {
                key: '',
                nombre: nombre.val(),
                primerApellido: primerApellido.val(),
                usuario: usuario.val(),
                correo: correo.val(),
                password: password.val()
            }
        })
            .done(function (response) {


            });

    });

    /**EDITAR USUARIO */
    //RECUPERA AL USUARIO PARA PONERLO EN EL MODAL
    $('body').on('click', '.btnEditarPersona', function () {

        var idUsuario = $(this).data('id');

        $.ajax({

            url: '',
            cache: false,
            dataType: 'JSON',
            method: "POST",
            data: {
                key: '',
                id: idUsuario,
            },
            beforeSend: function () {

            },
            success: function (response) {

                $("#idUsuario").val(response.id);
            }

        });

    });



    //GUARDA EL USUARIO DESDE EL MODAL
    $('#editarUsuario').on('click', function () {

        var idUsuario = $('#idUsuario');

        var nombre = $('#editar-nombre');
        var primerApellido = $('#editar-primerApellidoMedico');
        var usuario = $('#editar-usuario');
        var correo = $('#editar-correo');
        var password = $('#editar-password');

        $.ajax({

            url: '',
            cache: false,
            method: 'POST',
            data: {
                key: '',
                idUsuario: idUsuario.val(),
                nombre: nombre.val(),
                primerApellido: primerApellido.val(),
                usuario: usuario.val(),
                correo: correo.val(),
                password: password.val()
            }
        })
            .done(function (response) {


            });

    });

    /** ELIMINAR USUARIO */
    $('body').on('click', '.btnEliminarUsuario', function () {

        var idUsuario = $(this).data('id');

        //Modal editar medicos
        swal({
            title: "¿Estás seguro?",
            text: "Los datos se eliminarán y no podrás recuperarlos.",
            icon: "warning",
            buttons: true,
            buttons: ['Cancelar', 'Aceptar'],
            dangerMode: true,
        })
            .then((eliminar) => {
                if (eliminar) {

                    $.ajax({

                        url: '',
                        cache: false,
                        method: 'POST',
                        data: {
                            key: '',
                            idUsuario: idUsuario
                        },
                        success: function (response) {

                        }


                    });

                } else {

                }
            });

    });

});