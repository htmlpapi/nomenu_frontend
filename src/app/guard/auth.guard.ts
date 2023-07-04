import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService); // Crea un nuevo injector
  
  if (authService.getAuthToken() == of(false)) {
    
    const router = inject(Router); // Obtiene una instancia del Router utilizando el injector
    router.navigate(['/']);
    
    return false;
  }

  return authService.getAuthToken(); // Devuelve el resultado de la función getAuthToken del AuthService
};