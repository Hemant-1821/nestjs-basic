import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    async addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number,
    ): Promise <any> {
        const generatedId = await this.productsService.insertProduct(
            prodTitle, 
            prodDesc, 
            prodPrice
        );
        return { id: generatedId };
    }

    @Get()
    async getAllProducts(): Promise <any> {
        const products = await this.productsService.getProducts();
        return products;
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string,): any {
        return this.productsService.getSingleProduct(prodId);
    }

    @Patch(':id')
    async updateProduct(
        @Param('id') prodId: string, 
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number,
    ): Promise <any>{
        await this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

    @Delete(':id')
    async deleteProduct(
        @Param('id') prodId: string,
    ): Promise <any>{
        await this.productsService.deleteProduct(prodId);
        return null;
    }
}