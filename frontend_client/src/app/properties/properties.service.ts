import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  private selectedPropertySubject = new BehaviorSubject<any>({});
  public selectedProperty$: Observable<any> =
    this.selectedPropertySubject.asObservable();

  constructor() {}

  selectProperty(property: any) {
    this.selectedPropertySubject.next(property);
  }
}
