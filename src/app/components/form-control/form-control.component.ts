import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  /*
  los form controls representan inputs en nuestra vista y por parametro le podemosenviar el valor por defecto
  tambien podemos suscribirnos a estos datos o consultarlos una vez cada cierta accion
  tiene por defecto tres parametros de entrada, valor, validaciones syncronas y validaciones asincronas
  */
  nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#ff000');
  dateField = new FormControl('');
  ageField = new FormControl(10);

  categoryField = new FormControl('');
  tagField = new FormControl('');

  agreeField = new FormControl(false);
  genderField = new FormControl('');
  zoneField = new FormControl('');

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  });

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges
      .subscribe(value => {
        console.log(value);
      });
  }

  /*
  Ejemplos para formControl
  */
  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }
  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }
  getNameFieldValue() {
    console.log(this.nameField.value);
  }

  /*
  Ejemplos para formGroup
  */
  get nameForm() {
    return this.form.get('name');
  }
  get isNameFormdValid() {
    return this.nameForm?.touched && this.nameForm?.valid;
  }
  get isNameFormInvalid() {
    return this.nameForm?.touched && this.nameForm?.invalid;
  }
  getNameFormdValue() {
    console.log(this.nameField.value);
  }
  save() {
    console.log(this.form.value);
  }

}
