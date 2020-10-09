import { Injectable } from '@angular/core';

@Injectable()
export class KatethService {

    private characters:any[] = [
        {
          nombre: "Roland", biografy: "", img: ""
        },
        {
          nombre: "Jake", biografy: "", img: ""
        },
        {
          nombre: "Sussanha", biografy: "", img: ""
        },
        {
          nombre: "Eddie", biografy: "", img: ""
        },
        {
          nombre: "Acho", biografy: "", img: ""
        }
    ]

    constructor(){
        console.log("Servicio para usar");
    }

    getCharacters() {
        return this.characters;
    }
}