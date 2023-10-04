import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {


  product: Product = {
    name: '',
    price: <any>null
  }

  constructor(private service: ProductService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const token: any = this.route.snapshot.paramMap.get('id');

    this.service.readById(token).subscribe(retornar => {
      console.log(retornar);
      this.product = retornar;
    })
  }

  deletarProduct(id: any) {
    this.service.deleteById(id).subscribe(retornar => {
      this.service.showMessage("Deletado com sucesso...")
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}
