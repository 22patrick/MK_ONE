import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent{

  empresa: any = {
    id: '',
    razao: '',
    matrizFilial: '',
    status: 'true'
  }

  checked = true;
  disabled = false;


  constructor(private server: ProductService, private rotas: Router) { }

 
  cadastrar() {
     this.server.createConta(this.empresa).subscribe(empresas => {
      this.server.showMessage('Cadastrado com sucesso...')
      this.rotas.navigate(['/clientes']);
    })
  }
}
