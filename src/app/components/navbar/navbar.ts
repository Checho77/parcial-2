import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type EnlaceNav = { texto: string; ruta: string };

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html'
})
export class Navbar {
  enlaces: EnlaceNav[] = [
    { texto: 'Hoja de vida', ruta: '/hoja-vida' },
    { texto: 'Aprendizaje', ruta: '/aprendizaje' },
    { texto: 'Tema libre', ruta: '/tema-libre' }
  ];
}