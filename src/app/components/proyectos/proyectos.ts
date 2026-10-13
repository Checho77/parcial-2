import { Component } from '@angular/core';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.html'
})
export class Proyectos {
  proyectos: Proyecto[] = [
    {
      id: 1,
      nombre: 'Taller de JavaScript',
      descripcion: 'Ejercicios de variables, ciclos, funciones y arrays.',
      tecnologias: ['JavaScript', 'Node.js']
    },
    {
      id: 2,
      nombre: 'Taller de TypeScript',
      descripcion: 'Ejercicios con tipos, interfaces y clases.',
      tecnologias: ['TypeScript']
    },
    {
      id: 3,
      nombre: 'Portafolio con Angular',
      descripcion: 'Este proyecto: hoja de vida, aprendizaje y tema libre.',
      tecnologias: ['Angular', 'Bootstrap', 'Git'],
      enlace: 'https://github.com/tu-usuario/parcial-2'
    }
  ];
}