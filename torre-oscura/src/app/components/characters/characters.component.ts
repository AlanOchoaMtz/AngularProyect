import { Component, OnInit } from '@angular/core';
import { KatethService } from '../../services/kateth.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any[] = [];

  constructor( private _katethService: KatethService) {

   }

  ngOnInit(): void {
    this.characters = this._katethService.getCharacters();
    console.log(this.characters);
  }

}
