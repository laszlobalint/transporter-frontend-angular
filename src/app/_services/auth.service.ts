import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, LoginPassengerDto, RegisterPassengerDto } from './../_models';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  private readonly URL = 'https://transporter-srb-hun.herokuapp.com';

  public login(loginPassenger: LoginPassengerDto): Observable<string> {
    return this.http.post<string>(`${this.URL}/login`, loginPassenger, {
      responseType: 'text' as 'json',
    });
  }

  public register(registerPassenger: RegisterPassengerDto): Observable<Message> {
    return this.http.post<Message>(`${this.URL}`, registerPassenger);
  }
}
