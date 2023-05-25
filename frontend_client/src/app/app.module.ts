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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
