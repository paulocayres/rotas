import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {



  constructor() { }

  getCursos(){
    return [
      {id: 1 , nome: 'Java'},
      {id: 2, nome: 'Angular 2'}
    ];
  }

  getCurso(id:number){
    let cursos = this.getCursos();
    return cursos[id-1];
  }

}
