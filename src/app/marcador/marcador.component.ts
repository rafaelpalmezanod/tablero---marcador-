import { Component } from '@angular/core';
import { AnotarComponent } from '../anotar/anotar.component';
import { TiempoComponent } from '../tiempo/tiempo.component';
import { EstadoComponent } from '../estado/estado.component';


@Component({
  selector: 'app-marcador',
  standalone: true,
  imports: [AnotarComponent,TiempoComponent,EstadoComponent],
  templateUrl: './marcador.component.html',
  styleUrl: './marcador.component.css'
})
export class MarcadorComponent {
  equipo1 = 0;
  equipo2 = 0;
  estadoEquipo1: string = 'Empate'; 
  estadoEquipo2: string = 'Empate';

  // actualizarEstado(estado: {equipo1: string, equipo2: string}) {
  //   this.estadoEquipo1 = estado.equipo1;
  //   this.estadoEquipo2 = estado.equipo2;
  // }

  onEquipoAnoto(equipo: number) {
    if (equipo === 1) {
      this.equipo1++;
      if(this.equipo1>this.equipo2){
        this.estadoEquipo1="ganando"
        this.estadoEquipo2="perdiendo"
      }else if(this.equipo1<this.equipo2){
        this.estadoEquipo1="perdiendo"
        this.estadoEquipo2="ganando"
      }else{
        this.estadoEquipo1="empate"
        this.estadoEquipo2="empate"
      }
      
    } else if (equipo === 2) {
      this.equipo2++;
      if(this.equipo1>this.equipo2){
        this.estadoEquipo1="ganando"
        this.estadoEquipo2="perdiendo"
      }else if(this.equipo1<this.equipo2){
        this.estadoEquipo1="perdiendo"
        this.estadoEquipo2="ganando"
      }else{
        this.estadoEquipo1="empate"
        this.estadoEquipo2="empate"
      }
    }
    
  }
  
}
    
  

  


