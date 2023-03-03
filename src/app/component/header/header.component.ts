import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  text = '';

  constructor(private cartService :CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
   search(event:any){
     this.searchTerm = (event.target as HTMLInputElement).value;
     console.log(this.searchTerm);
     this.cartService.search.next(this.searchTerm);
  }
 /* onKeyUp(x:any) { // appending the updated value to the variable
    this.text += x.target.value + ' | ';
  }*/

}
