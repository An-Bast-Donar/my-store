import { Component, OnInit } from '@angular/core';
// Importacion requerida para leer los parametros de la url asociada a este componente (pagina), tanto parametros del routing como parametros tipo query
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Ej: http://localhost:4200/catalogo/1?product=10

    // El nombre del parametro debe ser el mismo que el espesificado en la url en app-routing
    this.route.paramMap.subscribe(params => {
      let categoryId = params.get('id');
      console.log("El parametro routin es:", categoryId);
    });

    // El nombre del query parametro debe ser el mismo del nombre enviado por la url
    this.route.queryParamMap.subscribe(params => {
      let productId = params.get('product');
      let descricionId = params.get('descripcion');
      console.log("El parametro query producto es:", productId);
      console.log("El parametro query descripcion es:", descricionId);
    });

  }

}
