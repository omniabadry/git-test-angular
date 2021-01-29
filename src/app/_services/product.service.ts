import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../_model/product";
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

//dol el card operation 
@Injectable()
export class ProductService {

    private products: Product[] = [
        // {
        //     id: 1,
        //     data: [{ name: "Iphone s", description: "Iphone sIphone sIphone " }],
        //     price: 10000,
        //     discount: 300,
        //     category: { id: '1', name: 'Arts & Crafts' },
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 2,
        //     data: [{ name: "mobile", description: "mobile ,mobile " }],
        //     price: 15000,
        //     category: { id: '2', name: 'Automotive' },
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 3,
        //     data: [{ name: "headPhones", description: "headPhones headPhones headPhones " }],
        //     price: 18000,
        //     discount: 300,
        //     category: { id: '3', name: 'Baby' },
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 4,
        //     data: [{ name: "books", description: "books books books" }],
        //     price: 22000,
        //     category: { id: '4', name: 'Books' },
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 5,
        //     data: [{ name: "speaker4", description: "speaker speaker speaker" }],
        //     price: 15000,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 6,
        //     data: [{ name: "Iphone s", description: "Iphone sIphone sIphone " }],
        //     price: 18000,
        //     discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 7,
        //     data: [{ name: "ay 7aga", description: "ay 7aga " }],
        //     price: 22000,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 8,
        //     data: [{ name: "zy ay 7aga", description: "zy ay 7aga" }],
        //     price: 15000,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 9,
        //     data: [{ name: "Iphone s", description: "Iphone sIphone sIphone " }],
        //     price: 18000,
        //     discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 10,
        //     data: [{ name: "Iphone s", description: "Iphone sIphone sIphone " }],
        //     price: 400,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 11,
        //     data: [{ name: "Iphone 11", description: "Iphone 11 Iphone 11 Iphone 11 Iphone 11" }],
        //     price: 22000,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 12,
        //     data: [{ name: "Iphone s7", description: "Iphone s7 Iphone s7 Iphone s7 Iphone s7" }],
        //     price: 15000,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 13,
        //     data: [{ name: "Iphone s", description: "Iphone sIphone sIphone " }],
        //     price: 18000,
        //     discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 14,
        //     data: [{ name: "Iphone s", description: "Iphone sIphone sIphone " }],
        //     price: 22000,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 15,
        //     data: [{ name: "camera", description: "camera camera camera camera" }],
        //     price: 15000,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 16,
        //     data: [{ name: "camera", description: "camera camera camera camera" }],
        //     price: 18000,
        //     discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 17,
        //     data: [{ name: "camera", description: "camera camera camera camera" }],
        //     price: 400,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 18,
        //     data: [{ name: "camera", description: "camera camera camera camera" }],
        //     price: 18000,
        //     discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 19,
        //     data: [{ name: "camera", description: "camera camera camera camera" }],
        //     price: 400,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 20,
        //     data: [{ name: "camera", description: "camera camera camera camera" }],
        //     price: 18000,
        //     discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 21,
        //     data: [{ name: "camera", description: "camera camera camera camera" }],
        //     price: 400,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 22,
        //     data: [{ name: "camera", description: "camera camera camera camera" }],
        //     price: 18000,
        //     discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 23,
        //     data: [{ name: "camera", description: "camera camera camera camera" }],
        //     price: 400,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 24,
        //     data: [{ name: "camera", description: "camera camera camera camera" }],
        //     price: 18000,
        //     discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // },
        // {
        //     id: 25,
        //     data: [{ name: "camera", description: "camera camera camera camera" }],
        //     price: 400,
        //     // discount: 300,
        //     imagesUrls: ['../../../../assets/img/custom-header.png'],
        // }
    ];

    productAdded = new EventEmitter<Product>();

    currentPage: "listing";
    baseURL = "https://mearn-stack-backend-test.herokuapp.com/";

    constructor(private httpClient: HttpClient) { }

    getAllProducts() {
        return this.httpClient.get(`${this.baseURL}product`)
    }

    getProductById(id) {
        return this.httpClient.get(`${this.baseURL}product/${id}`)
    }

    addProduct(product: Product) {
         
        let body = {
            discount: product.discount,
            price: product.price,
            imagesUrls: product.imagesUrls,
            data: product.data,
            categoryId: product.category.id,
        };

        // const token = localStorage.getItem('token');
        // console.log(token);
        // const headers = new HttpHeaders({
        //     authorization: token
        // });

        // return this.httpClient.post(`${this.baseURL}product/add`, body,{headers})
        return this.httpClient.post(`${this.baseURL}product/add`, body)

    }

    updateProduct(product: Product) {
        const index = this.products.findIndex(p => { p.id === product.id });
        this.products[index] = {
            id: product.id,
            data: product.data,
            price: product.price,
            discount: product.discount,
            category: product.category,
            imagesUrls: product.imagesUrls,
            paymentTypes: product.paymentTypes,
            tags: product.tags
        };
    }
    deleteProduct(id: number) {
        const index = this.products.findIndex((p) => p.id === id);
        this.products.splice(index, 1);
    }

    searchByName(productName: string) {
        const prodName = productName.toLowerCase();
        return this.products.filter(p => p.data[0].name.toLowerCase().includes(prodName));
    }

    // searchByName(term: string) {
    //     return this.httpClient.get(this.baseURL + term)
    //         .map(response => response.json())
    //         .catch(error => '')
    // }

}