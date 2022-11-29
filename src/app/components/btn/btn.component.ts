import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  constructor(
    /**
     * Inyeccion de dependencias
     * Hace uso del servicio creado pero no se suscribe al valor que este observa
     */
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
  }

  addString() {
    this.storeService.addString('HOLA');
  }

}
