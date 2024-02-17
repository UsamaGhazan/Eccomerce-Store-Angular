import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';
import { NgFor , CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CartService } from '../../cart/cart.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products:Product[]=[]
  filteredProducts:Product[]=[]
constructor(private productService:ProductService,private cartservice:CartService){}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products)=>
    this.products=products)
this.filteredProducts=this.products  
console.log('this.products are',this.products)  
console.log('this.filteredproducts are',this.filteredProducts)  
  }

  addToCart(product:Product):void{
    
    this.cartservice.addToCart(product).subscribe({
      next:()=>{alert("Product added to the cart")}
    })
  }

  applyFilter(event:Event):void{
    console.log('Inside filter')
    let searchTerm=(event.target as HTMLInputElement).value;
    searchTerm=searchTerm.toLowerCase();
    this.filteredProducts=this.products.filter(product=>product.name.toLowerCase().includes(searchTerm))

  }

  // -----------------------------------------------------------------------------------------------------------
  // Check udemy video for sorting

}
