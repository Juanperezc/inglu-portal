import { Component, OnInit, OnDestroy } from "@angular/core";
import { LandingFixService } from "../../shared/services/landing-fix.service";
import { ActivatedRoute } from "@angular/router";
import { ClubPostService } from "src/app/services/ClubPostService.service";

@Component({
  selector: "app-blog-details",
  templateUrl: "./blog-details.component.html",
  styleUrls: ["./blog-details.component.scss"],
})
export class BlogDetailsComponent implements OnInit, OnDestroy {
  id: number | string;
  blogItem: any = null;
  constructor(
    private fix: LandingFixService,
    private activatedRoute: ActivatedRoute,
    private clubPostService : ClubPostService
  ) {}

  async ngOnInit() {
    this.fix.addFixBlogDetails();
    this.id = this.activatedRoute.snapshot &&
      this.activatedRoute.snapshot.params &&
      this.activatedRoute.snapshot.params["id"];
      console.log('this.id',this.id)
    await this.loadBlogItem(this.id);
  }

  ngOnDestroy() {
    this.fix.removeFixBlogDetails();
  }
  async loadBlogItem(id: any) {
    try {
      const blog: any = await this.clubPostService.show(id);
      const blogData = blog.data;
      this.blogItem = blogData;
    } catch (error) {
      console.error("error", error);
      /* GlobalService.CloseSweet(); */
    }
  }
}
