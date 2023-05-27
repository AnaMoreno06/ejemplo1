import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { EntrenadoresService } from 'src/app/services/entrenadores.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.scss']
})
export class UpdateClienteComponent implements OnInit {

  public cliente: any = {
    entrenador: 'Entrenador'
  };
  public id: string = '';
  public entrenadores: any = [];

  constructor(public _clienteService: ClienteService, public _entrenadorService: EntrenadoresService, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        this.loadData();
      }
    );
  }

  loadData(): void {
    this._clienteService.getClienteById(this.id, '').subscribe(
      response=>{
        this.cliente = response;
        this.cliente.entrenador = this.cliente.empleado_id;
      }, error=>{
        console.log(error);
      }
    );

    this._entrenadorService.getEntrenadores('').subscribe(
      response => {
        this.entrenadores = response;
      }, error => {

      }
    );
  }

  updateCliente(registroForm: NgForm): void {
    this.cliente.imc = this.cliente.peso / this.cliente.altura**2;
    this._clienteService.updateCliente(this.cliente, this.id, '').subscribe(
      response => {
        alert('Funciona');
      },error => {
        alert(error);
      }
    );
  }

  checkCedula(): void {
    let cedulaAlert = document.getElementById('cedulaAlert');
    
    if(this.cliente.cedula < 0){
      this.monstrarAlerta(cedulaAlert, "La Cedula no puede ser un número negativo");
      this.cliente.cedula = '';
    }else if(this.cliente.cedula.toString().length < 7){
      this.monstrarAlerta(cedulaAlert, "La Cedula no puede menos de 7 digitos");
    }else if(this.cliente.cedula.toString().length > 11){
      this.monstrarAlerta(cedulaAlert, "La Cedula no puede mas de 11 digitos");
    }else{
      this.ocultarAlert(cedulaAlert);
    }
  }

  checkEmail(): void {
    let correoAlert = document.getElementById('correoAlert');
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if(!reg.test(this.cliente.correo)){
      this.monstrarAlerta(correoAlert, 'El correo no es valido')
    }else{
      this.ocultarAlert(correoAlert);
    }
  }

  checkTelefono(): void {
    let telefonoAlert = document.getElementById('telefonoAlert');
    
    if(this.cliente.telefono < 0){
      this.monstrarAlerta(telefonoAlert, "El telefono no puede ser un número negativo");
      this.cliente.telefono = '';
    }else if(this.cliente.telefono.toString().length < 7){
      this.monstrarAlerta(telefonoAlert, "El telefono no puede tener menos de 7 digitos");
    }else if(this.cliente.telefono.toString().length > 12){
      this.monstrarAlerta(telefonoAlert, "El telefono no puede tener mas de 12 digitos");
    }else{
      this.ocultarAlert(telefonoAlert);
    }
  }

  checkPeso(): void{
    let pesoAlert = document.getElementById('pesoAlert');
    
    if(this.cliente.peso < 0){
      this.monstrarAlerta(pesoAlert, "El peso no puede ser un número negativo");
      this.cliente.peso = '';
    }else if(this.cliente.peso < 45){
      this.monstrarAlerta(pesoAlert, "El peso no puede ser menos de 45 kg");
    }else if(this.cliente.peso > 500){
      this.monstrarAlerta(pesoAlert, "El peso no puede ser mayor de 500 kg");
    }else{
      this.ocultarAlert(pesoAlert);
    }
  }

  checkAltura(): void{
    let alturaAlert = document.getElementById('alturaAlert');
    
    if(this.cliente.altura < 0){
      this.monstrarAlerta(alturaAlert, "La altura no puede ser un número negativo");
      this.cliente.altura = '';
    }else if(this.cliente.altura < 1.45){
      this.monstrarAlerta(alturaAlert, "La altura no puede ser menos de 1.45 metros");
    }else if(this.cliente.altura > 2.60){
      this.monstrarAlerta(alturaAlert, "La altura no puede ser mayor de 2.60 metros");
    }else{
      this.ocultarAlert(alturaAlert);
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

