import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipamento-update',
  templateUrl: './equipamento-update.component.html',
  styleUrls: ['./equipamento-update.component.css']
})
export class EquipamentoUpdateComponent implements OnInit {

  public equipamento: any = [];
  public empresas: any = [];

  constructor(private service: ProductService, private rotas: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // EMPRESA 
    this.service.readEmpresa().subscribe(empresa => {
      this.empresas = empresa;
    })


    const token = this.route.snapshot.paramMap.get('id');
    const retorno: any = token

    this.service.readByIdEquipamento(retorno).subscribe(retornar => {
      this.equipamento = retornar;
    })
  }

  alterarProduct(): void {
    this.service.updateEquipamento(this.equipamento).subscribe(updateEquipamento => {
      this.rotas.navigate(['/equipamento'])
      this.service.showMessage('Alterado com sucesso..');
      console.log('TESTE ', updateEquipamento);
    })
  }

  cancel() {
    this.rotas.navigate(['/equipamento'])
  }

}
