import { Component, OnInit } from '@angular/core';
import { ClubImageItemService } from '../../services/ClubImageItemService.service';
import { ClubImageService } from '../../services/ClubImageService.service';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent implements OnInit {
	public imageItems = [];
	public imageInfo: any = null;

	async ngOnInit() {
		await this.loadImageInfo();
		await this.loadImageItems();
	
	}
    
    constructor(private clubImageInfoService: ClubImageService, private clubImageItemService: ClubImageItemService) { }
    
    // Carousel Images  
	public carouselImages = [/* {
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
	  } */]
  
	  async loadImageInfo(){
		try {
		/* 	GlobalService.ShowSweetLoading(); */
			const image: any = await this.clubImageInfoService.show(1);
		/* 	GlobalService.SwalDeleteItem(); */
			const imageData = image.data;
			this.imageInfo = imageData;
			console.log('imageData', imageData)
		  } catch (error) {
			console.error("error", error);
			/* GlobalService.CloseSweet(); */
		  }
	  }
	  async loadImageItems(){
		try {
		/* 	GlobalService.ShowSweetLoading(); */
			const imageItems: any = await this.clubImageItemService.index();
		
			const imageItemsData = imageItems.data;
	
			imageItemsData.forEach(element => {
				console.log(element,element)
				this.carouselImages.push({image: element.img})
			});
		
			console.log('imageItemsData', imageItemsData)
		  } catch (error) {
			console.error("error", error);
			/* GlobalService.CloseSweet(); */
		  }
	  }
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
