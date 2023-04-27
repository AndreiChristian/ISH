import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material.module';
import { NavigationMenuFacilitiesComponent } from './navigation/navigation-menu-facilities/navigation-menu-facilities.component';
import { NavigationMenuReservationsComponent } from './navigation/navigation-menu-reservations/navigation-menu-reservations.component';
import { FacilityComponent } from './facility/facility.component';
import { FacilityItemComponent } from './facility/facility-item/facility-item.component';
import { FacilityCategoryComponent } from './facility/facility-category/facility-category.component';
import { FacilitySubcategoryComponent } from './facility/facility-subcategory/facility-subcategory.component';
import { RegionComponent } from './region/region.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationMenuFacilitiesComponent,
    NavigationMenuReservationsComponent,
    FacilityComponent,
    FacilityItemComponent,
    FacilityCategoryComponent,
    FacilitySubcategoryComponent,
    RegionComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
