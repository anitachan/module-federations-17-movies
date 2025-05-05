import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieVideos } from 'shared-lib';
import { ONE } from '../../core/constants/number.constants';
import { GetVideosMovieGateway } from '../../domain/videos/gateway/get-videos-movie.gateway';

@Injectable({
  providedIn: 'root',
})
export class GetVideosMovieService extends GetVideosMovieGateway {
  private page = ONE;
  private base = '/tmdb';

  constructor(private httpClient: HttpClient) {
    super();
  }
  get params() {
    return {
      page: this.page.toString(),
    };
  }

  getVideosMovie(movieId: string): Observable<MovieVideos> {
    const url = `${this.base}/movie/${movieId}/videos`;
    return this.httpClient.get<MovieVideos>(url, { params: this.params });
  }
}
