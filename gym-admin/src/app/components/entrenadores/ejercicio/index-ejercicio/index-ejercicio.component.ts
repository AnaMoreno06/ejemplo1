import { Component, OnInit } from '@angular/core';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-index-ejercicio',
  templateUrl: './index-ejercicio.component.html',
  styleUrls: ['./index-ejercicio.component.scss']
})
export class IndexEjercicioComponent implements OnInit {

  public ejercicios: any = [];
  constructor(private _ejercicioService: EjercicioService) { }

  ngOnInit(): void {
    this._ejercicioService.getEjercicios().subscribe(
      response => {
        this.ejercicios = response;
      }, error => {
        console.log(error);
      }
    );
  }

}
