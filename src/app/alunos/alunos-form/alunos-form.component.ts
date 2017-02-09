import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';


import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, OnDestroy {

  aluno: any = {};
  incricao: Subscription;

  constructor(
    private alunoService: AlunosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.incricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunoService.getAluno(id);

        if (this.aluno == null){
          this.aluno = {};
        }
      }
    );

  }

  ngOnDestroy(){
    this.incricao.unsubscribe();
  }

}
