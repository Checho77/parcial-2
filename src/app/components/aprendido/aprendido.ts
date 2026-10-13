import { Component } from '@angular/core';
import { TemaAprendido } from '../../models/tema-aprendido';

@Component({
  selector: 'app-aprendido',
  templateUrl: './aprendido.html'
})
export class Aprendido {
  temas: TemaAprendido[] = [
    { id: 1, titulo: 'Variables y tipos de datos', descripcion: 'let, const, string, number, boolean, null y undefined.', tecnologia: 'JavaScript' },
    { id: 2, titulo: 'Arrays y métodos', descripcion: 'map, filter, find, reduce y forEach.', tecnologia: 'JavaScript' },
    { id: 3, titulo: 'Spread y desestructuración', descripcion: 'Copiar objetos y extraer valores de arrays y objetos.', tecnologia: 'JavaScript' },
    { id: 4, titulo: 'Tipado estático', descripcion: 'Tipos básicos, unions, enums, generics y utility types.', tecnologia: 'TypeScript' },
    { id: 5, titulo: 'Clases y herencia', descripcion: 'Modificadores de acceso, extends, super y override.', tecnologia: 'TypeScript' },
    { id: 6, titulo: 'Componentes y routing', descripcion: 'Componentes standalone, rutas y navegación sin recargar.', tecnologia: 'Angular' }
  ];
}