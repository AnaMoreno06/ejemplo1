import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {EmpleadoService} from 'src/app/services/empleado.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public empleado:any = {};

  constructor(private _empleadoService: EmpleadoService, private _router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm): void {
    this._empleadoService.login(this.empleado).subscribe(
      response => {
        localStorage.setItem('id', response.id);
        this._router.navigate(['/inicio']);
      },error => {
        console.log(error);
        let errorM = error.error.message;
        if( errorM === 'Email incorrecto' ){
          let emailDiv = document.getElementById('email');
          emailDiv?.appendChild(this.alert('danger', 'Email incorrecto'));
        }else if( errorM === 'Contraseña incorrecta' ){
          let passwordDiv = document.getElementById('password');
          passwordDiv?.appendChild(this.alert('danger', 'Contraseña incorrecta'));
        }
        /* iziToast.show({
          backgroundColor: '#dc3424',
          class: 'text-danger',
          position: 'topRight',
          message: 'Error',
          messageColor: '#FFFFFF',
          progressBarColor: '#FFFFFF'
        }); */
      }
    );
  }

  alert(type:string, message:string): HTMLDivElement {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('');
    return wrapper;
  }

  viewPassword(): void{
    let password = document.getElementById("floatingPassword");
    let icono = document.getElementById("passwordIcon");
    if(password?.getAttribute('type') == "password"){
			password?.setAttribute('type', 'text');
      icono?.classList.remove('bi-eye-fill');
      icono?.classList.add('bi-eye-slash-fill');
		}else{
			password?.setAttribute('type', 'password');
      icono?.classList.remove('bi-eye-slash-fill');
      icono?.classList.add('bi-eye-fill');
		} 
      
  }

}
