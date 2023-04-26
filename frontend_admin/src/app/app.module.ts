import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material.module';
import { NavigationMenuFacilitiesComponent } from './navigation/navigation-menu-facilities/navigation-menu-facilities.component';
import { NavigationMenuReservationsComponent } from './navigation/navigation-menu-reservations/navigation-menu-reservations.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, NavigationMenuFacilitiesComponent, NavigationMenuReservationsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
