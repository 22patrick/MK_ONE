import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dados = "statuscpu";
  dadosHd = "status_hd";

  dadosdois = {
    stdout: " "
  }

  constructor(private server: ProductService) { }

  ngOnInit(): void {
    this.server.readCentral(this.dados).subscribe(central => {
      console.log(central);
      this.dadosHd2()
    })
  }


  dadosHd2(): void {
    // setInterval(() => {
      this.server.readCentral(this.dadosHd).subscribe(centralHd => {
        this.dadosdois = centralHd
        console.log(centralHd);
      })
    // }, 5000);
  }
}
