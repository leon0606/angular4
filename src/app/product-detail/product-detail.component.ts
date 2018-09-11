import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from  '@angular/router';
import { ProductService, Product } from '../shared/product.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    constructor(private routeInfo: ActivatedRoute, private productService:ProductService) { }

    ngOnInit() {    
        let productId = this.routeInfo.snapshot.params["prodId"];

        this.product = this.productService.getProduct(productId);
    }

}
