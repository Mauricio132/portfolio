import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-switches',
  templateUrl: './reactive-switches.component.html',
  styleUrls: ['./reactive-switches.component.css']
})
export class ReactiveSwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  btnDisabled : boolean = true;


  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.miFormulario.reset({ 
      ...this.persona,
      condiciones: false
    });

    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => {
      // delete form.condiciones;
      this.persona = rest;
      this.btnDisabled = !this.miFormulario.valid;
    })

  }

  guardar() {

    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;

    console.log(this.miFormulario.value);

  }

}
