import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一件商品', 5.00, 2.5, '热卖榜第一', ['电子产品', '手机']),
    new Product(2, '第二件商品', 6.00, 2.5, '热卖榜第二', ['电子产品', '手机']),
    new Product(3, '第三件商品', 3.00, 3.5, '热卖榜第三', ['电子产品', '手机']),
    new Product(4, '第四件商品', 2.00, 4.5, '热卖榜第四', ['电子产品', '手机']),
    new Product(5, '第五件商品', 10000.00, 2.5, '热卖榜第五', ['电子产品', '手机']),
  ]

  constructor() { }

  getProducts() {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
}


export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
