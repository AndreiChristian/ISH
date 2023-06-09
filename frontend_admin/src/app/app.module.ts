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
import { RegionItemComponent } from './region/region-item/region-item.component';
import { PutRegionDialog } from './region/region-dialogs/put-region-dialog.component';
import { PostRegionDialog } from './region/region-dialogs/post-region-dialog.component';
import { DeleteRegionDialog } from './region/region-dialogs/delete-region-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteFacilityDialogComponent } from './facility/dialogs/delete-facility-dialog/delete-facility-dialog.component';
import { PutFacilityDialogComponent } from './facility/dialogs/put-facility-dialog/put-facility-dialog.component';
import { PostFacilityDialogComponent } from './facility/dialogs/post-facility-dialog/post-facility-dialog.component';
import { StaffComponent } from './staff/staff.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertiesDetailComponent } from './properties/properties-detail/properties-detail.component';
import { PropertiesTreeComponent } from './properties/properties-tree/properties-tree.component';
import { PropertiesDetailTableComponent } from './properties/properties-detail-table/properties-detail-table.component';
import { PropertiesDetailTableCategoriesComponent } from './properties/properties-detail-table/properties-detail-table-categories/properties-detail-table-categories.component';
import { PropertiesDetailTableSubcategoriesComponent } from './properties/properties-detail-table/properties-detail-table-subcategories/properties-detail-table-subcategories.component';
import { PropertiesDetailTableItemComponent } from './properties/properties-detail-table/properties-detail-table-item/properties-detail-table-item.component';
import { PropertiesPostDialogComponent } from './properties/properties-dialog/properties-post-dialog/properties-post-dialog.component';
import { PropertiesPutDialogComponent } from './properties/properties-dialog/properties-put-dialog/properties-put-dialog.component';
import { PropertiesDeleteDialogComponent } from './properties/properties-dialog/properties-delete-dialog/properties-delete-dialog.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { GuestsComponent } from './guests/guests.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationsListComponent } from './reservations/reservations-list/reservations-list.component';
import { ReservationsDetailComponent } from './reservations/reservations-detail/reservations-detail.component';
import { ReservationsNewComponent } from './reservations/reservations-new/reservations-new.component';
import { ReservationsListActiveComponent } from './reservations/reservations-list/reservations-list-active/reservations-list-active.component';
import { ReservationsListUpcomingComponent } from './reservations/reservations-list/reservations-list-upcoming/reservations-list-upcoming.component';
import { ReservationsListPastComponent } from './reservations/reservations-list/reservations-list-past/reservations-list-past.component';
import { ReservationsPostDialogComponent } from './reservations/reservations-dialog/reservations-post-dialog/reservations-post-dialog.component';
import { ReservationsDeleteDialogComponent } from './reservations/reservations-dialog/reservations-delete-dialog/reservations-delete-dialog.component';
import { ReservationsPutDialogComponent } from './reservations/reservations-dialog/reservations-put-dialog/reservations-put-dialog.component';
import { ReservationsProfilesComponent } from './reservations/reservations-profiles/reservations-profiles.component';
import { ReservationsPostProfileDialogComponent } from './reservations/reservations-dialog/reservations-post-profile-dialog/reservations-post-profile-dialog.component';
import { ReservationNewFormComponent } from './reservations/reservations-new/reservation-new-form/reservation-new-form.component';
import { GuestsTableComponent } from './guests/guests-table/guests-table.component';
import { GuestsItemComponent } from './guests/guests-item/guests-item.component';
import { GuestReservationsComponent } from './guests/guests-item/guest-reservations/guest-reservations.component';
import { GuestProfilesComponent } from './guests/guests-item/guest-profiles/guest-profiles.component';

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
    RegionItemComponent,
    PutRegionDialog,
    PostRegionDialog,
    DeleteRegionDialog,
    DeleteFacilityDialogComponent,
    PutFacilityDialogComponent,
    PostFacilityDialogComponent,
    StaffComponent,
    PropertiesComponent,
    PropertiesListComponent,
    PropertiesDetailComponent,
    PropertiesTreeComponent,
    PropertiesDetailTableComponent,
    PropertiesDetailTableCategoriesComponent,
    PropertiesDetailTableSubcategoriesComponent,
    PropertiesDetailTableItemComponent,
    PropertiesPostDialogComponent,
    PropertiesPutDialogComponent,
    PropertiesDeleteDialogComponent,
    AuthComponent,
    UserComponent,
    GuestsComponent,
    ReservationsComponent,
    ReservationsListComponent,
    ReservationsDetailComponent,
    ReservationsNewComponent,
    ReservationsListActiveComponent,
    ReservationsListUpcomingComponent,
    ReservationsListPastComponent,
    ReservationsPostDialogComponent,
    ReservationsDeleteDialogComponent,
    ReservationsPutDialogComponent,
    ReservationsProfilesComponent,
    ReservationsPostProfileDialogComponent,
    ReservationNewFormComponent,
    GuestsTableComponent,
    GuestsItemComponent,
    GuestReservationsComponent,
    GuestProfilesComponent,
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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
