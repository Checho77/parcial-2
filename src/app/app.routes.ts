import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hoja-vida' },
  {
    path: 'hoja-vida',
    loadComponent: () => import('./pages/hoja-vida/hoja-vida')
      .then(m => m.HojaVida)
  },
  {
    path: 'aprendizaje',
    loadComponent: () => import('./pages/aprendizaje/aprendizaje')
      .then(m => m.Aprendizaje)
  },
  {
    path: 'tema-libre',
    loadComponent: () => import('./pages/tema-libre/tema-libre')
      .then(m => m.TemaLibre)
  },
  { path: '**', redirectTo: 'hoja-vida' }
];