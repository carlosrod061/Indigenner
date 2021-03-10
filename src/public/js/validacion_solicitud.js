

//Clae que simula el libro como tal
class Libro{
    constructor(titulo,autor,categoria){
       this.titulo=titulo;
       this.autor=autor;
       this.categoria=categoria;
    }
 
    print(){
        console.log("Estoy siendo exportado");
    }
 }
 
 class CategoriaLibro{
    constructor(titulo, composite = []){
        this.titulo = titulo;
        this.composite = composite;
    }
 
    print(){
        console.log(//Title and price
            );
            this.composite.forEach(element => element.print());
            console.log("*********");
    }
    
 }


$( document ).ready(function() {
    var d = new Date(); 
    var month = d.getMonth()+1; 
    var day = d.getDate(); 
    var outputsalida = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;
    var fecharetorno = new Date(outputsalida);
    fecharetorno.setDate(fecharetorno.getDate() + 7);
    $('#fechasalida').val(outputsalida);

    var options = { day: 'numeric', month: 'numeric', year: 'numeric'  };

    fecharetorno = fecharetorno.toLocaleDateString(undefined, options);
    var arrayDeCadenas = fecharetorno.split("/");
    fecharetorno = arrayDeCadenas[2]+"-"+arrayDeCadenas[1]+"-"+(arrayDeCadenas[0]<10 ? '0' : '') + arrayDeCadenas[0] ;
   
    $('#fecharetorno').val(fecharetorno);

    fn_AcomodarLibros();

    var cantidadPrestamos = $('#cantidadPrestamos').text();
    if(cantidadPrestamos=="0"){
        
        $('#cantidadPrestamos').text("No cuenta con prestamos activos");

    }else{

        $('#cantidadPrestamos').text("Cantidad de prestamos activos:"+cantidadPrestamos);

    }
  
});


function fn_AcomodarLibros(){
    var libros;
    var arrayLibros;
    libros = $('#idLibros').val();
    arrayLibros = libros.split(",");
    var html;
    var PrestamosActivos;

    PrestamosActivos = $('#iPrestamosActivos').val();

    if(PrestamosActivos>=2){
        alertify.alert('','Cuenta con la cantidad maxima de prestamos.');
        fn_prestamoNoValido();
    }else{
        if(arrayLibros.length > 1 && PrestamosActivos==0){
            html = ' <input type="hidden" id="idLibro1" name="idLibro1" value="'+arrayLibros[0]+'"> '+
            ' <input type="hidden" id="idLibro2" name="idLibro2" value="'+arrayLibros[1]+'">';
            $("#inputsLibros").html(html);
            $('#formRegistro').attr('action', '/registrarPrestamos');
            
        }else{
            if(arrayLibros.length < 2){
            html = ' <input type="hidden" id="idLibro1" name="idLibro1" value="'+arrayLibros[0]+'"> ';
            $("#inputsLibros").html(html);
            $('#formRegistro').attr('action', '/registrarPrestamo')
            }else{
                alertify.alert('','Al realizar la solicitud sobrepasaria la cantidad de prestamos activos validos. Verifique la cantidad de libros.');
                fn_prestamoNoValido();
            }
        }
    }
   
}

function fn_prestamoNoValido(){
    
    $('#formRegistro').attr('action', '/');
    $('#formRegistro').attr('method', 'get');
    $('#btnConfirmar').removeClass("btn-success");
    $('#btnConfirmar').addClass("btn-danger");
    $('#btnConfirmar').text('Regresar');
}