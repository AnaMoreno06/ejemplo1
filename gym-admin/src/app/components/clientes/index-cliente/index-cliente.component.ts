import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-index-cliente',
  templateUrl: './index-cliente.component.html',
  styleUrls: ['./index-cliente.component.scss']
})
export class IndexClienteComponent implements OnInit {

  public clientes: any = [];
  constructor(public _clienteService: ClienteService) { }

  ngOnInit(): void {
    this._clienteService.getClientes().subscribe(
      response => {
        this.clientes = response;
      }
    );
  }

}
