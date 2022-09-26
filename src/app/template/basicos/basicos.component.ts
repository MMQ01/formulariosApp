import { Component, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm

  initForm={
    producto:'',
    precio:0,
    existencia:0
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid && 
            this.miFormulario?.controls['producto']?.touched
  }

  precioValido():boolean{
    return this.miFormulario?.controls['precio']?.invalid && 
            this.miFormulario?.controls['precio']?.touched
  }
  guardar(){
    // console.log(this.miFormulario);
   console.log('Posteo correcto');

   this.miFormulario.resetForm({
    precio: 0,
    existencia: 0
   })
   
  }

}
