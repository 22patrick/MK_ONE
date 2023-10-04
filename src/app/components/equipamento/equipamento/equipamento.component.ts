import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.css']
})
export class EquipamentoComponent implements OnInit{

  displayedColumns = ['editar','empresa', 'matriz/filial' , 'modelo', 'imagem' ,'ip', 'status' , 'delete']
  equipamentos: any = [];
  empresas: any = [];

  constructor(private service: ProductService) { }


  ngOnInit(): void {
    this.service.readEquipamentos().subscribe(equipamento => {
      this.equipamentos = equipamento;
      console.log(this.equipamentos);      
    })
  }

}
