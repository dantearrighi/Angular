import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientJsonpModule, HttpClientModule } from  '@angular/common/http';

// Services
import { PeliculasService } from './services/peliculas.service.service';

// Components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// Importar Rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

// Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
  
    SearchComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientJsonpModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash: true} )
    
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
