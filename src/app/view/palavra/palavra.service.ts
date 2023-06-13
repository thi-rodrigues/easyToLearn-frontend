import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { Dicionario } from 'src/app/model/dicionario';

@Injectable({
  providedIn: 'root'
})
export class PalavraService {

  apiUrl = environment.baseUri + "/dicionario";

  constructor(private http: HttpClient) { }

  cadastrar( dicionario: Dicionario ): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastrar`, dicionario);
  }
}
