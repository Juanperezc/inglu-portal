import { Component, OnInit } from '@angular/core';
import { ClubInformationService } from '../../services/ClubInformationService.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private informationData : any = null;
  constructor(private clubInformationService: ClubInformationService) { }

  async ngOnInit() {
    await this.loadInformationData();
  }

  async loadInformationData(){
    try {
      const information: any = await this.clubInformationService.show(1);
      const informationData = information.data;
      this.informationData = informationData;
      } catch (error) {
      console.error("error", error);
      /* GlobalService.CloseSweet(); */
      }
  }

}
