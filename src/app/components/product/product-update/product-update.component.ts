import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})


export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: <any>null
  }

  constructor(private service: ProductService, private router: Router, private route: ActivatedRoute) { }



  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('id');
    const zovo: any = token

    this.service.readById(zovo).subscribe(retornar => {
      console.log(retornar);
      this.product = retornar;
    })
  }

  alterarProduct() {
    this.service.update(this.product).subscribe(retornar => {
      console.log(retornar);
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }

}
