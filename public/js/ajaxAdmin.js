
$(document).ready(function () {

    /////////////////////////////// GESTION USUARIOS

    /**LISTAR USUARIO */
    var recupera = 0;

    

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
                        "<button class='btn btn-primary editarPersona' data-id='" + response[i].idCuenta + "' data-toggle='modal' data-target='#modalEditarPersona'><i class='fas fa-edit'></i> Editar</button><button class='btn btn-danger eliminarPersona' data-id='" + response[i].idCuenta + "'><i class='fas fa-trash-alt'></i> Eliminar</button>"
                    ]).draw(false);
                }

            },
        });
    }

    /**AGREGAR USUARIO */
    $('#agregarUsuario').on('click', function () {

        var Usuario = $('#agregar-usuario');
        var Contrasena = $('#agregar-password');
        var Correo = $('#agregar-correo');
        var Nombre = $('#agregar-nombre');
        var Apellido = $('#agregar-primerApellido');

        $.ajax({

            url: 'persona/persona',
            cache: false,
            method: 'POST',
            data: {
                Usuario: Usuario.val(),
                Contrasena: Contrasena.val(),
                Correo: Correo.val(),
                Nombre: Nombre.val(),
                Apellido: Apellido.val() 
            },
            success: function (response) {
                alert("Usuario agregado correctamente");
                ListPersona();
            }
        });

        $("#modalAgregarPersona").modal('toggle');

    });

    /**EDITAR USUARIO */
    //RECUPERA AL USUARIO PARA PONERLO EN EL MODAL
    $('body').on('click', '.editarPersona', function () {

        var idCuenta = $(this).data('id');

        recupera = $(this).data('id');

        $.ajax({

            url: 'persona/persona/' + recupera,
            cache: false,
            dataType: 'JSON',
            method: "GET",
            data: {},
            success: function (response) {
                //alert("Hola");
                $("#editar-nombre").val(response[0].Nombre);
                $("#editar-primerApellido").val(response[0].Apellido);
                $("#editar-usuario").val(response[0].Usuario);
                $("#editar-correo").val(response[0].Correo);
                $("#editar-password").val(response[0].Contrasena);
            }

        });

    });


    //GUARDA EL USUARIO DESDE EL MODAL
    $('#editarUsuario').on('click', function () {

        var id = recupera;

        var Usuario = $('#editar-usuario');
        var Contrasena = $('#editar-password');
        var Correo = $('#editar-correo');
        var Nombre = $('#editar-nombre');
        var Apellido = $('#editar-primerApellido');

        $.ajax({

            url: 'persona/persona',
            cache: false,
            method: 'PUT',
            data: {
                Usuario: Usuario.val(),
                Contrasena: Contrasena.val(),
                Correo: Correo.val(),
                Nombre: Nombre.val(),
                Apellido: Apellido.val(),
                idCuenta: id
            },
            success: function (response) {
                alert("Usuario editado correctamente");
                ListPersona();
            }
        });

        $("#modalEditarPersona").modal('toggle');

    });

    /** ELIMINAR USUARIO */
    $('body').on('click', '.eliminarPersona', function () {

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

                        url: 'persona/persona',
                        cache: false,
                        method: 'DELETE',
                        data: {
                            idCuenta : idUsuario
                        },
                        success: function (response) {
                            alert("Usuario correctamente eliminado");
                            ListPersona();
                        }


                    });

                } else {

                }
            });

    });

});