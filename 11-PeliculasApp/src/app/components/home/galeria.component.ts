import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {


  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor(private router: Router) {

    
   }

   verPelicula( item:any ) { 
    
    console.log(item);
    let peliculaID: any;

    if( item.id ) {
      peliculaID = item.id;
      this.router.navigate([ '/pelicula', peliculaID]);
    } 
    
    
  };

  ngOnInit() {
  }

}
