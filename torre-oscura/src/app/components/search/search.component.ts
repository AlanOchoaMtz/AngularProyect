import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KatethService } from '../../services/kateth.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',})
export class SearchComponent implements OnInit {

  constructor(private active: ActivatedRoute, private _kateth:KatethService) { }

  characters:any[] = [];
  termino:string;

  ngOnInit(): void {
    this.active.params.subscribe( params => {
      this.termino = params['termino'];
      this.characters = this._kateth.buscarPersonajes(params['termino']);
    })
  }

}
