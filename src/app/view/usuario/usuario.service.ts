import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  baseUrl = environment.baseUri + "/usuarios";

  constructor(
    private http: HttpClient
  ) {};

  criarCliente(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}`, usuario);
  }

  atualizaraCliente(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}/${usuario.id}`, usuario);
  }

  buscarClientes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  buscarClientesPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  excluirClientesPorId(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

}
