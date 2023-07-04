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
import { ReservationsFacilitiesComponent } from './reservations/reservations-facilities/reservations-facilities.component';
import { ReservationsDrawerComponent } from './reservations/reservations-drawer/reservations-drawer.component';
import { ReservationsFacilitiesCategoryComponent } from './reservations/reservations-facilities/reservations-facilities-category/reservations-facilities-category.component';
import { ReservationsFacilitiesSubcategoryComponent } from './reservations/reservations-facilities/reservations-facilities-subcategory/reservations-facilities-subcategory.component';
import { ReservationsFacilitiesItemComponent } from './reservations/reservations-facilities/reservations-facilities-item/reservations-facilities-item.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReservationsProfilesDialogComponent } from './reservations/reservations-profiles/reservations-profiles-dialog/reservations-profiles-dialog.component';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { HomeHeroPropertiesComponent } from './home/home-hero/home-hero-properties/home-hero-properties.component';
import { HomeHeroFacilitiesComponent } from './home/home-hero/home-hero-facilities/home-hero-facilities.component';
import { HomeHeroMainComponent } from './home/home-hero/home-hero-main/home-hero-main.component';
import { AuthCodeComponent } from './auth/auth-code/auth-code.component';
import { PropertiesItemDescriptionComponent } from './properties/properties-item/properties-item/properties-item-description/properties-item-description.component';
import { PropertiesItemGalleryComponent } from './properties/properties-item/properties-item/properties-item-gallery/properties-item-gallery.component';
import { AboutComponent } from './about/about.component';
import { ReservationsProfilesListDialogComponent } from './reservations/reservations-profiles-list-dialog/reservations-profiles-list-dialog.component';

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
    ReservationsFacilitiesComponent,
    ReservationsDrawerComponent,
    ReservationsFacilitiesCategoryComponent,
    ReservationsFacilitiesSubcategoryComponent,
    ReservationsFacilitiesItemComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    ReservationsProfilesDialogComponent,
    NavbarComponent,
    HomeHeroComponent,
    HomeHeroPropertiesComponent,
    HomeHeroFacilitiesComponent,
    HomeHeroMainComponent,
    AuthCodeComponent,
    PropertiesItemDescriptionComponent,
    PropertiesItemGalleryComponent,
    AboutComponent,
    ReservationsProfilesListDialogComponent,
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
