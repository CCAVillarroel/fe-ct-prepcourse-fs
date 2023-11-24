// vamos a crear nuestro primer objeto
// iniciamos con la palabra var y el nombre de nuestro objeto
// añadimos un = y abrimos y cerramos llaves
// las llaves nos indican que que es un objeto

var dportes = {
    conBalon: ['Bootball','Basketaball','Rugby'],
    sinBalon: ['Boxeo','Surf','Trekking'],
};
// Las Propiedades que estan dentro de un objeto puede ser,  desde otros objetos, arreglos, numeros, string, etc.
// La forma adecuada de añadir las propiedades el nombre de la propiedad, dos puntos ":" y seguidamente los valores
// Los valores tipo string entre commila simple '' y seprados por coma ","

var persona = {
    nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}
};

// En este ejemplo añadimos 3 propiedades
// La primera es tipo string por eso esta entre comillas simple
// La segunda es numerica y se denota de forma normal
// La tercera es otro objeto de nombre estudios, de propiedad esProgramador y de valor true
// este objeto "estudios" esta dentro del objeto "Nombre"
// Lon nombre de las propiedades las denotamos como "claves" y deben ser unicas en nuestro objeto

//*** SEGUNDA CLASE ***
/*"Dot-Notation" & "Bracket-Notation"*/
// Son las nos manera de trabajar con objetos
/*"Dot-Notation" Notacion por punto '.'*/

console.log(persona.edad);
// Accedemos a la propiedad edad par saber el valor y nos da 26

persona.nombre = 'Martin';
console.log(persona.nombre);
// Modificamos el valor de la propiedad Nombre
// supongamos que el valor es erroneo no se llama Lucas sino Martin
// Escribimos primero el nombre del objeto, punto "." seguido del nombre de la propiedad a modificar
// igualamos "=" y escribimos el nuevo valor que reemplazara al anterior
// en este caso Martin por Lucas
// usamos el console.log 
persona.edad = 32;
console.log(persona.edad);

// Hacemos la misma modificacion para el valor de la propiedad edad
//cambiamos 26 por 32 (en valores numericos no usamos la comilla simple)


/*VAMOS APRENDER COMO AÑADIR NUEVAS PROPIEDADES AL OBJETO */
// Necesitamos saber qque nombre va a llevar nuestra propuedad y cuales son los valores que tendra
// OJO: nunca se va a poder crear una nueva propiedad vacia, siuempre tiene que tener un valor asignado

var autos = {};
// hemos creado el objeto autos y al no haber ninguna propiedad entre las las llaves el objeto 
// es vacio y esto no se puede hacer para eso hacemos lo siguiente
autos.marcas = ['Ford','Audi','Ferrari',];
// Hemos creado una propiedad de nombre "Marcas" este es un arreglo
// Hemos creado tres valores de tipo string por tanto el objeto no esta vacio
console.log(autos.marcas);
// mandamos a imprimir la nueva propiedad y nos da los valores de Ford, Audi y Ferrari
  
// Usaremos una propiedad llamada "delete" que nos sirve para eliminar propiedades de un objeto
// creamos uan segunda propiedad
autos.modelos = ['Xiami','Samsung','Alcatel'],
console.log(autos)

// Nos damos cuentas que autos.modelos no son marcas de automoviles debemos eliminarlos
delete autos.modelos
console.log(autos);
// hemos eliminado la propiedad modelos
// llamamos a imprimir el objeto y solo imprimira la propiedad marcas

// Una de las particularidades que tiene un objeto es que podemos guardar una funcion
// Amprederemos a guardar una funcion dentro de un objeto.

var misFunciones = {
    saludar: function () {
        console.log('Hola');
    },
};
misFunciones.saludar();
// Hemos creado un objeto de nombre misFunciones el cual almacena una funcion
// dicha funcion almacena un valor tipo string que dice hola
// Mandamos a imprimir con el console.log la funcion
// para poder acceder a esa propiedad ejecutamos fuera de la terminal la funcion con el mensaje que esperamos

/* *** APREDEREMOS A USAR BRACKET NOTATION*** */
/* Esta notacion se caracteriza por el uso de corchetes */
//Veremos la diferencia entre ambas notaciones

