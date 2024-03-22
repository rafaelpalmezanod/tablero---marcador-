import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-anotar',
  standalone: true,
  imports: [],
  templateUrl: './anotar.component.html',
  styleUrl: './anotar.component.css'
})
export class AnotarComponent {
  G_Equipo1=0
  G_Equipo2=0
  
  @Input() ocultarBotonB : boolean = true
  @Output() equipoAnoto = new EventEmitter<number>();
  estadoEquipo1: string | undefined;
  estadoEquipo2: string | undefined;




  anotarEquipo() {
    this.data.golesEquipo1 = this.G_Equipo1
    this.data.golesEquipo2 = this.G_Equipo2
    this.data.estadoEquipo1 = this.estadoEquipo1
    this.data.estadoEquipo2 = this.estadoEquipo2
    this.equipoAnoto.emit(this.data);

  }

  data:any =  {}

anotargoles(equipo : any){
  
  if (equipo === 1) {
    this.G_Equipo1++;  
  } else if (equipo === 2) {
    this.G_Equipo2++;
  }  
  this.estadosequipos()
  this.anotarEquipo() 
}

estadosequipos(){
  if(this.G_Equipo1<this.G_Equipo2){
    this.estadoEquipo1 = "Perdiendo"
    this.estadoEquipo2 = "ganando"
  }
  else if (this.G_Equipo1>this.G_Equipo2){
    this.estadoEquipo1 = "ganando"
    this.estadoEquipo2 = "Perdiendo"
  }
  else{
    this.estadoEquipo1 = "Empantado"
    this.estadoEquipo2 = "Empantado"
  }

  this.anotarEquipo() 
}

}


