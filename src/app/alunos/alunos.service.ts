import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'},
    {id: 4, nome: 'Aluno 04', email: 'aluno04@email.com'},
    {id: 5, nome: 'Aluno 05', email: 'aluno05@email.com'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    
  }

  constructor() { }

}
