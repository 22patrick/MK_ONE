import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  panelOpenState = false;

  constructor(public service: ProductService) { }

  displayedColumns = ['edit', 'razao', 'matrizfilial' , 'status', 'delete']
  empresas = [];

  ngOnInit(): void {
    this.service.readEmpresa().subscribe(empresa => {
      this.empresas = empresa;
      console.log(this.empresas);

    })
  }


}
