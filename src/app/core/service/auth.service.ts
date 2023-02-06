/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  keyEmpresa: string;
  keyToken: string;
  keyInstalacoeskeyInstalacoes: string;

  public salvouVenda$ = new Subject();
  public salvouBalanco$ = new Subject();
  constructor(private http: HttpClient, private router: Router) {
    this.keyEmpresa = 'nossoerpmobilev2:empresa';
    this.keyToken = 'nossoerpmobilev2:token';
    this.keyInstalacoeskeyInstalacoes = 'nossoerpmobilev2:instalacoes';
  }

  get isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      const token = this.getToken();
      if (token) {
        return resolve(true);
      }
      return resolve(false);
    });
  }

  informarSalvouVenda() {
    this.salvouVenda$.next('');
  }

  informarSalvouBalanco() {
    this.salvouBalanco$.next('');
  }

  setDadosEmpresaEToken(empresa: DadosEmpresa, token: string) {
    this.setDadosEmpresa(empresa);
    localStorage.setItem(this.keyToken, token);
  }

  setDadosEmpresa(empresa: DadosEmpresa) {
    localStorage.setItem(this.keyEmpresa, JSON.stringify(empresa));
  }

  getDadosEmpresaLogada(): DadosEmpresa {
    return JSON.parse(localStorage.getItem(this.keyEmpresa));
  }

  getToken(): string {
    return localStorage.getItem(this.keyToken);
  }

  logout() {
    localStorage.removeItem(this.keyEmpresa);
    localStorage.removeItem(this.keyToken);
    this.router.navigateByUrl('/login');
  }
}

export class DadosColaborador {
  nome: string;
  id_usuario: number;
  id_colaborador: number;
  desconto_porcentagem_maximo_permitido: number;
}

export class DadosEmpresa {
  razao: string;
  url_zip_imagens: string;
  fantasia: string;
  cpf_cnpj: string;
  cpf_cnpj_formatado: string;
  nome_colaborador: string;
  email: string;
  id_empresa_acessar: number;
  id_colaborador: number;
  id_usuario: number;
  id_banco_dados: number;
  desconto_porcentagem_maximo_permitido_empresa: number;
  desconto_porcentagem_maximo_permitido_usuario: number;
  multa_contas_a_receber_em_atraso?: number;
  juros_mensal_contas_a_receber_em_atraso?: number;
  dias_tolerancia_cobrar_juros?: number;
}
