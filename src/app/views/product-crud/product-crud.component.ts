import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css'],

})
export class ProductCrudComponent {

  constructor(private router: Router) {

  }

  novoproduto() : void {
    console.log("conectando...");
    
    this.router.navigate(['/products/create'])
  }
}

