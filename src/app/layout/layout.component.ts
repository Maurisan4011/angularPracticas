import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  switchImagen = false;
  constructor() { }

  ngOnInit() {
  }

  controles = new FormGroup({
    control1: new FormControl(''),
    control2: new FormControl(''),
    control3: new FormControl(''),
    control4: new FormControl('')

  });

  //Getters
  get control1() { return this.controles.get('control1'); }
  get control2() { return this.controles.get('control1'); }
  get control3() { return this.controles.get('control3'); }
  get control4() { return this.controles.get('control4'); }


  mostrarimg(){
    console.log("despues del clic imagen ")
    this.switchImagen = !this.switchImagen
  }
}
