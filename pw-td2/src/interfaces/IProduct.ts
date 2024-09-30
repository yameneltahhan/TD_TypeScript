export interface IProduct {
    id: string;   
    name : string      
    unitprice : number  
    quantity: number    
  
    getPrice(): number
}
