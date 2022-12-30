import { Component, OnInit } from '@angular/core';
import { OnExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnExit {

  constructor() { }

  onExit() {
    const exit = confirm('¿Seguro desea salir?');
    return exit;
  }

}
