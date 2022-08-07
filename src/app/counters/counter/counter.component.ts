import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  title: string = 'Contador App';
  number1: number = 20;
  number2: number = 2;
  number3: number = 30;
  basei: number = 5; 
  base: number = 5; 
  number: number = 5; 

  sumar(){
    this.number2 += 1;
  }
  
  rest(){
    this.number2 -= 1;
  }
  
  acumulate( valor: number ){
    this.number3 += valor
  }

  incrementBase(){
      this.basei +=5;
  }
  decrementBase(){
    this.basei -=5;
}

operation( valor: number ){
  this.number += valor;
}

  constructor() { }

  ngOnInit(): void {
  }

}
