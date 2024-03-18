import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiempo',
  standalone: true,
  imports: [],
  templateUrl: './tiempo.component.html',
  styleUrl: './tiempo.component.css'
})
export class TiempoComponent implements OnInit {
  tiempo!: string;
  tiempoPersonalizado!: string;
  tiempoRestante!: number;

  intervalo: any;

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
        return; // El usuario canceló la entrada, así que no hacemos nada.
      }
    }
    this.tiempo = tiempo;
    this.iniciarContador();
  }

  iniciarContador(): void {
    if (!this.tiempo || this.tiempo === '') {
      return; // No se hace nada si el valor de "tiempo" no es válido.
    }
    const partes = this.tiempo.split(':');
    this.tiempoRestante = parseInt(partes[0], 10) * 60 + parseInt(partes[1], 10);

    this.intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        clearInterval(this.intervalo);
      }
    }, 1000);
  }

  obtenerTiempoRestante(): string {
    const minutos = Math.floor(this.tiempoRestante / 60);
    const segundos = this.tiempoRestante % 60;
    return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  }

}

