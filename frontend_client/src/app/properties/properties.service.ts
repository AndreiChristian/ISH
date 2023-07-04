import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { environment } from 'src/environments/environment.prod';

export interface Property {
  id?: number;
  name: string;
  number: string;
  street: string;
  city: string;
  region: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  max_capacity: number;
  square_meters: number;
  price: string;
  image_url: string;
}

const propertyListStorageKey = 'property-list';
const propertyIndividualStorageKey = 'property-individual';
const selectedPropertyStorageKey = 'property-selected';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  // b subject and observable for the list of subjects!
  private PropertyListSubject = new BehaviorSubject<Property[] | null>(
    this.localStorageService.retrieveData(propertyListStorageKey)
  );
  public propertyList$: Observable<Property[]> =
    this.PropertyListSubject.asObservable();

  // b subject and observal for individual property

  private PropertyIndividualSubject = new BehaviorSubject<Property | null>(
    this.localStorageService.retrieveData(propertyIndividualStorageKey)
  );
  public propertyIndividual$: Observable<Property> =
    this.PropertyIndividualSubject.asObservable();

  // b subject and observal for  selected property

  private selectedPropertySubject = new BehaviorSubject<Property | null>(
    this.localStorageService.retrieveData(selectedPropertyStorageKey)
  );
  public selectedProperty$: Observable<Property> =
    this.selectedPropertySubject.asObservable();

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  selectProperty(property: Property) {
    this.localStorageService.storeData(selectedPropertyStorageKey, property);
    this.selectedPropertySubject.next(property);
    console.log('Selected Property');
  }

  getPropertiesList() {
    if (this.PropertyListSubject.getValue()) {
      console.log('Using the data for property listfrom local storage');
    } else {
      this.http
        .get<Property[]>(`${environment.apiUrl}/api/property`)
        .subscribe({
          next: (value) => {
            this.localStorageService.storeData(propertyListStorageKey, value);
            this.PropertyListSubject.next(value);
          },
          error: (err) => console.error(err),
        });
    }
  }

  getIndividualProperty(id: number) {
    if (this.PropertyIndividualSubject.getValue()) {
      console.log(
        `Using the data for individual nr ${id} property from local storage`
      );
    } else {
      this.http
        .get<Property>(`${environment.apiUrl}/api/property/${id}`)
        .subscribe({
          next: (value) => {
            this.localStorageService.storeData(
              propertyIndividualStorageKey,
              value
            );
            this.PropertyIndividualSubject.next(value);
          },
          error: (err) => console.error(err),
        });
    }
  }
}
