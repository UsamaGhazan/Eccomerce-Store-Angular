import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {
  cartItems:Product[]=[]
  totalPrice:number=0

  constructor(private cartservice:CartService){

  }
  ngOnInit(): void {
this.cartservice.getCartItems().subscribe(products=>
  {
  this.cartItems=products;
  this.totalPrice=this.getTotalPrice()
  })
  }
 
  

  getTotalPrice():number{
    for(let item of this.cartItems){
      this.totalPrice+=item.price
    }
    return this.totalPrice

  }

  clearCart():void{
    this.cartservice.clearCartItems().subscribe(()=>{
      console.log('Cart Cleared')
    })
  }
checkout():void{
  this.cartservice.checkout(this.cartItems).subscribe(products=>{
    console.log(products)
    
  })
}


}
