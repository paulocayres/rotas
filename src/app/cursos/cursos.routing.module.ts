import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [

    {path: '', component: CursosComponent},
    {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    {path: ':id', component: CursoDetalheComponent}
    
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]

})


export class CursosRoutingModule{}