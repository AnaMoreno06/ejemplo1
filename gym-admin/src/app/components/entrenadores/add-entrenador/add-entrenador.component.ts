import { Component, OnInit } from '@angular/core';
import { EntrenadoresService } from 'src/app/services/entrenadores.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-entrenador',
  templateUrl: './add-entrenador.component.html',
  styleUrls: ['./add-entrenador.component.scss']
})
export class AddEntrenadorComponent implements OnInit {

  public entrenador: any = {};

  constructor(private _entrenadorService: EntrenadoresService) { }

  ngOnInit(): void {
  }

  addEntrenador(registroForm: NgForm): void {
    this._entrenadorService.addEntrenador(this.entrenador, '').subscribe(
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