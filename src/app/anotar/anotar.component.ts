import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-anotar',
  standalone: true,
  imports: [],
  templateUrl: './anotar.component.html',
  styleUrl: './anotar.component.css'
})
export class AnotarComponent {
  
  @Output() equipoAnoto = new EventEmitter<number>();
  estadoEquipo1: string | undefined;
  estadoEquipo2: string | undefined;

  anotarEquipo(equipo: number) {
    this.equipoAnoto.emit(equipo);
  }

  actualizarEstado(estado: {equipo1: string, equipo2: string}) {
  this.estadoEquipo1 = estado.equipo1;
  this.estadoEquipo2 = estado.equipo2;
}

}