//creamos el objeto atuendos con las propiedades manos y pies ambos de tipo arreglos

var atuendos = {
    manos: ['Guantes','Anillos'],
    pies: ['Zapatos','Soquetes'],
};
console.log(atuendos);
console.log(atuendos.manos);

// con bracket notation seria de la siguiente manera
atuendos["piernas"] = ['Bermudas','Pantalones']
// Creamos la nueva propiedad piernas
// Es muy importante que esta propiedad se escriba de tipo string y entre comillas 
// imprimimos el objeto con la nueva propiedad
console.log(atuendos);

// La bracket notation o notacion por corchetes tiene una particularidad muy importante que no tiene el dot notation
// creamos un objeto de nombre comidas con una propiedad tipo funcion
// esta funcion tiene dos variables propUbo y PropDos
// solo con breacket notation podemos usar variables externas para guardarla como propiedad de un objeto

var comidas = {};
var diferenciadeNotaciones = function (propUno, propDos) {
    comidas[propUno] = ['Frutas','Vegetales'];
    comidas[propDos] = ['Hamburguesas','Papa Fritas'];
// Usamos los corchetes sin comillas para que con las variables externas puedan ser llamadas
// Tanto la propUno como la PropDos bajo las variables saludable y no saludable. 
};
diferenciadeNotaciones('Saludable','No Saludable');
console.log(comidas);


/* *HASOWNPROPERTY* */
// estes metodo nos permite ver si tiene una propiedad especifica
// siempre retorna un valor false/true

var libro = {
    autor: 'Berges',
    genero: 'Policial',
    año: '1990'
};
// Hemos creado un objeto de nombre libro con tres propiedades autor, genero y año
var tienePropiedad = libro.hasOwnProperty('nombre');
// hemos creado una variable para preguntar si nuestro objeto libro tiene una propiedad
// esta propiedad es nombre usamos hasOwnProperty para hacer la pregunta
console.log(tienePropiedad);
// imprimimos el valor de nuestra vairable tienePropiedad y retorna false pues no hay una propiedad
// de con dicho nombre
var tienePropiedad = libro.hasOwnProperty('autor');
// Hemos usado la misma variable para preguntar si tiene la propiedad "autor" 
console.log(tienePropiedad);
// La respues es true pues "autor" es una propiedad del objeto libro

/** OPERADOR KEYS */
// Este operador nos devuelve todas las propiedades de un objeto
// Funciona de la siguiente manera
var verTodasLasPropiedades = Object.keys(libro)
// Creamos una variable VerTodasLasPropiedades que con Object.keys(libro), nos indica
// que en esa variable llamara a todas las propiedades, ojo pero sin  los valores
console.log(verTodasLasPropiedades);
// Imprimimos la variable y nos responde con la porpiedad autor, genero y año
// practicamente hace un recorrido por todas las propiedades del objeto

/** BUCLE FOR IN */
// Es como el ciclo for para objetos recorrido de todas las propiedades de un obeto
// funciona de la siguiente manera
var mundo = {
    continentes: 7,
    paises: 195,
    oceanos: 5
};
// Creamos un objeto con nombre mundo y 3 propiedades contienentes, paises y oceanos con sus respectivos valores
for(var prop in mundo) {
// Llamamos el bucle for donde creamos una variable "Prop" luego in mundo donde indicamos de que objeto vamos a llamar 
// Imprimimos de la siguiente manera para llamar la propiedad
    console.log('Esta es la Propiedad: '+ prop);
// Imprimimos de la siguiente manera para llamar el valor de dicha propiedad
    console.log('Cuyo Valor es: ' + mundo[prop]);
};

/* OBJETO THIS */
// Hace referencia a un contexto
// Creamos un objeto de nombre mascota con 4 propiedades
// La cuarta propiedad es una funcion 
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Aleman',
    amistoso: true,
    Dueño: 'Maria Lopez',
    info: function (){
        console.log('Mi perro es un: ' + this.raza);
// Usamos this. para llamar al valor de la propiedad en este caso raza ese es el contexto de esta propiedad
// En caso de no usar This nos sale error toma a raza con un valor sin propiedad
    },
};

mascota.info();