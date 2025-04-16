import { NgModule } from '@angular/core';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { ProductCardComponent } from './products-dashboard/product-card/product-card.component';
import { ProductFormComponent } from './products-dashboard/product-form/product-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ProductService } from '../services/products.service';

@NgModule({
  declarations: [
    ProductsDashboardComponent,
    ProductCardComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [ProductsDashboardComponent],
  providers: [
    ProductService
  ],
})
export class ProductsModule {}
