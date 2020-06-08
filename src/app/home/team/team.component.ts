import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { ClubTeamService } from "../../services/ClubTeamService.service";
import { ClubTeamItemService } from "../../services/ClubTeamItemService.service";
@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
})
export class TeamComponent implements OnInit{
  private teamItems = [];
  private teamInfo: any = null;

  // DomSanitizer for safe html content.
  constructor(
    private _sanitizer: DomSanitizer,
    private clubTeamService: ClubTeamService,
    private clubTeamItemService: ClubTeamItemService
  ) {}

  async ngOnInit(){
    await this.loadTeamData();
    await this.loadTeamItems();
  }
  // Team Carousel
  public team = [
  
  ];

  // Team Carousel Options
  public teamCarousel: any = {
    loop: false,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 5,
      },
      600: {
        items: 1,
        margin: 5,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  async loadTeamData() {
    try {
      const teamRes: any = await this.clubTeamService.show(1);
      const teamData = teamRes.data;
      this.teamInfo = teamData;
      console.log("teamResItemsData", teamData);
    }catch (error) {
      console.error("error", error);
      /* GlobalService.CloseSweet(); */
    }
  }

  async loadTeamItems() {
    try {
      /* 	GlobalService.ShowSweetLoading(); */
      const teamItems: any = await this.clubTeamItemService.index();

      const teamItemsData = teamItems.data;

      teamItemsData.forEach((element: any) => {
        console.log(element, element);
        this.team.push({
          image: element.img,
          name: element.name,
          designation: element.role,
          social: null,
        });
      });

    } catch (error) {
      console.error("error", error);
      /* GlobalService.CloseSweet(); */
    }
  }
}
