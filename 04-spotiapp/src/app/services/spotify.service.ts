import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 

    console.log('Spotify service listo');
  }

  getQuery( query: string )  {

    const url = `https://api.spotify.com/v1/${ query } `;

    const headers = new HttpHeaders ({
      'Authorization':'Bearer BQD_jV4-kGAU8GNZXzouEk2sBCn9fFnXusIhg_lvh9mgg2f1gSbOsI3XZd-GitSLbPialuB1FO5PyPfyMD0'
    });

    return this.http.get(url , { headers });
  }

  getNewReleases(){

    return  this.getQuery('browse/new-releases?limit=20' )
              .pipe( map( (data:any) => data['albums'].items ));
      }

  
  getArtistas ( termino: string) {
      
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15&offset=5` )
          .pipe( map( (data:any) => data['artists'].items))

      }
  
  getArtista ( id: string) {
      
    return this.getQuery(`artists/${ id }` );
          //.pipe( map( (data:any) => data['artists'].items))

      }

  }

