import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  url = 'http://localhost:3000/api/';

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
    let currentFacilities: any[] = this.selectedFacilitiesSubject.getValue();
    if (currentFacilities.includes(facility)) {
      // delete it from the server
      currentFacilities = currentFacilities.filter((f) => f !== facility);
    } else {
      // post it to the server
      currentFacilities.push(facility);
    }
    console.table(currentFacilities);
    this.selectedFacilitiesSubject.next(currentFacilities);
  }

  // getSelectedFacilities(){}

  isFacilitySelected(facility: any): Observable<boolean> {
    return this.selectedFacilities$.pipe(
      map((facilities) => facilities.includes(facility))
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
      'http://localhost:3000/api/facilities_category'
    );
  }

  getFacilitySubcategories() {
    this.facilitySubcategories$ = this.http.get(
      'http://localhost:3000/api/facilities_subcategory'
    );
  }

  getFacilitySubcategoriesByCategoryId(categoryId: number) {
    return this.http.get(
      `http://localhost:3000/api//facilities_subcategory/category/${categoryId}`
    );
  }

  getProfilesByGuestId(userId: number) {
    this.http.get(`http://localhost:3000/api/profiles/${userId}`).subscribe({
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
      .get(`http://localhost:3000/api/profile_facility/${profileId}`)
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
      .post('http://localhost:3000/api/profiles', data)
      .subscribe((data) => this.getProfilesByGuestId(userId));
  }

  postFacility(data: any) {
    this.http.post(this.url + 'profile_facility', data).subscribe();
  }

  deletFacility(profileId: number, facility_id: number) {
    // this.http.delete();
  }

  deleteFacility() {}
}
