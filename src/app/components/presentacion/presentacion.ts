import { Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.html'
})
export class Presentacion {
  nombre = 'Sergio David Castro Galindo';
  profesion = 'Estudiante de Ingeniería de Sistemas';
  perfil = 'Estudiante de Ingeniería de Sistemas, me gusta jugar futbol y escuchar musica.';
  foto = 'foto1.jpg.jpeg';   // pon tu imagen en la carpeta public/
}