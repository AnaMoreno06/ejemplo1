import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-add-ejercicio',
  templateUrl: './add-ejercicio.component.html',
  styleUrls: ['./add-ejercicio.component.scss']
})
export class AddEjercicioComponent implements OnInit {

  public ejercicio:any ={};

  constructor(private _ejercicioService: EjercicioService) { }

  ngOnInit(): void {
  }

  addEjercicio(registroForm: NgForm): void {
    this._ejercicioService.addEjercicio(this.ejercicio, '').subscribe(
      response => {
        alert('Funciona');
      },error => {
        alert(error);
      }
    );
  }

}
