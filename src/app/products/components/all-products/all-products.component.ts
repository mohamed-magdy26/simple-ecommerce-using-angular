import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from 'src/types/Products';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productServive: ProductsService) {}

  ngOnInit(): void {
    this.productServive.getAllProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
}
