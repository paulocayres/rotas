

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

    cursos: any[];
    pagina: number;
    inscricao: Subscription;
    id: number;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
    ) { }

  ngOnInit() {

    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina']; 
      }
    );
  }

  onDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    //this.pagina ++;
    this.router.navigate(['/cursos'], {queryParams:{'pagina': ++this.pagina}});
  }

}
