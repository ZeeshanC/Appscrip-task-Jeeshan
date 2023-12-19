import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.get('products').subscribe((res: any) => {
      this.products = res;
      console.log(this.products)
    })
  }

}
