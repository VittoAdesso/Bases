import { Component, OnInit } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 10000
    }, 
    {
      name: 'Vegeta',
      power: 10000
    }
  ] 

  newCharacter: Character = {
    name: '', 
    power: 0 ,
  }

  constructor() { }

  ngOnInit(): void {
  }

  // with ngSubmit, prevnt refresh, controlling eventDefault
  add(){
    if(this.newCharacter.name.trim().length === 0){
      return;
    }

      this.characters.push( this.newCharacter);
      this.newCharacter ={
        name: '',
        power: 0
      }
  }

// old way
  // add(event: any){
  //   event.PreventDefault();
  // console.log(event);
  // }

}
