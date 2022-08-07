import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroes: string[] = ['Hulk', 'CA', 'Ag'];
  heroeErased: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  clearHeroe(): void {
    // this.heroes.pop();  //REMOVE pop, slice, unshift, etc
    this.heroeErased = this.heroes.pop() || '';
  }



  resetHeroes(): void {
    this.heroes = ['Hulk', 'CA', 'Ag']; 
  }
}

