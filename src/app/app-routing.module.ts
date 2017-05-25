import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//import { SiteContentComponent } from './site-content/site-content.component';
//import { SiteLeftbarComponent } from './site-leftbar/site-leftbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}