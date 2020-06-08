import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';
import { ClubPostService } from '../../services/ClubPostService.service';
import { ActivatedRoute } from '@angular/router';
import { ClubCategoryService } from 'src/app/services/ClubCategoryService.service';

@Component({
  selector: 'app-blog-leftside',
  templateUrl: './blog-leftside.component.html',
  styleUrls: ['./blog-leftside.component.scss']
})
export class BlogLeftsideComponent implements OnInit, OnDestroy {

  public blogItems = [];
  public categories = [];
  public blogItemsShort = [];
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
    private clubPostService: ClubPostService,
    private activatedRoute: ActivatedRoute,
    private postCategoryService: ClubCategoryService
  ) { }

  async ngOnInit() {
    this.fix.addFixBlog();
    await this.loadBlogItems(999);
    await this.loadBlogItemsShort(4);
    await this.loadCategories();
  }

  ngOnDestroy() {
    this.fix.removeFixBlog();
  }

  async loadBlogItems(pg = 10) {
    try {
      this.activatedRoute.queryParamMap.subscribe(async queryParamMap => {
        const category_id = queryParamMap.get("category_id") ? queryParamMap.get("category_id") : null;
      const blogItems: any = await this.clubPostService.index(pg,category_id);

      const blogItemsData = blogItems.data;

      blogItemsData.forEach((element: any) => {
        console.log(element, element);
        this.blogItems.push({
          id: element.id,
          img: element.photo,
          updated_at: element.updated_at,
          title: element.title,
          author: element.author,
       
        });
      });
    });
    } catch (error) {
      console.error("error", error);
      /* GlobalService.CloseSweet(); */
    }
  }
  async loadCategories() {

    
    try {
    
      const categoryItems: any = await this.postCategoryService.index(9999);

      const categoryItemsData = categoryItems.data;

      categoryItemsData.forEach((element: any) => {
        console.log(element, element);
        this.categories.push({
          id: element.id,
          description: element.description,
          updated_at: element.updated_at,
       
        });
      });

    } catch (error) {
      console.error("error", error);
      /* GlobalService.CloseSweet(); */
    }
  }

  async loadBlogItemsShort(pg = 10) {
    try {
      const blogItems: any = await this.clubPostService.index(pg);

      const blogItemsData = blogItems.data;

      blogItemsData.forEach((element: any) => {
        console.log(element, element);
        this.blogItemsShort.push({
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
