import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, Passenger, ContactHelp, UpdatePassengerDto } from './../_models';

@Injectable()
export class PassengerService {
  constructor(private readonly http: HttpClient) {}

  public fetch(id: string): Observable<Passenger> {
    return this.http.get<Passenger>(`/${+id}`);
  }

  public update(updatePassengerDto: UpdatePassengerDto): Observable<Passenger> {
    return this.http.put<Passenger>(`/${updatePassengerDto.id}`, updatePassengerDto);
  }

  public sendMessage(contactHelp: ContactHelp): Observable<Message> {
    return this.http.post<Message>(`/contact`, contactHelp);
  }
}
