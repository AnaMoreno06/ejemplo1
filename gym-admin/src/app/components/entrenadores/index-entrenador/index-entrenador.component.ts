import { Component, OnInit } from '@angular/core';
import { EntrenadoresService } from 'src/app/services/entrenadores.service';

@Component({
  selector: 'app-index-entrenador',
  templateUrl: './index-entrenador.component.html',
  styleUrls: ['./index-entrenador.component.scss']
})
export class IndexEntrenadorComponent implements OnInit {

  public entrenadores: any = [];
  constructor(private _entrenadorService: EntrenadoresService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._entrenadorService.getEntrenadores('').subscribe(
      response => {
        this.entrenadores = response;
      },error => {
        console.log(error);
      }
    );
  }

}
