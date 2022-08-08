import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

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

  // old way
  // add(event: any){
  //   event.PreventDefault();
  // console.log(event);
  // }

}
