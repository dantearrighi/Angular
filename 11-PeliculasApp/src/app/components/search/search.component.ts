import { Component, OnInit, Input} from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})

export class SearchComponent   {

  peliculasEncontradas: any[]=[];
  loading: boolean ;
  buscar:string = "";

  constructor( private _ps:PeliculasService,
               public route:ActivatedRoute ) {

                this.route.params.subscribe( parametros => {
                  console.log(parametros);
                  if(parametros['texto']){
                    this.buscar= parametros['text'];
                    this.buscarPelicula();
                  };
                })
    
   }   

  //TODO LA VERDAD es que este ejercicio fue una porqueria
  buscarPelicula( ){

    /* if( this.buscar.length ==0 ){
      return;
    } */
    this.loading = true;
      this._ps.buscarPeliculas( this.buscar  )
      .subscribe( (data:any) => {
      console.log(data);
      this.peliculasEncontradas = data;
      this.loading=false;
  })

  };

}