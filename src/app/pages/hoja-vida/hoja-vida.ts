import { Component } from '@angular/core';
import { Presentacion } from '../../components/presentacion/presentacion';
import { Aprendido } from '../../components/aprendido/aprendido';
import { Proyectos } from '../../components/proyectos/proyectos';
import { Contacto } from '../../components/contacto/contacto';

@Component({
  selector: 'app-hoja-vida',
  imports: [Presentacion, Aprendido, Proyectos, Contacto],
  templateUrl: './hoja-vida.html'
})
export class HojaVida {}