import { Injectable } from '@angular/core';
import { Iproduct, ProductStatus } from '../models/product';
import { SnackBarService } from './snackbar.service';

@Injectable()
export class ProductService {
  productArr: Array<Iproduct> = [
    {
      pname: 'Laptop',
      pdetails:
        'A lightweight 14-inch laptop featuring a full HD display, Intel i5 processor, 8GB RAM, and 512GB SSD. Perfect for students and professionals who need performance and portability.',
      pid: '101',
      pstatus: ProductStatus.Delivered,
    },
    {
      pname: 'Smartphone',
      pdetails:
        'This smartphone offers a 6.5-inch AMOLED display, 128GB storage, 5000mAh battery, and a high-resolution camera for crystal-clear photos, gaming, and daily use without lag.',
      pid: '102',
      pstatus: ProductStatus.InProgress,
    },
    {
      pname: 'Wireless Earbuds',
      pdetails:
        'Compact wireless earbuds with advanced Bluetooth 5.2, noise cancellation, and 24-hour battery life. Designed for music lovers and fitness enthusiasts who demand clarity and comfort.',
      pid: '103',
      pstatus: ProductStatus.Dispatched,
    },
    {
      pname: 'Gaming Mouse',
      pdetails:
        'Ergonomic gaming mouse with customizable RGB lighting, 6 programmable buttons, and ultra-fast response time. Ideal for competitive gamers who value precision and style.',
      pid: '104',
      pstatus: ProductStatus.InProgress,
    },
  ];

  constructor(private _snackbar: SnackBarService) {}

  fetchAllProducts() {
    return this.productArr;
  }

  createNewProd(newProd : Iproduct){

    this.productArr.push(newProd)
    this._snackbar.notification(`New Product '${newProd.pname}' is Created successfully !!!`)
  }

  updateStatus(updatedstatus: ProductStatus, prod: Iproduct){
    let pindex = this.productArr.findIndex(p => p.pid === prod.pid)
    this.productArr[pindex].pstatus = updatedstatus
    this._snackbar.notification(`Status of '${prod.pname}' is updated to '${updatedstatus}' successfully !!!`)
  }
}
