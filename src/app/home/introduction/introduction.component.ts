import { Component, OnInit } from '@angular/core';
import { ClubJoinService } from '../../services/ClubJoinService.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  private info: any = null;
  constructor(private clubJoinService: ClubJoinService) { }

  async ngOnInit() {
    await this.loadTaskData();
  }

  async loadTaskData(){
    try {
      const infoRes: any = await this.clubJoinService.show(1);
      const infoData = infoRes.data;
      this.info = infoData;
      console.log('infoResItemsData', infoData);
      } catch (error) {
      console.error("error", error);
      /* GlobalService.CloseSweet(); */
      }
  }

}
