import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

import { Response } from '../model/response.interface';
import { Work } from '../model/work.interface';
import { WorkType } from '../model/work-type.interface';

@Injectable({
  providedIn: 'root'
})
export class CrossrefService {
  private URL = 'https://api.crossref.org';

  constructor(private http: HttpClient) { }
  
  getTypes(): Observable<Response<WorkType[]>> {
    return this.http.get<Response<WorkType[]>>(`${this.URL}/types`);
  }

  getWorks(offset: number = 0, rows: number = 20, query: string = ''): Observable<Response<Work[]>> {
    return this.http.get<Response<Work[]>>(`${this.URL}/works?offset=${offset}&rows=${rows}&query=${query.replace(/\s/g, '+')}`);
  }
}
