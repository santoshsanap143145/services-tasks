import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss'],
})
export class ProductsDashboardComponent implements OnInit {
  productArr: Array<Iproduct> = [];

  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this.productArr = this._productService.fetchAllProducts()
  }
}
