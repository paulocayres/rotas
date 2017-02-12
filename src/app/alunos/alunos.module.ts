//Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Módulo de rotas
import { AlunosRoutingModule } from './alunos.routing.module';

//Componentes
import { AlunosComponent }   from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

//Serviços
import { AlunosService } from './alunos.service';
import { AuthGuard } from './../guards/auth.guard';




@NgModule({
    imports: [
        AlunosRoutingModule,
        CommonModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        AlunosComponent,
        AlunosFormComponent,
        AlunoDetalheComponent
    ],
    providers: [AlunosService]
})
export class AlunosModule { }
