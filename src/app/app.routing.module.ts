import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [

    {path : '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    //{path: 'cursos', component: CursosComponent},
    //{path: 'curso/:id', component: CursoDetalheComponent},
    //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    {path: 'home', component: HomeComponent}
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})


export class AppRoutingModule{}