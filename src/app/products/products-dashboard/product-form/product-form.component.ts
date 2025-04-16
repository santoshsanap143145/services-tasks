import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct, ProductStatus } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @ViewChild('productForm') productForm !: NgForm
  constructor(private _uuidService: UuidService,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  submitOnClick(){
    let newProd : Iproduct =this.productForm.value;
    newProd.pid = this._uuidService.uuid();
    newProd.pstatus = ProductStatus.InProgress;
    this._productService.createNewProd(newProd)
    this.productForm.resetForm()
  }


}
