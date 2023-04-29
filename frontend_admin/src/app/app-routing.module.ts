import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { HomeComponent } from './home/home.component';
import { FacilityComponent } from './facility/facility.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertiesDetailComponent } from './properties/properties-detail/properties-detail.component';

const routes: Routes = [
  { path: 'regions', component: RegionComponent },
  { path: '', component: HomeComponent },
  { path: 'facilities', component: FacilityComponent },
  {
    path: 'properties',
    component: PropertiesComponent,
    children: [
      { path: '', component: PropertiesListComponent },
      { path: ':id', component: PropertiesDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
