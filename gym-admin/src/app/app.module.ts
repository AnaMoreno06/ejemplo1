import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexClienteComponent } from './components/clientes/index-cliente/index-cliente.component';
import { AddClienteComponent } from './components/clientes/add-cliente/add-cliente.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdateClienteComponent } from './components/clientes/update-cliente/update-cliente.component';
import { IndexEntrenadorComponent } from './components/entrenadores/index-entrenador/index-entrenador.component';
import { AddEntrenadorComponent } from './components/entrenadores/add-entrenador/add-entrenador.component';
import { UpdateEntrenadorComponent } from './components/entrenadores/update-entrenador/update-entrenador.component';
import { IndexEjercicioComponent } from './components/entrenadores/ejercicio/index-ejercicio/index-ejercicio.component';
import { AddEjercicioComponent } from './components/entrenadores/ejercicio/add-ejercicio/add-ejercicio.component';
import { IndexTestComponent } from './components/entrenadores/test/index-test/index-test.component';
import { UpdateEjercicioComponent } from './components/entrenadores/ejercicio/update-ejercicio/update-ejercicio.component';
import { AddTestComponent } from './components/entrenadores/test/add-test/add-test.component';
import { UpdateTestComponent } from './components/entrenadores/test/update-test/update-test.component';
import { AddEjerciciosComponent } from './components/entrenadores/test/add-ejercicios/add-ejercicios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    IndexClienteComponent,
    AddClienteComponent,
    PageNotFoundComponent,
    UpdateClienteComponent,
    IndexEntrenadorComponent,
    AddEntrenadorComponent,
    UpdateEntrenadorComponent,
    IndexEjercicioComponent,
    AddEjercicioComponent,
    IndexTestComponent,
    UpdateEjercicioComponent,
    AddTestComponent,
    UpdateTestComponent,
    AddEjerciciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
