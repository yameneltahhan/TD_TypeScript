import { v4 as uuidv4 } from 'uuid';
import type { IProduct } from '../interfaces/IProduct';

export class Citron implements IProduct {

    id: string
    name: string
    quantity: number;
    unitprice: number;

    constructor(quantity: number) {
        this.id = uuidv4()
        this.name = "citron"
        this.quantity = quantity
        this.unitprice = 0.5  //unité
    }




    getPrice(): number {
        return this.quantity * this.unitprice
    }
}


 export class Tomate implements IProduct {
    id :string
    name : string
    quantity: number;
    unitprice: number;
    constructor(quantity : number) {
        this.id = uuidv4()
        this.name = "tomate"
        this.quantity = quantity
        this.unitprice = 3.5    //par KG
        
    }
    getPrice(): number {
        return this.quantity * this.unitprice
        }      
    }

export class Huile implements IProduct{
    id : string
    name : string
    quantity: number;
    unitprice: number;

    constructor(quantity : number){
        this.id= uuidv4()
        this.name = "Huile d'olive"
        this.quantity =quantity
        this.unitprice = 5  //par littre
    }

    getPrice(): number {
        return this.quantity*this.unitprice
    }
}

export class Sucre implements IProduct{
    id :string
    name: string;
    quantity: number;
    unitprice: number;   //par kg

    constructor(quantity : number){
        this.id = uuidv4()
        this.name = "Sucre"
        this.quantity= quantity
        this.unitprice = 3.9
    }
    getPrice(): number {
        return this.quantity*this.unitprice
    }
}

