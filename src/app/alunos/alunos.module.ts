import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { AlunosComponent }   from './alunos.component';

import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';


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
    providers: [],
})
export class AlunosModule { }
