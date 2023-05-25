import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertiesItemComponent } from './properties/properties-item/properties-item.component';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ConfirmComponent } from './reservations/confirm/confirm.component';
import { ReservationsFormComponent } from './reservations/reservations-form/reservations-form.component';
import { ReservationsConfigureComponent } from './reservations/reservations-configure/reservations-configure.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'properties',
    component: PropertiesComponent,
    children: [
      { path: '', component: PropertiesListComponent },
      { path: ':id', component: PropertiesItemComponent },
    ],
  },
  {
    path: 'reservations',
    component: ReservationsComponent,
    children: [
      { path: '', component: ReservationsFormComponent },
      { path: 'confirmation', component: ConfirmComponent },
      { path: 'configure', component: ReservationsConfigureComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
