import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {

  constructor(private http: HttpClient) { }

  saveFile(filename: string): Observable<any> {
    return this.http.get<any>('/api');
  }
}
