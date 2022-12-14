import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm, FormArray } from '@angular/forms';

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

  formul = {
    name: 'Milton'
  };

  /*
  Angular ya cuenta con diferetntes validadores para los formulario
  */
  formulario: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]],
    email: ['', Validators.email],
    phone: [''],
    color: ['#000000'],
    date: [''],
    age: [18, [Validators.min(18), Validators.max(100)]],
    category: [''],
    tag: [''],
    agree: [false, [Validators.requiredTrue]],
    gender: [''],
    zone: [''],
  });;

  /*
  Se pueden anidar formularios
  */
  formularioAnidado: FormGroup = this.formBuilder.group({
    fullName: this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]],
      last: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]]
    }),
    email: ['', Validators.email],
    phone: [''],
    color: ['#000000'],
    date: [''],
    age: [18, [Validators.min(18), Validators.max(100)]],
    category: [''],
    tag: [''],
    agree: [false, [Validators.requiredTrue]],
    gender: [''],
    zone: [''],
  });

  /*
  Formulario con arrays
  */
  formularioArray = this.formBuilder.group({
    addresses: this.formBuilder.array([this.buildAddress()])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.nameField.valueChanges
      .subscribe(value => {
        console.log(value);
      });
    this.form.valueChanges
      .subscribe(value => {
        console.log(value);
      });
    this.formulario.valueChanges
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
    console.log(this.nameForm?.value);
  }
  save() {
    console.log(this.form.value);
  }

  /*
  Ejemplo form con formbuilder
  */
  get nameFormmulario() {
    return this.formulario.get('name');
  }
  get isNameFormularioValid() {
    return this.nameFormmulario?.touched && this.nameFormmulario?.valid;
  }
  get isNameFormularioInvalid() {
    return this.nameFormmulario?.touched && this.nameFormmulario?.invalid;
  }
  getNameFormularioValue() {
    console.log(this.nameFormmulario?.value);
  }
  saveFormulario() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  /*
  Forma de llamar a los formularios anidados
  */
  get nameAnidado() {
    return this.formularioAnidado.get('fullName.name');
  }
  get isNameAnidadoValid() {
    return this.nameAnidado?.touched && this.nameAnidado?.valid;
  }
  get isNameAnidadoInvalid() {
    return this.nameAnidado?.touched && this.nameAnidado?.invalid;
  }

  onSubmit(formul: NgForm) {
    console.log('in onSubmit: ', formul.name, formul.value, formul.valid);
  }

  /*
  Ejemplo de romulario con array
  */
  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  buildAddress(): FormGroup {
    return this.formBuilder.group({
      street: ['', Validators.required]
    });
  }

  get addresses(): FormArray {
    return this.formularioArray.get('addresses') as FormArray;
  }

  onSubmitArray(formularioArray: FormGroup) {
    console.log('in onSubmitArray: ', formularioArray.value, formularioArray.valid);
  }

}
