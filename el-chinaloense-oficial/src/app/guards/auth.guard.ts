import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

  if(usuario){
    alert('Ya tienes una sesión iniciada');
    return false;
  }

  return true;

};