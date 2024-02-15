import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products:Product[]=[]
constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products)=>
    this.products=products)
    console.log(this.products)
    
    
  }

}
