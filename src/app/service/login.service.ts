import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Token } from '../model/Token';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logar(usuario: Usuario){
    return this.http.post<Token>(environment.apiUrl+"/login", usuario)
  }
}
