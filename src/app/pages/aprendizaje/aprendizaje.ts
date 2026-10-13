import { Component } from '@angular/core';
import { TemaCurso } from '../../models/tema-curso';

@Component({
  selector: 'app-aprendizaje',
  templateUrl: './aprendizaje.html'
})
export class Aprendizaje {
  cursos: TemaCurso[] = [
    {
      id: 1,
      tecnologia: 'JavaScript',
      temas: ['Variables y tipos de datos', 'Funciones', 'Arrays y métodos', 'Spread y desestructuración'],
      actividad: 'Taller de JavaScript',
      completado: true
    },
    {
      id: 2,
      tecnologia: 'TypeScript',
      temas: ['Tipado estático', 'Interfaces', 'Clases y herencia', 'Generics'],
      actividad: 'Taller de TypeScript',
      completado: true
    },
    {
      id: 3,
      tecnologia: 'Angular',
      temas: ['Componentes standalone', 'Routing', 'Renderizado con @for y @if'],
      actividad: 'Parcial 2: hoja de vida',
      completado: true
    },
    {
      id: 4,
      tecnologia: 'Git y GitHub',
      temas: ['Commits descriptivos', 'Repositorio remoto', 'git push'],
      actividad: 'Repositorio del parcial',
      completado: false,
      nota: 'Falta publicar la versión final'
    }
  ];
}