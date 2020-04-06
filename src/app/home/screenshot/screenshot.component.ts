import { Component } from '@angular/core';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent {
    
    constructor() { }
    
    // Carousel Images  
	public carouselImages = [{
	    image: 'assets/images/app/inicio.png',
	  }, {
	    image: 'assets/images/app/citas.png',
	  }, {
	    image: 'assets/images/app/cita-detalles.png',
	  }, {
	    image: 'assets/images/app/cita-seleccion.png',
	  }, {
	    image: 'assets/images/app/eventos.png',
	  }, {
	    image: 'assets/images/app/evento-detalle.png',
      }, {
	    image: 'assets/images/app/perfil.png',
	  }, {
	    image: 'assets/images/app/notificaciones.png',
	  }, {
	    image: 'assets/images/app/configuracion-notificaciones.png',
	  }, {
	    image: 'assets/images/app/recordatorios.png',
	  }, {
	    image: 'assets/images/app/recordatorio-nuevo.png',
	  }]
  
	// Carousel Options
	public carouselOptions: any ={
	    loop:true,
	    margin:30,
	    nav:false,
	    dots:false,
	    center:true,
	    autoplay: true,
	    autoplayTimeout: 8000,
	    responsive:{
	        0:{
	            items:2,
	        },
	        767:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        992:{
	            items:4,
	        },
	        1200:{
	            items:5
	        }
	    }
	}


}
