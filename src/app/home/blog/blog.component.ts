import { Component, OnInit } from '@angular/core';
import { ClubPostService } from '../../services/ClubPostService.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    constructor(private clubPostService: ClubPostService) { }
    
    async ngOnInit(){
     await this.loadBlogItems();
    }
    // Blog Carousel
    public blog = []


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

  async loadBlogItems() {
    try {
      /* 	GlobalService.ShowSweetLoading(); */
      const blogItems: any = await this.clubPostService.index(4);

      const blogItemsData = blogItems.data;

      blogItemsData.forEach((element: any) => {
        console.log(element, element);
        this.blog.push({
          id: element.id,
          img: element.photo,
          updated_at: element.updated_at,
          title: element.title,
          author: element.author,
       
        });
      });

    } catch (error) {
      console.error("error", error);
      /* GlobalService.CloseSweet(); */
    }
  }
}
