import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'; // Map


@Injectable()
export class PeliculasService {

  private apikey:string = "1e5afaf6bda6fab2245f0f93f39af1d1";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any[] = [];


  constructor( private _http: HttpClient) { }

  private getURL(request: string): string {

    return `${this.urlMoviedb}${request}&api_key=${this.apikey}&language=es`;

    }


  getPopulares(){
                    
    const request = '/discover/movie?sort_by=popularity.desc';
    const x = this.getURL(request);
 
    return this._http.jsonp(x, 'callback=JSONP_CALLBACK').pipe(map( res => res.results));
                                                     
  }
  buscarPeliculas(termino:string){
                    
    const request = '/search/movie?';
    const x = this.getURL(request) + `&query=${ termino }&page=1&include_adult=true`;
 
    
    return this._http.jsonp(x, 'callback=JSONP_CALLBACK').pipe(map( res => {
      
      this.peliculas = res.results;
      console.log(this.peliculas);
      return res.results;
    }));
                                                     
  }
  getPopularesKids(){
                    
    const request = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    const x = this.getURL(request);
 
    return this._http.jsonp(x, 'callback=JSONP_CALLBACK').pipe(map( res => res.results));
                                                     
  }

   getCartelera() {
    
     let fechai = new Date();
     let fechaf = new Date();
     fechaf.setDate( fechaf.getDate() + 7);

     let fechaiStr = `${ fechai.getFullYear() }-${ fechai.getMonth() }-${ fechai.getDay() }`;
     let fechafStr = `${ fechaf.getFullYear() }-${ fechaf.getMonth() }-${ fechaf.getDay() }`;

     const request = `/discover/movie?primary_release_date.gte=${ fechaiStr }&primary_release_date.lte=${ fechafStr }`;
     const x = this.getURL(request);

     // return this._http.get( x ).pipe(map( res=>res));
     return this._http.jsonp( x, 'callback=JSONP_CALLBACK' ).pipe(map( res=> res.results));



  }
  

}
