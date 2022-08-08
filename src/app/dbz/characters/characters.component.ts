import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {

  @Input() characters: Character[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
