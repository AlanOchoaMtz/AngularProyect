import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-char-card',
  templateUrl: './char-card.component.html'
})
export class CharCardComponent implements OnInit {

  @Input() character: any= {};
  @Input() index: number;
  @Output() charSelected: EventEmitter<number>;
  
  constructor( private router: Router) {
    this.charSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verCharacter() {
//    this.charSelected.emit( this.index );
    this.router.navigate(['/chars', this.index])
  }
}
