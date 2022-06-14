import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient) { }
  id : any
  product : any
  similar : any = []
  freq : any = []
  async ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    let apiUrl = `http://localhost:8000/product?id=${this.id}`
       await this.http.get<any>(apiUrl)
      .toPromise()
      .then((data) => {
        this.product = data[0]
        console.log(this.product);
      });
      let apiUrl1 = `http://localhost:8000/similar?id=${this.id}`
      await this.http.get<any>(apiUrl1)
     .toPromise()
     .then((data) => {
       this.similar = data
       console.log(this.similar);
     });
     let apiUrl2 = `http://localhost:8000/freq?id=${this.id}`
       await this.http.get<any>(apiUrl2)
      .toPromise()
      .then((data) => {
        this.freq = data
        console.log(this.freq, "feeee", data);
      });
  }


}
