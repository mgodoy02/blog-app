import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Noticia } from '../../interfaces/noticia';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
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

  // Objeto que representará la noticia que el usuario está rellenando en el formulario
  nuevaNoticia: Noticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: ''
  };

  publicarNoticia() {
  // Validamos que ningún campo esté vacío (Tema 7.2 - lógica del evento)
  if (
    !this.nuevaNoticia.titulo.trim() ||
    !this.nuevaNoticia.imagen.trim() ||
    !this.nuevaNoticia.texto.trim() ||
    !this.nuevaNoticia.fecha.trim()
  ) {
    alert('Todos los campos son obligatorios. Por favor, rellena la noticia completa.');
    return;
  }

  // Si todo está correcto, insertamos la noticia en el array (Tema 2 - Arrays)
  this.noticias.push({ ...this.nuevaNoticia });

  // Reseteamos el formulario para la siguiente publicación
  this.nuevaNoticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: ''
  };
}

}

