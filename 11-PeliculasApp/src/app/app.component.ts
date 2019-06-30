import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service.service';

//TODO De todo
//Navbar: Home - busqueda
//HOME: 
//    Peliculas de cartelera de cine actual
//    Peliculas populares
//    Peliculas populares de niños
//    Ver información de la pelicula
//BUSCADOR:
//    Mostrar resultados de forma elegante y mostrar tapa de pelicula
//INFO DE LA PELI
//    Mostrar peli grande, sinopsis,
//    boton volver.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeliculasApp';



  constructor ( public _ps: PeliculasService  ){

    
  }
}
  
