import { Injectable } from '@angular/core';

@Injectable()
export class KatethService {

    private characters:any[] = [
        {
          nombre: "Roland", biografy: "Nacido en Gilead, hijo de Steven Deschain del legado de Eld", img: "./assets/img/Roland.png"
        },
        {
          nombre: "Jake", biografy: "Niño que murió y revivió dos veces para acompañar a Roland en su fatidico viaje", img: "./assets/img/Jake.jpg"
        },
        {
          nombre: "Sussanha", biografy: "Mujer adinerada postrada en una silla de ruedas que es secuestrada por Roland para se parte de su kateth", img: "./assets/img/susannahcalla.jpg"
        },
        {
          nombre: "Eddie", biografy: "Ex drogadicto y jonky segundon de la mafia que busca salvar a su hermano y es salvado por Roland", img: "./assets/img/eddiedean.jpg"
        },
        {
          nombre: "Acho", biografy: "Compañero de Jake, Bilibrambo y de palabras muy cortas para comunicarse", img: "./assets/img/acho.jpg"
        }
    ]

    constructor(){
        console.log("Servicio para usar");
    }

    getCharacters() {
        return this.characters;
    }

    getCharacter( idx: string){
      return this.characters[idx];
    }
}