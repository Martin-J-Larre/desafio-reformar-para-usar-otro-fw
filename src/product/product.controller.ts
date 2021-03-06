import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post('/create')
    async addProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const product = await this.productService.createProduct(createProductDTO)
        return res.status(HttpStatus.OK).json({
            message: "Product created",
            product
        })
    }

    @Get('/')
    async getProducts(@Res() res) {
        const products = await this.productService.getAllProducts();
        return res.status(HttpStatus.OK).json({
            products
        })
    }
    
    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID) {
        const product = await this.productService.getOneProduct(productID);
        if (!product) throw new NotFoundException("Product does not exists")
        
        return res.status(HttpStatus.OK).json(product)
    }

    @Put('/update')
    async updadateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID ){
        const updatedProduct = await this.productService.updateProduct(productID, createProductDTO);
        if (!updatedProduct) throw new NotFoundException("Product does not exists")
        return res.status(HttpStatus.OK).json({
            message: 'Product Updated',
            updatedProduct
        })
    }



    @Delete('/delete/:productID')
    async deleteProduct(@Res() res, @Param('productID') productID) {
        const productDeleted = await this.productService.deleteProduct(productID);
        //// if (!productDeleted) throw new NotFoundException("Product does not exists") // Find the problem here
        return res.status(HttpStatus.OK).json({
            message: "Product deleted",
            productDeleted
        })
    }

}
