import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { HomeComponent } from './home/home.component';
import { FacilityComponent } from './facility/facility.component';

const routes: Routes = [
  { path: 'regions', component: RegionComponent },
  { path: '', component: HomeComponent },
  { path: 'facilities', component: FacilityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
