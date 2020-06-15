const  express  =  require ( "expresso" ) ;
const  app  =  express ( ) ;
app . use ( express . json ( ) ) ;

app . post ( "/ somar" ,  ( request , response )  =>  {
var addBinary = function(a, b) {
    var res = Number(parseInt(a, 2)) + Number(parseInt(b, 2));

    request.json ({
  
    resultado: "o resultado da soma é : &{ res } ";
    return res.toString(2);
})
}
app . listen ( 10000 ,  ( )  =>  {
    console . log ( "Olá Mundo" ) ;
}