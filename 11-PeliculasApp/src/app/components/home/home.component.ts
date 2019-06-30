import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {


  pelisPopulares: any;
  pelisCartelera: any;
  pelisPopChild: any;
  
  mensajeError: string;


  constructor( public _ps: PeliculasService) { 

        _ps.getCartelera()
          .subscribe( data => this.pelisCartelera = data);

        _ps.getPopulares()
          .subscribe( data => this.pelisPopulares = data);

        _ps.getPopularesKids()
          .subscribe( data => this.pelisPopChild = data);

  }

  ngOnInit() {
  }

}
