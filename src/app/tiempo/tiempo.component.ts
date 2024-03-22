import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';

@Component({
  selector: 'app-tiempo',
  standalone: true,
  imports: [],
  templateUrl: './tiempo.component.html',
  styleUrl: './tiempo.component.css'
})
export class TiempoComponent implements OnInit {
  tiempo!: string ;
  timpoMostrado: string = "00:00"
  tiempoPersonalizado!: string;
  tiempoRestante!: number;
  mensajeAlerta: string = '';
  intervalo: any = null;
  intervalo2: any = null;
  data :any ={}


  ocultarboton:boolean= true
  @Input() estadoEquipo1 : string = ""
  @Input() estadoEquipo2 : string = ""
  
  @Output() datosTiempo = new EventEmitter<any>()
  emiterDatosTiempos(){
    this.data.ocultarboton = this.ocultarboton
    this.datosTiempo.emit(this.data)
  }
  
  
  constructor() { }

  ngOnInit(): void {
    this.tiempo = '1:00';
    const partes = this.tiempo.split(':');
    this.tiempoRestante = parseInt(partes[0], 10) * 60 + parseInt(partes[1], 10);
  }

  seleccionarTiempo(event: any): void {
    let tiempo = event.target.value;
    if (tiempo === 'personalizado') {
      tiempo = prompt('Por favor, ingresa el tiempo en formato mm:ss');
      if (tiempo === null) {
        return; 
      }
    }
    this.tiempo = tiempo;
    // this.iniciarContador();

  }

  iniciarTemporizador(){
    if(this.intervalo !== null){
      clearInterval(this.intervalo)  
      this.timpoMostrado="00:00"
      this.comprobartiempo()
    }
    else{
      this.comprobartiempo()
    }
  }

  iniciarContador(){
    let contadorI = 4
    let contenedorContador = document.querySelector(".ocultarContador")  as HTMLDivElement
    let contaador = document.querySelector (".contador") as HTMLParagraphElement  
    contenedorContador.classList.toggle("ocultarContador")
    const partes = this.tiempo.split(':');
    this.tiempoRestante = parseInt(partes[0], 10) * 60 + parseInt(partes[1], 10);
       this.ocultarboton = false
       this.emiterDatosTiempos()
       this.intervalo2 = setInterval(()=>{
        
        contadorI --
        contaador.textContent = contadorI.toString()
        if(contadorI === 0){
          contenedorContador.classList.toggle("ocultarContador") 
          clearInterval(this.intervalo2)
          this.iniciarTemporizador()
        }
       },1000)
       
    
  }
  comprobartiempo(){
    this.intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
        this.obtenerTiempoRestante()
      } else {
        clearInterval(this.intervalo);
        this.intervalo = null 
      }
    }, 1000);
  }

  obtenerTiempoRestante(){
    const minutos = Math.floor(this.tiempoRestante / 60);
    const segundos = this.tiempoRestante % 60;
      if (segundos <= 5) {
      this.mensajeAlerta = '¡Tiempo a punto de finalizar! ' + segundos;
      }else {
        this.mensajeAlerta = '';
      }
      if(segundos == 0){
        let contenedorContador = document.querySelector(".ocultarContador")  as HTMLDivElement
        let contaador = document.querySelector (".contador") as HTMLParagraphElement
        contenedorContador.classList.toggle("ocultarContador") 
        contaador.textContent
        if(this.estadoEquipo1.toUpperCase()==="GANANDO"){
          contaador.textContent = "GANADOR EQUIPO 1"
        }
        else if (this.estadoEquipo2.toUpperCase()==="GANANDO"){
          contaador.textContent = "GANADOR EQUIPO 2"
        }
        else{
          contaador.textContent = "EMPATE"
        }
      }
     this.timpoMostrado = minutos +":" +segundos
  }

  contadorInicio(){


  }

  contadorFinal(){}

}

