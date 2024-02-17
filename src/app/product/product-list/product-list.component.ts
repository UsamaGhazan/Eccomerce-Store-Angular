import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';
import { NgFor , CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule,CommonModule],
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
