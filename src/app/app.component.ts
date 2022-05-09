import { Component } from '@angular/core';
import { RandomProductsService } from './services/random-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {

  data:any;
  totalRecords: number = 0;
  page:number = 1;

  constructor(private randomProduct:RandomProductsService) {
    this.getProducts();
   }

   getProducts() {
    this.randomProduct.getData().subscribe((Response) => {
      console.log(Response);
      this.data = Response;
      this.totalRecords = Response.length;
    })
   }


}


