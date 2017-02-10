
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AlunosModule } from './alunos/alunos.module';
import { CursosModule } from './cursos/cursos.module';


const appRoutes: Routes = [

    {path : '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},
    {path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule'},
    {path: 'home', component: HomeComponent}
    //{path: 'cursos', component: CursosComponent},
    //{path: 'curso/:id', component: CursoDetalheComponent},
    //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})


export class AppRoutingModule{}