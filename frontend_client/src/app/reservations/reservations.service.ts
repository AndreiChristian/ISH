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

  private facilitySubcategoriesSubject = new BehaviorSubject<any>([]);
  public facilitySubcategories$: Observable<any>;

  constructor(private http: HttpClient) {}

  getProfiles() {}

  selectProfile(profile: any) {
    this.selectedProfileSubject.next(profile);
  }

  getFacilityCategories() {
    this.facilityCategories$ = this.http.get(
      'http://localhost:8080/api/facilities_category'
    );
  }

  // getFacilityCategoriesArray(): any[] {
  //   let categoriesArray: any[];
  //   this.http
  //     .get<any[]>('http://localhost:8080/api/facilities_category')
  //     .subscribe((data) => {
  //       categoriesArray = data;
  //     });
  //   return categoriesArray;
  // }

  getOneFacilityCategory(id: number): Observable<any> {
    const facilityCategory$ = this.facilityCategories$.pipe(
      map((array) => array.find((item) => item.id === id))
    );
    return facilityCategory$;
  }

  getFacilitySubcategories() {
    this.facilitySubcategories$ = this.http.get(
      'http://localhost:8080/api/facilities_subcategory'
    );
  }
}
