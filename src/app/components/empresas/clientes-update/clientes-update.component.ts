import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.css']
})



export class ClientesUpdateComponent implements OnInit {

  empresa: any = []

  constructor(private server: ProductService, private rotas: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const token: any = this.route.snapshot.paramMap.get('id');
    this.server.readByIdEmpresa(token).subscribe(editEmpresa => {
      this.empresa = editEmpresa
    })
  }

  salvar() {
    this.server.updateEmpresa(this.empresa).subscribe(editEmpresa => {
      this.server.showMessage('Alterado com sucesso...');
      this.rotas.navigate(['/clientes'])
    })
  }
}
