import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { BlogComponent } from './blog/blog.component';
import { ClubInfoComponent} from './club-info/club-info.component'
import { DiabetesComponent } from './diabetes/diabetes.component';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'demo',
    component: DemoComponent
  },
  { 
    path: 'home', 
    loadChildren: './home/home.module#HomeModule'
  },
  { 
    path: 'blog',
    component: BlogComponent,
    loadChildren: './blog/blog.module#BlogModule'   
  },
  { 
    path: 'club-info',
    component: ClubInfoComponent,
    loadChildren: './club-info/club-info.module#ClubInfoModule'   
  },
  { 
    path: 'diabetes',
    component: DiabetesComponent,
    loadChildren: './diabetes/diabetes.module#DiabetesModule'   
  },
  { 
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'  
  },
  { 
    path: '**', 
    redirectTo: 'home/one'
  }
];

