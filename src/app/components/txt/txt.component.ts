import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-txt',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.scss']
})
export class TxtComponent implements OnInit {

  contador: number = 0;

  constructor(
    /**
     * Inyeccion de dependencias
     */
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    /**
     * Se suscribe al valor que el servicio observa
     */
    this.storeService.myObservador$
      .subscribe(data => {
        this.contador = data.length;
      });
  }

}
