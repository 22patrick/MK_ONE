import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.component.html',
  styleUrls: ['./clientes-delete.component.css']
})
export class ClientesDeleteComponent implements OnInit {

  deletarEmpresa: any = []

  constructor(private server: ProductService, private rotas: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const token: any = this.route.snapshot.paramMap.get('id');
    this.server.readByIdEmpresa(token).subscribe(empresaId => {
      this.deletarEmpresa = empresaId;
    })
  }

  deletar() {
    this.server.deleteByIdEmpresa(this.deletarEmpresa.id).subscribe(empresaDEl => {
      this.server.showMessage('Empresa deletada com sucesso...');
      this.rotas.navigate(['/clientes'])
    })
  }


}
