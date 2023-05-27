import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public usuario:any={};
  constructor(private _empleadoService: EmpleadoService, private _router: Router) { }

  ngOnInit(): void {
    this._empleadoService.getEmpleadoById(localStorage.getItem('id') || '').subscribe(
      response => {
        console.log(response);
        this.usuario = response;
      }, error => {
        console.log(error);
      }
    );
  }

  closeSesion(): void {
    localStorage.clear();
    this._router.navigate(['']);
  }

}
