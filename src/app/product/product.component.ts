import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  li:any;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://random-data-api.com/api/coffee/random_coffee?size=50')
    .subscribe(Response => {
      console.log(Response);
      this.li=Response;
    });
  }

}
