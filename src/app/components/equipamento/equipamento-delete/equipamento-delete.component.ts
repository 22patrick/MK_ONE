import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipamento } from '../equipamento.model';


@Component({
  selector: 'app-equipamento-delete',
  templateUrl: './equipamento-delete.component.html',
  styleUrls: ['./equipamento-delete.component.css']
})


export class EquipamentoDeleteComponent implements OnInit {

  deletarEquipamentos: any = []

  constructor(private service: ProductService, private rotas: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const token: any = this.route.snapshot.paramMap.get('id');
    this.service.readByIdEquipamento(token).subscribe(equipamentos => {
      this.deletarEquipamentos = equipamentos;
    })
  }

  deletar() {
    this.service.deleteByIdEquipamento(this.deletarEquipamentos.id).subscribe(delequipamento => {
      console.log('minha nossa '  , delequipamento);
      this.rotas.navigate(['/equipamento']);
      this.service.showMessage('Excluido com sucesso...');
    })
  }

  cancel() {
    this.rotas.navigate(['/equipamento'])
  }

}
