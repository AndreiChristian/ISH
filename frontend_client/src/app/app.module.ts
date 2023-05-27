import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './UI/navigation/navigation.component';
import { FooterComponent } from './UI/footer/footer.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { FoodandbeverageComponent } from './foodandbeverage/foodandbeverage.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { PropertiesComponent } from './properties/properties.component';
import { RegionsComponent } from './regions/regions.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertiesItemComponent } from './properties/properties-item/properties-item.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './reservations/confirm/confirm.component';
import { ReservationsConfigureComponent } from './reservations/reservations-configure/reservations-configure.component';
import { ReservationsFormComponent } from './reservations/reservations-form/reservations-form.component';
import { AuthComponent } from './auth/auth.component';
import { ReservationsProfilesComponent } from './reservations/reservations-profiles/reservations-profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    FoodandbeverageComponent,
    FacilitiesComponent,
    PropertiesComponent,
    RegionsComponent,
    PropertiesListComponent,
    PropertiesItemComponent,
    ReservationsComponent,
    ConfirmComponent,
    ReservationsConfigureComponent,
    ReservationsFormComponent,
    AuthComponent,
    ReservationsProfilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
