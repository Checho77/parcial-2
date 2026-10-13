import { Component } from '@angular/core';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-tema-libre',
  templateUrl: './tema-libre.html'
})
export class TemaLibre {
  jugadores: Jugador[] = [
    {
      id: 1,
      nombre: 'Lionel Messi',
      equipo: 'Inter Miami',
      posicion: 'Delantero',
      pais: 'Argentina',
      curiosidad: 'Campeón del mundo con Argentina en Catar 2022.',
      esLeyenda: true
    },
    {
      id: 2,
      nombre: 'Cristiano Ronaldo',
      equipo: 'Al Nassr',
      posicion: 'Delantero',
      pais: 'Portugal',
      curiosidad: 'Ha ganado la Champions League con Manchester United y Real Madrid.',
      esLeyenda: true
    },
    {
      id: 3,
      nombre: 'James Rodríguez',
      equipo: 'Selección Colombia',
      posicion: 'Mediocampista',
      pais: 'Colombia',
      curiosidad: 'Bota de Oro del Mundial de Brasil 2014.',
      esLeyenda: true
    },
    {
      id: 4,
      nombre: 'Luis Díaz',
      equipo: 'Bayern Múnich',
      posicion: 'Extremo',
      pais: 'Colombia',
      curiosidad: 'Uno de los jugadores colombianos más destacados de la actualidad.'
    },
    {
      id: 5,
      nombre: 'Kylian Mbappé',
      equipo: 'Real Madrid',
      posicion: 'Delantero',
      pais: 'Francia',
      curiosidad: 'Campeón del mundo con Francia en Rusia 2018.'
    }
  ];
}