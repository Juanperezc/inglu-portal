import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { OwlModule } from 'ngx-owl-carousel';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Services
import { WINDOW_PROVIDERS } from "./services/windows.service";
import { LandingFixService } from '../shared/services/landing-fix.service';
import { FeatureComponent } from '../shared/feature/feature.component';
import { ScreenshotComponent } from '../shared/screenshot/screenshot.component';

@NgModule({
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    FeatureComponent,
    ScreenshotComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OwlModule,
    NgxPageScrollModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FeatureComponent,
    ScreenshotComponent
  ],
  providers: [
    WINDOW_PROVIDERS,
    LandingFixService
  ]
})
export class SharedModule { }
