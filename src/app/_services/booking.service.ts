import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking, DeleteBookingDto } from '../_models';

@Injectable()
export class BookingService {
  constructor(private readonly http: HttpClient) {}

  public fetchActive(): Observable<Booking[]> {
    return this.http.get<Booking[]>(``);
  }

  public fetchInactive(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`/past/all`);
  }

  public save(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(``, booking);
  }

  public delete(id: number): Observable<DeleteBookingDto> {
    return this.http.delete<DeleteBookingDto>(`/${id}`);
  }
}
