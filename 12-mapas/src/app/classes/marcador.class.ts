export class Marcador{

    constructor(public lat: number, public lng: number, public titulo?: string, public desc?: string){

        if( !this.titulo ){
            this.titulo = 'Sin titulo';
        }
        if( !this.desc){
            this.desc = 'Sin descripcion';
        }

    }
}