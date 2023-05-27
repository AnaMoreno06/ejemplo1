import { Component, OnInit } from '@angular/core';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-ejercicio',
  templateUrl: './update-ejercicio.component.html',
  styleUrls: ['./update-ejercicio.component.scss']
})
export class UpdateEjercicioComponent implements OnInit {

  public ejercicio: any = {};
  public id: string = '';

  constructor(private _ejercicioService: EjercicioService, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        this.loadData();
      }
    )
  }

  loadData(): void {
    this._ejercicioService.getEjercicioById(this.id, '').subscribe(
      response => {
        this.ejercicio = response;
      }, error => {
        console.log(error);
      }
    );
  }

  updateEjercicio(updateForm: NgForm): void {
    this._ejercicioService.updateEjercicioById(this.ejercicio, this.id, '').subscribe(
      response => {
        alert('Funciona');
      }, error => {
        alert(error);
      }
    );
  }
}
