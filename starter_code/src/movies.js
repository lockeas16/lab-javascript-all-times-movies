/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(movies){
  return movies.map(peli => {
    // se hace copia del objeto para evitar que se modigique el objeto original
    let nuevaPeli = Object.assign({}, peli);
    // se invoca funcion para convertir duracion a minutos
    nuevaPeli.duration = convertDuration(nuevaPeli.duration);
    return nuevaPeli;
  })
}

// funcion auxiliar para convertir duracion a minutos
function convertDuration (par){
  // se divide la cadena por un espacio, para tener una o dos partes,
  // una con la de horas y otra con la de minutos
  var hrmin = par.split(" ");

  // se genera un nuevo arreglo donde ya se ha recuperado la cantidad de 
  // minutos de las horas y los minutos como tal
  var hrminnumber = hrmin.map (function (item){ 
  
  // si la cadena tiene 'h', se hace split para elminar la h 
  // y recuperar el numero  
  if (item.includes('h'))
    return parseInt(item.split('h'))*60

  // si la cadena tiene 'min', se hace split para elminar el min
  // y recuperar el numero  
  if (item.includes('min'))
    return parseInt(item.split('min'))

  }) 

  // despues de tener el nuevo arreglo, se reduce para devolver una suma
  return hrminnumber.reduce (function(acc,val){
      return acc += val    
  },0);
}


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies
function dramaMoviesRate(movies){
  // se filtra el arreglo de entrada por solo aquellas peliculas cuyo genero sea drama
  let dramaMovies = movies.filter(peli => peli.genre.includes('Drama'));

  // si no hay ninguna pelicula de drama, se devuelve undefined
  if (dramaMovies.length === 0) return undefined;

  // aplicamos funcion reduce para hacer suma de la calificacion de cada pelicula de drama
  let promedio = dramaMovies.reduce(function (acc, drama){
    // si la propiedad rate esta indefinida o es igual a una cadena vacia, se toma como cero
    if (drama.rate === undefined || drama.rate === "") return acc+= 0;
    // de otro modo, se acumula su valor despues de convertirlo a un float
      return acc += parseFloat(drama.rate);
  },0) / dramaMovies.length;
  
  // Se usa metodo toFixed para solo devolver los ultimos decimales, sin 
  // embargo este metodo devuelve un String por lo que se vuelve a usar
  // parseFloat para convertirlo de vuelta a un Float y devolverlo
  return parseFloat(promedio.toFixed(2));
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies (movies){
  // se devuelve undefined si el arreglo esta vacio
  if (movies.length === 0) return undefined;

  // se filtra el arreglo de entrada por solo aquellas peliculas cuyo
  // director sea Spilberg y que sean peliculas de drama
  let spielbergMovies = movies.filter(peli => peli.director == 'Steven Spielberg' && peli.genre.includes('Drama'));

  if (spielbergMovies.length === 0) return 'Steven Spielberg directed 0 drama movies!';

  return "Steven Spielberg directed " + spielbergMovies.length + " drama movies!";

}


// Order by title and print the first 20 titles


// Best yearly rate average
