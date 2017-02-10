import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'paulo.cayres' &&
    usuario.senha === 'pccr0976'){
      this.usuarioAutenticado = true;
      this.router.navigate(['/home']);
      this.mostrarMenuEmitter.emit(true);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(true);
    }

  }

}
