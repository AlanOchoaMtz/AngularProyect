import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KatethService } from './../../services/kateth.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent {

  character:any = {};

  constructor( private activateRoute: ActivatedRoute, private _katethService: KatethService) {
    this.activateRoute.params.subscribe( params => {
      console.log( params['id'] );
      this.character = this._katethService.getCharacter( params['id'] );
      console.log( this.character );
    })
  }

}
