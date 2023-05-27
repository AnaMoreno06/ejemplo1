import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-add-ejercicios',
  templateUrl: './add-ejercicios.component.html',
  styleUrls: ['./add-ejercicios.component.scss']
})
export class AddEjerciciosComponent implements OnInit {

  public ejercicios_tests: any = {};
  public ejercicios: any = [];
  public ejercicio: any = {
    ejercicio_id : 1
  };
  public id: string = '';

  constructor(private _ejercicioService: EjercicioService, private _route : ActivatedRoute, 
    private _testService: TestService) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
      }
    );

    this._ejercicioService.getEjercicios().subscribe(
      response => {
        this.ejercicios = response;
      }, error => {
        alert(error);
      }
    );

    this.loadData();
  }

  loadData(): void {
    this._testService.getEjerciciosByTest(this.id).subscribe(
      response => {
        this.ejercicios_tests = response;
      }, error => {
        console.log( error);
      }
    );
  }

  addEjercicio(): void {
    this._testService.addEjercicioByTest(this.ejercicio, this.id, '').subscribe(
      response => {
        alert('Funciona');
        this.loadData();
      }, error => {
        alert(error);
      }
    );
  }
}
