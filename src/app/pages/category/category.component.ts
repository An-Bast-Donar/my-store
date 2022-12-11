import { Component, OnInit } from '@angular/core';
// Importacion requerida para leer los parametros de la url asociada a este componente (pagina)
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // El nombre del parametro debe ser el mismo que el espesificado en la url en app-routing
    this.route.paramMap.subscribe(params => {
      let categoryId = params.get('id');
      console.log("El parametro es:", categoryId);
    });

  }

}
