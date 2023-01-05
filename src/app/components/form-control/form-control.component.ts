import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  /*
  los form controls representan inputs en nuestra vista y por parametro le podemosenviar el valor por defecto
  tambien podemos suscribirnos a estos datos o consultarlos una vez cada cierta accion
  */
  nameField = new FormControl('');
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000000');
  dateField = new FormControl('');
  ageField = new FormControl(12);

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges
      .subscribe(value => {
        console.log(value);
      });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

}
