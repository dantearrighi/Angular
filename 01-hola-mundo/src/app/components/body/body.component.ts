
import {Component} from '@angular/core'

@Component({
    selector:'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar = true;

    frase:any = {
    mensaje: '"Son coincidencias cuando uno no puede ver"',
    autor: 'El abogado'
    };

    frase2:any={
        mensaje:'"Llename la heladera de queso y vino"',
        autor: 'Abelardo'
    };



personajes: string[] = ['El Abogado','Abelardo','El Cantante']

};