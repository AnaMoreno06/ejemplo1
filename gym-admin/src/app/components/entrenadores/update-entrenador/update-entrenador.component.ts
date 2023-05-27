import { Component, OnInit } from '@angular/core';
import { EntrenadoresService } from 'src/app/services/entrenadores.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-entrenador',
  templateUrl: './update-entrenador.component.html',
  styleUrls: ['./update-entrenador.component.scss']
})
export class UpdateEntrenadorComponent implements OnInit {

  public entrenador: any = {};
  public id: string = '';

  constructor(private _entrenadorService: EntrenadoresService, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        this.loadData();
      }
    );
  }

  loadData(): void {
    this._entrenadorService.getEntrenadorById(this.id, '').subscribe(
      response=>{
        this.entrenador = response;
      }, error=>{
        console.log(error);
      }
    );
  }

  updateEntrenador(registroForm: NgForm): void {
    this._entrenadorService.updateEntrenadorById(this.entrenador, this.id, '').subscribe(
      response => {
        alert('Funciona');
      },error => {
        alert(error);
      }
    );
  }

  checkCedula(): void {
    let cedulaAlert = document.getElementById('cedulaAlert');
    
    if(this.entrenador.cedula < 0){
      this.monstrarAlerta(cedulaAlert, "La Cedula no puede ser un número negativo");
      this.entrenador.cedula = '';
    }else if(this.entrenador.cedula.toString().length < 7){
      this.monstrarAlerta(cedulaAlert, "La Cedula no puede menos de 7 digitos");
    }else if(this.entrenador.cedula.toString().length > 11){
      this.monstrarAlerta(cedulaAlert, "La Cedula no puede mas de 11 digitos");
    }else{
      this.ocultarAlert(cedulaAlert);
    }
  }

  checkEmail(): void {
    let correoAlert = document.getElementById('correoAlert');
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if(!reg.test(this.entrenador.correo)){
      this.monstrarAlerta(correoAlert, 'El correo no es valido')
    }else{
      this.ocultarAlert(correoAlert);
    }
  }

  checkTelefono(): void {
    let telefonoAlert = document.getElementById('telefonoAlert');
    
    if(this.entrenador.telefono < 0){
      this.monstrarAlerta(telefonoAlert, "El telefono no puede ser un número negativo");
      this.entrenador.telefono = '';
    }else if(this.entrenador.telefono.toString().length < 7){
      this.monstrarAlerta(telefonoAlert, "El telefono no puede tener menos de 7 digitos");
    }else if(this.entrenador.telefono.toString().length > 12){
      this.monstrarAlerta(telefonoAlert, "El telefono no puede tener mas de 12 digitos");
    }else{
      this.ocultarAlert(telefonoAlert);
    }
  }

  monstrarAlerta(alert:HTMLElement | null, str: string): void{
    alert && (alert.innerText = str);
    alert?.classList.remove('fade');
    alert?.classList.add('show');
  }

  ocultarAlert(alert:HTMLElement | null){
    alert && (alert.innerText = "");
    alert?.classList.remove('show');
    alert?.classList.add('fade');
  }
}


