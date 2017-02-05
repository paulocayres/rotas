
//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';


//Componentes
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';

//Serviços
import { CursosService } from './cursos.service';

//Módulos
import { CursosRoutingModule } from './cursos.routing.module';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
      CommonModule,
      CursosRoutingModule
      //RouterModule
  ],
  providers: [
    CursosService
  ],
})
export class CursosModule { }