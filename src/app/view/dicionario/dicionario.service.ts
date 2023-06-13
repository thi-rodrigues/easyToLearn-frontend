import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dicionario } from 'src/app/model/dicionario';
import { Filter } from 'src/app/model/filter';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})

export class DicionarioService {

  apiUrl = environment.baseUri + "/dicionario";

  constructor(private http: HttpClient) { }

  buscarTodos( event: Filter ): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/todos?size=${event.rows}&page=${event.page}&sort=palavra`);
  }

  cadastrar( dicionario: Dicionario ): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastrar`, dicionario);
  }
}
