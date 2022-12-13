import { Component, OnInit } from '@angular/core';

/*
Si estoy situado en un componenete y quiero volver al compoenente anterio debo:
1. import { Location } from '@angular/common';
2. inyectar la dependencia: private location: Location
3. llamar la funcion:
goToBack() {
  this.location.back();
}
*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
