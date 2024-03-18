import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css'
})
export class EstadoComponent {
  estadoEquipo1: string = 'Empate';
  estadoEquipo2: string = 'Empate';

  @Output() cambioEstado = new EventEmitter<{equipo1: string, equipo2: string}>();

  anotarEquipo(equipo: number) {
    if (equipo === 1) {
      this.estadoEquipo1 = 'Va ganando';
      this.estadoEquipo2 = 'Va perdiendo';
    } else if (equipo === 2) {
      this.estadoEquipo1 = 'Va perdiendo';
      this.estadoEquipo2 = 'Va ganando';
    }

    this.cambioEstado.emit({equipo1: this.estadoEquipo1, equipo2: this.estadoEquipo2});
  }
}
