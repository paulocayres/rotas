//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Outras Bibliotecas
import { MaterializeModule } from 'angular2-materialize';


//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


//Serviços

//Módulos
//import { routing } from './app.routing';
//import { AlunosComponent } from './alunos/alunos.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    //AlunosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    CursosModule,
    AlunosModule,
    AppRoutingModule
  ],

  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
