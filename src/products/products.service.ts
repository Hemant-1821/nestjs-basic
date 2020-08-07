import { Injectable,NotFoundException } from "@nestjs/common";

import { Product } from './product.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number): string{
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId
    }

    getProducts():any {
        return [...this.products];
    }

    getSingleProduct(prodId: string):any {
        const product = this.findProduct(prodId)[0];
        return {...product};
    }

    updateProduct(productId: string, title: string, desc: string, price: number):any{
        const [product, index] = this.findProduct(productId);
        const updatedProduct = {...product};
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.desc = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
    }

    deleteProduct(productId: string): any{
        const index = this.findProduct(productId)[1];
        this.products.splice(index,1);
    }

    private findProduct(id: string): any {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            return new NotFoundException('Could not find product.');
        }
        return [product, productIndex];
    }
}