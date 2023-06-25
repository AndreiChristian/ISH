import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
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
      currentFacilities = currentFacilities.filter((f) => f !== facility);
    } else {
      currentFacilities.push(facility);
    }
    console.table(currentFacilities);
    this.selectedFacilitiesSubject.next(currentFacilities);
  }

  isFacilitySelected(facility: any): Observable<boolean> {
    return this.selectedFacilities$.pipe(
      map((facilities) => facilities.includes(facility))
    );
  }

  getProfiles() {}

  selectProfile(profile: any) {
    console.log(profile);
    this.selectedProfileSubject.next(profile);
  }

  getFacilityCategories() {
    this.facilityCategories$ = this.http.get(
      'http://localhost:3000/api/facilities_category'
    );
  }

  getOneFacilityCategory(id: number): Observable<any> {
    const facilityCategory$ = this.facilityCategories$.pipe(
      map((array) => array.find((item) => item.id === id))
    );
    return facilityCategory$;
  }

  getFacilitySubcategories() {
    this.facilitySubcategories$ = this.http.get(
      'http://localhost:3000/api/facilities_subcategory'
    );
  }

  getProfilesByGuestId(userId: number) {
    this.http.get(`http://localhost:3000/api/profiles/${userId}`).subscribe({
      next: (value) => this.ProfilesSubject.next(value),
      error: (err) => console.log(err),
    });
  }

  postProfile(data: any, userId: number) {
    this.http
      .post('http://localhost:3000/api/profiles', data)
      .subscribe((data) => this.getProfilesByGuestId(userId));
  }
}
