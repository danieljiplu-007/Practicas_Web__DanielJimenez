import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = () => {

  const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

  if(usuario?.rol === 'admin'){
    return true;
  }

  alert('Acceso solo para administradores');
  return false;

};