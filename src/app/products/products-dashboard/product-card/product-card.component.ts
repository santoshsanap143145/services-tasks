import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, ProductStatus } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product !: Iproduct
  productStatus = ProductStatus
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
  }

  updateStatus(productStatus: ProductStatus){
    this._productService.updateStatus(productStatus, this.product)
  }

}
