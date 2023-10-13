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

  usado: any
  particao: any 
  tamanho: any

  constructor(private server: ProductService) { }

  ngOnInit(): void {
    this.server.readCentralMaringa(this.dadosHd).subscribe(central => {

      let dados = central.length;

      for (let i = 0; i < dados; ++i) {

        if (central[i]._mounted == '/') {

          let calculo = central[i]._blocks;

          let gbValue = (calculo / (1024 * 1024 * 1024)).toFixed(3);


          let resul = {
            "usado": central[i]._capacity,
            "particao": central[i]._filesystem,
            "tamanho": gbValue
          }
          console.log(resul);
          this.usado = parseInt(resul.usado);
          this.particao = resul.particao;
          this.tamanho = resul.tamanho;


          if(this.usado > 10){
            console.log("Hd cheio");            
          }
        }
      }

    }
    
    
    )
  }
}


