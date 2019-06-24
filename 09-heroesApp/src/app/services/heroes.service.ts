import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {


  private url ='https://crud-test-6d53f.firebaseio.com';
  constructor( private http: HttpClient) { }

  crearHeroe( heroe: HeroeModel ){

    return this.http.post(`${ this.url}/heroes.json`, heroe)
      .pipe(
        map( (resp:any) => {
         heroe.id = resp.name;
         return heroe;
      })
    );
  }

  actualizarHeroe( heroe: HeroeModel ){

    // Makes a copy of heroe object and his properties
    // into the heroeTemp 
    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${ this.url }/heroes/${ heroe.id}.json`, heroeTemp );
    
    
  }


  borrarHeroe( id: string ){
    return this.http.delete(`${ this.url}/heroes/${ id }.json`);
  } 


  getHeroe( id:string){
    return this.http.get( `${ this.url}/heroes/${ id }.json` );
  }

  getHeroes() {

    return this.http.get(`${ this.url}/heroes.json`)
            .pipe(
              map( this.crearArreglo )
            );
  }

  crearArreglo( heroesObj:object ){

    const heroes: HeroeModel[] = [];


    Object.keys ( heroesObj ).forEach( key =>{

      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push( heroe );

    })
    if (heroesObj === null) { return []; };

    return heroes;
  }
}


