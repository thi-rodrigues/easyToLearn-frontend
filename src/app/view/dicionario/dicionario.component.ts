import { Component, OnInit } from '@angular/core';
import { Dicionario } from 'src/app/model/dicionario';
import { Filter } from 'src/app/model/filter';
import { DicionarioService } from './dicionario.service';

@Component({
  selector: 'app-dicionario',
  templateUrl: './dicionario.component.html',
  styleUrls: ['./dicionario.component.css']
})

export class DicionarioComponent implements OnInit {

  dicionario: Dicionario[];
  progressBar = false;
  azul = 'white';
  dicionarioTotalElements: number; // TODO: fazer count no banco
  filter = new Filter();

  constructor(private dicionarioService: DicionarioService){}

  ngOnInit(): void {
    this.progressBar = true;
    this.dicionarioService.buscarTodos(this.filter).subscribe((res: any) => {
    this.dicionario = res.content;
    console.log(this.dicionario);
    
    this.dicionarioTotalElements = res.totalElements;
    this.progressBar = false;
   }, erro => {
    console.log(erro);
   });
  }

  onPageChange(event: any) {
    this.dicionarioService.buscarTodos(event).subscribe((res: any) => {
      this.dicionarioTotalElements = res.totalElements;
      this.dicionario = res.content;
    }, erro => {
      console.log(erro);
    });
  }

}
