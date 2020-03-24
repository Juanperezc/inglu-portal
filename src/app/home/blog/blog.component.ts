import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

    constructor() { }
    
    // Blog Carousel
    public blog = [{
        image: 'assets/images/blog/Coronavirus.jpg',
        date: '8 marzo 2020',
        title: 'Coronavirus y diabetes: preparados, no asustados',
        postedBy: 'Publicado por Pedro Hernandez',
      }, {
        image: 'assets/images/blog/tel.jpg',
        date: '1 marzo 2020',
        title: 'Herramientas móviles para la diabetes mejoran el control glucémico',
        postedBy: 'Publicado por James Clark',
      }, {
        image: 'assets/images/blog/Adolescencia.jpg',
        date: '26 febrero 2020',
        title: 'Cómo afrontar la diabetes en la adolescencia',
        postedBy: 'Publicado por Vanessa Garcia',
      }, {
        image: 'assets/images/blog/Ciclismo.jpg',
        date: '20 Febrero 2020',
        title: 'Diabetes y ciclismo: sí se puede.',
        postedBy: 'Publicada por Rafael Vizcaya',
    }]


    // Blog Carousel Options
	public blogCarousel: any ={
	    loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                margin:5,
                nav:false,
            },
            600:{
                items:1,
                margin:0,
                nav:false,
            },
            768:{
                items:2,
            },
            1000:{
                items:2
            }
        }
	}

}
