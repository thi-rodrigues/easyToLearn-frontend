import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { TipoPessoa } from 'src/app/model/tipoPessoa';
import { MenssagesComponent } from 'src/app/utils/menssages/menssages.component';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit{

  tipoPessoa: TipoPessoa[];

  pessoaSelecionada: TipoPessoa;

  usuario: Usuario = {
    id: null,
    cpfCnpj: null,
    dataCadastro: new Date(),
    nome: null,
    rgIe: null,
    telefone: null,
    ativo: true,
    tipo: null
  };

  msgs = [{}];

  constructor(
    private usuarioService: UsuarioService,
    private menssages: MenssagesComponent,
    private router: Router,
    private route: ActivatedRoute
  ) { };

  ngOnInit(): void {
    this.msgs = [];

    this.tipoPessoa = [
      { tipoPessoa: 'Selecione', codigo: 0 },
      { tipoPessoa: 'Pessoa Física', codigo: 1 },
      { tipoPessoa: 'Pessoa Jurídica', codigo: 2 }
    ];
    this.buscarClientesPorId(this.route.snapshot.paramMap.get("id"));
  };

  atualizaraCliente(): void {
    this.usuarioService.atualizaraCliente(this.usuario).subscribe(() => {
      // this.menssages.showMensage('success', 'Usuario cadastrado com sucesso!' );
      this.router.navigate(['/usuarios']);
    }, (erro) => {
      console.log(erro);
      // for ( const e of erro.mensage ) {
      this.menssages.showMensage('error', erro.error.message);
      // }
    });
  }

  buscarClientesPorId(id: string) {
    this.usuarioService.buscarClientesPorId(id).subscribe(usuario => {
      this.usuario = usuario;
    })
  }
}
