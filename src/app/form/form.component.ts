import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // Definir operadores
  operadores = [
    { id: '+', name: 'Sumar'},
    { id: '-', name: 'Restar'},
    { id: '*', name: 'Multiplicar'},
    { id: '/', name: 'Dividir'},
  ];

  // Definir Form
  calculadora = new FormGroup({
    operando1: new FormControl(''),
    operando2: new FormControl(''),
    operador: new FormControl('+')
  });
  resultado: number;

  constructor() { }

  ngOnInit() {
  
  }

  // GETTERS
  get operando1() { return this.calculadora.get('operando1'); }
  get operando2() { return this.calculadora.get('operando2'); }
  get operador()  { return this.calculadora.get('operador'); }

  // Realizar el cálculo
  calcular() {

    switch (this.operador.value) {
      case '+': {
        this.resultado = +this.operando1.value + (+this.operando2.value);
        break;
      }
      case '-': {
        this.resultado = +this.operando1.value - (+this.operando2.value);
        break;
      }
      case '*': {
        this.resultado = +this.operando1.value * +this.operando2.value;
        break;
      }
      case '/': {
        if (+this.operando2.value === 0) {
          this.resultado = null;
        } else {
          this.resultado = +this.operando1.value / +this.operando2.value;
        }
      }
    }
  }

}