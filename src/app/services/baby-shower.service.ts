import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ListaRegalos } from '../models/lista-regalos';
import { Invitados } from '../models/invitados';

@Injectable({
  providedIn: 'root',
})
export class BabyShowerService {
  private env = environment;
  constructor(private http: HttpClient) {}

  getListItems(): Observable<ListaRegalos[]> {
    return this.http.get<ListaRegalos[]>(`${this.env.babyShowerBack}lista`);
  }

  insertarInvitado(invitado: Invitados): Observable<any> {
    return this.http.post<any>(`${this.env.babyShowerBack}invitados`, invitado);
  }

  updateItem(listaRe: ListaRegalos[]): Observable<any> {
    return this.http.post<any>(`${this.env.babyShowerBack}lista`, listaRe);
  }
}
