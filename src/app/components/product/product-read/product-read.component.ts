import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent implements OnInit {
  displayedColumns = ['edit' ,'id', 'name', 'description' , 'price', 'available', 'delete']
  products: any = [];

  constructor(private service: ProductService) { }


  ngOnInit(): void {
    this.service.read().subscribe(products => {
      this.products = products;
      console.log(products);
      
    })
  }

  deleteId(id: string) {
    this.service.deleteById(id).subscribe(products => {
      console.log(products);

    })
  }

}
