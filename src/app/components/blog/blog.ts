import { Component } from '@angular/core';
import { Noticia } from '../../interfaces/noticia';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

  noticias: Noticia[] = [
    {
      titulo: 'Angular 17 revoluciona el desarrollo frontend',
      imagen: 'https://picsum.photos/400/200?random=1',
      texto: 'La nueva versión de Angular introduce el Control Flow con @if y @for, simplificando enormemente la sintaxis de las plantillas.',
      fecha: '2025-01-15'
    },
    {
      titulo: 'TypeScript: la base sólida de Angular',
      imagen: 'https://picsum.photos/400/200?random=2',
      texto: 'Gracias al tipado fuerte de TypeScript, los desarrolladores cometen menos errores y el código es más mantenible.',
      fecha: '2025-01-20'
    }
  ];

}