import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-equipamento-create',
  templateUrl: './equipamento-create.component.html',
  styleUrls: ['./equipamento-create.component.css']
})

export class EquipamentoCreateComponent implements OnInit {

  equipamento = {
    id: '',
    empresa: '',
    matrizFilial: '',
    modelo: '',
    imagem: '',
    ip: '',
    usuario: '',
    senha: ''
  }

  empresas: any = [];

  hide = true;

  constructor(private service: ProductService, private rota: Router) { }

  ngOnInit(): void {

    // SELECT EMPRESA
    this.service.readEmpresa().subscribe(empresa => {
      this.empresas = empresa
      console.log(empresa);

    })
  }

  cadastrar(): void {
    this.service.createEquipamento(this.equipamento).subscribe(equipamentos => {
      this.service.showMessage('Equipamento cadastrado com sucesso...');
      this.rota.navigate(['/equipamento']);
    })
  }
}
