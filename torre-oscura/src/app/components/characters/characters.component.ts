import { Component, OnInit } from '@angular/core';
import { KatethService } from '../../services/kateth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any[] = [];

  constructor(
    private router:Router,
    private _katethService: KatethService
  ) {

   }

  ngOnInit(): void {
    this.characters = this._katethService.getCharacters();
    console.log(this.characters);
  }

  verCharacter( idx:number ){
    this.router.navigate( ['/chars',idx] );
  }

}
