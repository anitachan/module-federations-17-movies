import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GetMoviesGateway, Movie } from 'shared-lib';
import { NowPlaying } from './models/now-playing.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomGetMoviesService extends GetMoviesGateway {
  private base = '/tmdb';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getMovies(page: number): Observable<Movie[]> {
    const url = `${this.base}/movie/now_playing`;
    return this.httpClient.get<NowPlaying>(url, { params: this.getParams(page) }).pipe(map(({ results }) => results));
  }

  getParams(page: number) {
    return {
      page: page.toString(),
    };
  }
}
