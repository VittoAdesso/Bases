import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {

  @Input() characters: Character[] = [];

  get characters2(){
    return this.dbzService.characters;
  }
  constructor( private dbzService : DbzService ) { }

  ngOnInit(): void {
  }

}
