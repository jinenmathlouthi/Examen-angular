import { Component,Input,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private _productService:ProductService){}

  productList!:Product[]

ngOnInit(): void{
  this._productService.getProductsList().subscribe(response=>this.productList=response)
}
  filteredproductlist: Product[] = []; 
  searchMake: string = ''; 
   @Input() ProductList: Product[] = [] 

  searchproduct() {
    this.filteredproductlist = this.productList.filter(product => product.name.toLocaleUpperCase()
     === this.searchMake.toUpperCase());
  }

  
}
