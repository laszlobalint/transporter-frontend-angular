import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transport } from '../_models';

@Injectable()
export class TransportService {
  constructor(private readonly http: HttpClient) {}

  private readonly URL = 'https://transporter-srb-hun.herokuapp.com/transport';

  public fetch(): Observable<Transport[]> {
    return this.http.get<Transport[]>(`${this.URL}/transports/all`);
  }
}
