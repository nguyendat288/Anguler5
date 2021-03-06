import {Component} from '@angular/core';
import {Product} from "./model/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngulerCRUD';
  products: Product[] = [];
  name: string = '';
  name2: number = 1;
  img: string = '';
  price: number = 0;

  constructor() {
    this.products.push(new Product('oto1', 50000, 'https://anhdep123.com/wp-content/uploads/2020/11/hinh-anh-o-to-con.jpg', true));
    this.products.push(new Product('oto2', 50000, 'https://s3.cloud.cmctelecom.vn/tinhte1/2015/01/2727114_081-top-100-photos-2014-1.jpg', false));
    this.products.push(new Product('oto3', 50000, 'https://anhdep123.com/wp-content/uploads/2020/11/hinh-anh-xe-o-to.jpg', false));
    this.products.push(new Product('oto4', 50000, 'https://anhdep123.com/wp-content/uploads/2020/11/hinh-anh-xe-o-to.jpg', false));

  }

  deleteProduct(name: string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.products.splice(i, 1);
        return;
      }
    }
  }

  creatProduct(product: Product) {
    this.products.push(product);
  }

  editProduct(product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === product.name) {
        this.products[i] = product;
      }
    }
  }
}
