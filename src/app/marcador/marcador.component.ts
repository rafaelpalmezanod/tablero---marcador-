import { Component } from '@angular/core';
import { AnotarComponent } from '../anotar/anotar.component';
import { TiempoComponent } from '../tiempo/tiempo.component';
import { EstadoComponent } from '../estado/estado.component';
import { ThisReceiver } from '@angular/compiler';


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
  estadoEquipo1:string = ""
  estadoEquipo2:string = ""
  ocultarBotonR:boolean = true
 

  onEquipoAnoto(data:any) {
    this.equipo1 = data.golesEquipo1
    this.equipo2 = data.golesEquipo2
    this.estadoEquipo1 = data.estadoEquipo1
    this.estadoEquipo2 = data.estadoEquipo2

  }

  datosTiempos(data:any){
    this.ocultarBotonR = data.ocultarboton
  }
  
}
    


  


