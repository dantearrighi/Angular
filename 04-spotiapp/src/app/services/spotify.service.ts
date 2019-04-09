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
      'Authorization':'Bearer BQDR8WTue6ydwiUj8xJ4nG3Me_0df8U-OzZjG_20UWBBlv2fW5nqT9UyDG4AvbxaXxGg5JCZHWns3sSWzSI'
    });

    return this.http.get(url , { headers });
  }

  getNewReleases(){

    return  this.getQuery('browse/new-releases?limit=20' )
              .pipe( map( (data:any) => data['albums'].items ));
      }

  
  getArtista ( termino: string) {
      
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15&offset=5` )
          .pipe( map( (data:any) => data['artists'].items))

      }

  }

