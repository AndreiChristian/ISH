import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  urlEnding: string = 'regions/';

  constructor(private httpService: HttpService) {}

  getAllRegions() {
    this.httpService.getList(this.urlEnding);
  }

  getOneRegion(id: number) {
    this.httpService.getOne(this.urlEnding + id);
  }

  deleteRegion(id: number) {
    this.httpService.delete(this.urlEnding + id);
  }

  putRegion(id: number, data: any) {
    this.httpService.put((data = data), this.urlEnding + id + '/');
  }

  postRegion(data: any) {
    this.httpService.post((data = data), this.urlEnding);
  }
}
