import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { EntrenadoresService } from 'src/app/services/entrenadores.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public clientes: any = [];
  public entrenadores: any = [];

  constructor(public _clienteService: ClienteService, public _entrenadorService: EntrenadoresService) { }

  ngOnInit(): void {
    this._entrenadorService.getEntrenadores('').subscribe(
      response => {
        this.entrenadores = response;
      }, error => {

      }
    );

    this._clienteService.getClientes().subscribe(
      response => {
        this.clientes = response;
      }, error => {

      }
    );
  }

}
