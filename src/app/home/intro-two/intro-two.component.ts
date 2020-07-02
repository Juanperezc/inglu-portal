import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import 'magnific-popup';
import { ClubSettingsService } from 'src/app/services/ClubSettingsService.service';
declare var $: any;

@Component({
  selector: 'app-intro-two',
  templateUrl: './intro-two.component.html',
  styleUrls: ['./intro-two.component.scss']
})
export class IntroTwoComponent implements AfterViewInit,OnInit {
  public setting: any;
  @ViewChild('video') videoElement: ElementRef;	
  
  constructor(private clubSettingsService: ClubSettingsService) { }
  
  async ngOnInit(){
    await this.loadInfo();
  }
  // Magnific Popup 
  ngAfterViewInit(): void {
  	$(this.videoElement.nativeElement).magnificPopup({ 
		    disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false 
    });
  }

  async loadInfo(){
    try {
      const settingRes: any = await this.clubSettingsService.show(1);
      const settingData = settingRes.data;
      this.setting = settingData;
      console.log("settingResItemsData", settingData);
    }catch (error) {
      console.error("error", error);
      /* GlobalService.CloseSweet(); */
    }
  }

}
