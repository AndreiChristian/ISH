import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Reservation } from './reservations.component';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  url = `${environment.apiUrl}/api/`;

  private selectedProfileSubject = new BehaviorSubject<any>({});
  public selectedProfile$: Observable<any> =
    this.selectedProfileSubject.asObservable();

  private facilityCategoriesSubject = new BehaviorSubject<any>([]);
  public facilityCategories$: Observable<any>;

  private facilitySubcategoriesSubject = new BehaviorSubject<any[]>([]);
  public facilitySubcategories$: Observable<any>;

  private selectedFacilitiesSubject = new BehaviorSubject<any>([]);
  public selectedFacilities$ = this.selectedFacilitiesSubject.asObservable();

  private ProfilesSubject = new BehaviorSubject<any>([]);
  public profiles$ = this.ProfilesSubject.asObservable();

  constructor(private http: HttpClient) {}

  toggleFacility(facility: any) {
    const profileId = this.selectedProfileSubject.getValue().id;
    let currentFacilities: any[] = this.selectedFacilitiesSubject.getValue();

    if (currentFacilities.some((f) => f.id === facility.id)) {
      console.log('trying to delete');
      this.deleteFacility(profileId, facility.id);
      currentFacilities = currentFacilities.filter((f) => f.id !== facility.id);
    } else {
      console.log('trying to post');
      this.postFacility({
        profile_id: profileId,
        facility_id: facility.id,
        requested_call: false,
      });
      currentFacilities.push(facility);
    }

    console.table(currentFacilities);
    this.selectedFacilitiesSubject.next(currentFacilities);
  }

  isFacilitySelected(facility: any): Observable<boolean> {
    return this.selectedFacilities$.pipe(
      map((facilities) => facilities.some((f) => f.id === facility.id))
    );
  }

  getProfiles() {}

  selectProfile(profile: any) {
    console.log(profile.id);
    this.getFacilitiesByProfile(profile.id);
    this.selectedProfileSubject.next(profile);
  }

  getFacilityCategories() {
    this.facilityCategories$ = this.http.get(
      `${environment.apiUrl}/api/facilities_category`
    );
  }

  getFacilitySubcategories() {
    this.facilitySubcategories$ = this.http.get(
      `${environment.apiUrl}/api/facilities_subcategory`
    );
  }

  getFacilitySubcategoriesByCategoryId(categoryId: number) {
    return this.http.get(
      `${environment.apiUrl}/api/facilities_subcategory/category/${categoryId}`
    );
  }

  getProfilesByGuestId(userId: number) {
    this.http.get(`${environment.apiUrl}/api/profiles/${userId}`).subscribe({
      next: (value) => {
        this.ProfilesSubject.next(value);
        this.selectProfile(value[0]);
      },
      error: (err) => console.log(err),
    });
  }

  getFacilitiesByProfile(profileId: number) {
    console.log(profileId);
    this.http
      .get(`${environment.apiUrl}/api/profile_facility/${profileId}`)
      .subscribe({
        next: (value) => {
          console.log(value);
          this.selectedFacilitiesSubject.next(value);
        },
        error: (err) => console.log(err),
      });
  }

  postProfile(data: any, userId: number) {
    this.http
      .post(`${environment.apiUrl}/api/profiles`, data)
      .subscribe((data) => this.getProfilesByGuestId(userId));
  }

  postFacility(data: any) {
    this.http.post(this.url + 'profile_facility', data).subscribe();
  }

  deleteFacility(profileId: number, facilityId: number) {
    this.http
      .delete(`${this.url}profile_facility/${profileId}/${facilityId}`)
      .subscribe((data) => console.log(data));
  }

  addProfileToReservation(profileId: number, reservationId: number) {
    console.table({ profileId, reservationId });

    // get the id of the profile
    // get the id of the reservation
    // make a post request to add the new profile to the reservation if the user selects it
    // update the reservation profiles
  }
}
