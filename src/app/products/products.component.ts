import { HttpClient, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  ok : boolean = true
  constructor(private http: HttpClient, private httpService: HttpserviceService, private router : Router) { }
  products  : any = []
   async ngOnInit() {
      let apiUrl = `http://localhost:8000/products`
       await this.http.get<any>(apiUrl)
      .toPromise()
      .then((data) => {
        this.products = data
      });
    console.log(this.products[0]);
    let arr = []
      for (let i = 0; i  < 11; i++) {
        console.log(this.products[i].fields.product_name);
        arr.push(this.products[i].fields.product_name)
      }
      console.log(arr);
      
    // console.log(this.products.fields.products_name);
    
  }
  showProduct(id:any){
    console.log(id);
    this.router.navigate([`/product/${id}`])
    
  }

}
