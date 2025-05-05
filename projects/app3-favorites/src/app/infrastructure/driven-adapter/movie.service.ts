import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { MovieDetail } from 'shared-lib';
import { ONE } from '../utils/constants/number.constants';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private page = ONE;
  private base = '/tmdb';

  constructor(private httpClient: HttpClient) {}

  get params() {
    return {
      page: this.page.toString(),
    };
  }

  getMovie(movieId: string): Observable<MovieDetail> {
    const url = `${this.base}/movie/${movieId}`;
    return this.httpClient.get<MovieDetail>(url, { params: this.params });
  }
}
