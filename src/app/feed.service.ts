import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.interface';


@Injectable({
  providedIn: 'root'
})
export class FeedService {


  BASE_URL = 'http://localhost:4700';

  constructor(private httpCleint: HttpClient) {

  }

  getFeed(): Observable<Item[]> {
    return this.httpCleint.get<Item[]>(`${this.BASE_URL}/feed`);
  }
}
