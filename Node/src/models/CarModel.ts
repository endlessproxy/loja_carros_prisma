export class Car {
    brand: string;
    model: string;
    color: string;
    year: number;
    price: number;
    
    constructor(brand: string, model: string, color: string, year: number, price: number) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.price = price;
    }
}