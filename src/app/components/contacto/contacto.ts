import { Component } from '@angular/core';
import { DatoContacto } from '../../models/dato-contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.html'
})
export class Contacto {
  datos: DatoContacto[] = [
    { id: 1, etiqueta: 'Correo', valor: 'sergio.castro01@uceva.edu.co', enlace: 'mailto:sergio.castro01@uceva.edu.co' },
    { id: 2, etiqueta: 'GitHub', valor: 'github.com/checho77', enlace: 'https://github.com/checho77' },
    { id: 3, etiqueta: 'Numero', valor: '+57 320 420 0104', enlace: 'tel:+573204200104' },
  ];
}