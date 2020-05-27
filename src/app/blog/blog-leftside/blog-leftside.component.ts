import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-blog-leftside',
  templateUrl: './blog-leftside.component.html',
  styleUrls: ['./blog-leftside.component.scss']
})
export class BlogLeftsideComponent implements OnInit, OnDestroy {

  tituloNoticias: string[] = [
    "Coronavirus y diabetes: preparados, no asustados",
    "Diabetes y ciclismo: sí se puede",
    "Como afrontar la diabetes en la adolescencia",
    "Herramientas móviles para la diabetes mejoran el control glucémico",
    "¿Tienes diabetes? ¿Sabes que puede afectar a la salud de tu boca?",
    "Una combinación de fármacos contra la diabetes es capaz de restaurar la función de las células beta pancreáticas"
]
  categoria: string[] = ['Novedades', 'Nutrición', 'Entrenamientos fisicos','Buenos Hábitos','Eventos Culturales y Educativos',
  'Bienestar psicologico','Tecnología']
  constructor(
    private fix: LandingFixService,
  ) { }

  ngOnInit() {
    this.fix.addFixBlog();
  }

  ngOnDestroy() {
    this.fix.removeFixBlog();
  }

}
