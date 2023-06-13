import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Usuario } from 'src/app/model/usuario';
import { MenssagesComponent } from 'src/app/utils/menssages/menssages.component';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

msgs = [{}];

usuarios: Usuario[] = [];;

loading: boolean = true;

activityValues: number[] = [0, 100];

constructor( 
  private usuarioService: UsuarioService,
  private router: Router,
  private confirmationService: ConfirmationService, private messageService: MessageService,
  private menssages: MenssagesComponent,
){ }

  ngOnInit(): void {
    this.msgs = [];

    this.usuarioService.buscarClientes().subscribe(usuarios => {
      this.usuarios = usuarios.content;
      this.loading = false;
    }, (erro) => {
      console.log(erro);
    });
  }

  clear(table: Table) {
    table.clear();
  }

  editar(id: number) {
    this.router.navigate([`/usuarios/editar/${id}`])
  }

  confirmarExclusao(nome: string, id: number) {
    this.confirmationService.confirm({
        message: 'Deseja realmente excluir o usuario ' + nome + '?',
        header: 'Confirmar Exclusão',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.excluir(id);
        },
        reject: (type: any) => {
        }
    });
  }

  excluir(id: number) {
    this.usuarioService.excluirClientesPorId(id).subscribe(e => {
      this.ngOnInit();
    });
  }
}

