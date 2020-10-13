import { Injectable } from '@angular/core';

@Injectable()
export class KatethService {

    private characters:any[] = [
        {
          nombre: "Roland", biografy: "", img: "./assets/img/Roland.png"
        },
        {
          nombre: "Jake", biografy: "", img: "./assets/img/Jake.jpg"
        },
        {
          nombre: "Sussanha", biografy: "", img: "./assets/img/susannahcalla.jpg"
        },
        {
          nombre: "Eddie", biografy: "", img: "./assets/img/eddiedean.jpg"
        },
        {
          nombre: "Acho", biografy: "", img: "./assets/img/acho.jpg"
        }
    ]

    constructor(){
        console.log("Servicio para usar");
    }

    getCharacters() {
        return this.characters;
    }
}