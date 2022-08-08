import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

 private _characters: Character[] = [
    {
      name: 'Goku',
      power: 10000
    }, 
    {
      name: 'Vegeta',
      power: 10000
    }
  ] 
  
  constructor() {  }

  get characters() : Character[] {
    return[...this._characters]
  }

  addCharacterOne(character: Character) {
    this._characters.push(character);
  }
}
