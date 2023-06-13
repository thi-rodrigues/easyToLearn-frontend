import { Component } from '@angular/core';
import { Dicionario } from 'src/app/model/dicionario';
import { PalavraService } from './palavra.service';

@Component({
  selector: 'app-palavra',
  templateUrl: './palavra.component.html',
  styleUrls: ['./palavra.component.css']
})
export class PalavraComponent {

  dicionario: Dicionario = { id: null, palavra: "", significado: "" };
  palavra: string;
  
  constructor(private palavraService: PalavraService){}

  cadastrar() {
    this.palavraService.cadastrar(this.dicionario).subscribe((res: any) => {
      console.log(res);
    });
  }
}
