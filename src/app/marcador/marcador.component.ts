import { Component } from '@angular/core';
import { AnotarComponent } from '../anotar/anotar.component';

@Component({
  selector: 'app-marcador',
  standalone: true,
  imports: [AnotarComponent],
  templateUrl: './marcador.component.html',
  styleUrl: './marcador.component.css'
})
export class MarcadorComponent {

}
