var numItems;
var Id_Libros;





// A $( document ).ready() block.
$( document ).ready(function() {

   $('#btnSolicitar').attr("disabled", true);
 //  $("button" ).on( "click", function() {
  //    console.log( $( this ).text() );
   // });
   var table = $('#tl_libros').DataTable({
      language: {
          "decimal": "",
          "emptyTable": "No hay información",
          "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
          "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
          "infoFiltered": "(Filtrado de _MAX_ total entradas)",
          "infoPostFix": "",
          "thousands": ",",
          "lengthMenu": "Mostrar _MENU_ Entradas",
          "loadingRecords": "Cargando...",
          "processing": "Procesando...",
          "search": "Buscar:",
          "zeroRecords": "Sin resultados encontrados",
          "paginate": {
              "first": "Primero",
              "last": "Ultimo",
              "next": "Siguiente",
              "previous": "Anterior"
          }
      },
  });
  
   numItems=0;
   Id_Libros = [];
});

function cerrarSesion(){
   alertify.error("Ha cerrado sesión.");
}

function fnAgregaLibro(btn){
   var id = btn.id;

   if(numItems>=2){
      if($('#'+id).hasClass("btn-danger")){
         $('#'+id).removeClass("btn-danger");
         $('#'+id).addClass("btn-success");
         $('#'+id).text("Agregar");
         let pos = Id_Libros.indexOf(id) // (pos) es la posición para abreviar
         Id_Libros.splice(pos, 1)
      }else{
         alertify.alert('','No se puede solicitar mas de 2 libros a la vez');
      }
   }else{
      if($('#'+id).hasClass("btn-success")){
         $('#'+id).removeClass("btn-success");
         $('#'+id).addClass("btn-danger");
         $('#'+id).text("Agregado");
         Id_Libros.push(id);
      }else{
         $('#'+id).removeClass("btn-danger");
         $('#'+id).addClass("btn-success");
         $('#'+id).text("Agregar");
         let pos = Id_Libros.indexOf(id) // (pos) es la posición para abreviar
         Id_Libros.splice(pos, 1)
      }   
   }
   
   numItems = $('.btn-danger').length;

   $('#clibros').text(numItems);

   $('#libros').val(Id_Libros);
   if(numItems!=0){
      $('#btnSolicitar').attr("disabled", false);
   }else{
      $('#btnSolicitar').attr("disabled", true);
   }
}