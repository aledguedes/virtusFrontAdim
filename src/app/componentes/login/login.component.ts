import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/model/Token';
import { Usuario } from 'src/app/model/Usuario';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    login: '',
    senha: ''
  }

  constructor(private service: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  efetuarLogin() {
    this.service.logar(this.usuario).subscribe(
      (resposta:Token) => {
        localStorage.setItem("myToken", resposta.strToken)
        this.router.navigate(['paroquias'])
      }
    )
  }

}
