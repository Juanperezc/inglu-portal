import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
    
    // DomSanitizer for safe html content.
    constructor(private _sanitizer:DomSanitizer) { }

    // Team Carousel
    public team = [{
        image: 'assets/images/avtar/102.png',
        name: 'Juan Pérez',
        designation: 'Web & App developer',
        social: this._sanitizer.bypassSecurityTrustHtml(''),
      }, {
        image: 'assets/images/avtar/101.png',
        name: 'Marco Sáenz',
        designation: 'Web & App developer',
        social: this._sanitizer.bypassSecurityTrustHtml(''),
      }]


    // Team Carousel Options
	public teamCarousel: any ={
	    loop:false,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                margin:5,
            },
            600:{
                items:1,
                margin:5,
            },
            768:{
                items:2,
            },
            992:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
	}

}
