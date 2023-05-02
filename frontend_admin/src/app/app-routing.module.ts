import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { HomeComponent } from './home/home.component';
import { FacilityComponent } from './facility/facility.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertiesDetailComponent } from './properties/properties-detail/properties-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthComponent } from './auth/auth.component';
import { StaffComponent } from './staff/staff.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { GuestsComponent } from './guests/guests.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'regions', component: RegionComponent },
      { path: 'facilities', component: FacilityComponent },
      {
        path: 'properties',
        component: PropertiesComponent,
        children: [
          { path: '', component: PropertiesListComponent },
          { path: ':id', component: PropertiesDetailComponent },
        ],
      },
      {
        path: 'staff',
        component: StaffComponent,
      },
      {
        path: 'reservations',
        component: ReservationsComponent,
      },
      {
        path: 'guests',
        component: GuestsComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
