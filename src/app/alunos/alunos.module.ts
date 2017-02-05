//Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Módulo de rotas
import { AlunosRoutingModule } from './alunos.routing.module';

//Componentes
import { AlunosComponent }   from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

//Serviços
import { AlunosService } from './alunos.service';



@NgModule({
    imports: [
        AlunosRoutingModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        AlunosComponent,
        AlunosFormComponent,
        AlunoDetalheComponent
    ],
    providers: [AlunosService],
})
export class AlunosModule { }
