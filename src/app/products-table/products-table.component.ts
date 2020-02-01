import { Product } from './../models/product.model';
import { ProductService } from './../product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
@ViewChild(MatTable, {static: false}) datatable: MatTable<any>;

  [x: string]: any;

  products: Product[];
  prodColumns: string[] = ['id', 'prodname', 'department',
  'price', 'description'];

  constructor(
    // tslint:disable-next-line: no-shadowed-variable
    private ProductService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.ProductService.getProducts();
    this.productService.onNewProduct.subscribe((p) => {
      this.datatable.renderRows();
    });
  }

}
