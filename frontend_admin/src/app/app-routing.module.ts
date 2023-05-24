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
import { ReservationsListComponent } from './reservations/reservations-list/reservations-list.component';
import { ReservationsDetailComponent } from './reservations/reservations-detail/reservations-detail.component';
import { ReservationsNewComponent } from './reservations/reservations-new/reservations-new.component';
import { GuestsTableComponent } from './guests/guests-table/guests-table.component';
import { GuestsItemComponent } from './guests/guests-item/guests-item.component';

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
        children: [
          { path: '', component: ReservationsListComponent },
          { path: 'new', component: ReservationsNewComponent },
          { path: ':id', component: ReservationsDetailComponent },
        ],
      },
      {
        path: 'guests',
        component: GuestsComponent,
        children: [
          { path: '', component: GuestsTableComponent },
          { path: ':id', component: GuestsItemComponent },
        ],
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
