import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pipes';

  nombre = 'Carlos Julio';
  fullName = 'CarLOs julio iRigoyen monToya';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arreglo2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  numero = 17.12;
  numero2 = 0.2467;
  numeroPi = Math.PI;

  precio1 = 1234.5;
  precio2 = 0.2645;

  hero: any = {
    nombre: 'wolverine',
    clave: 'xmen',
    tipo: 'inmortal',
    edad: 1000,
    direccion: {
      calle: 'primera',
      casa: '#19'
    }
  };

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llegó la data de la Promesa'), 3500);
  });

  youtubeUrl = 'https://www.youtube.com/embed/';
  videoUrl = 'o1tj2zJ2Wvg';

  // Activar password hide
  active = false;
  claveFija: string;

  fijarClave(clave: string) {
    this.claveFija = clave;
  }
}
