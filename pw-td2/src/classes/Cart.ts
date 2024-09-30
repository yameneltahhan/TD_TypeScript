import type { IProduct } from "../interfaces/IProduct";

export class cart{
    private orderLines: IProduct[] = [];
    //ajoute de produit dans le panier
    add(product : IProduct){
        this.orderLines.push(product);
    }
    //prix d'un produit
    calculateAmountByProduct(product : IProduct) : number{
           return product.getPrice()
    }
    //montant
    calculateAmount(): number {
  return this.orderLines.reduce((total, product) => total + product.getPrice(), 0);
}

    //facture
    displayDetails(): string[] {

        return this.orderLines.map(product => {
            return "ID : "+product.id+" ,produit : "+product.name+" ,quantité : "+product.quantity+", montant : "+product.getPrice()
        });
    }
    //combien de produit dif dans la panier
    NombreOutile() {
        var c = 0
        var h = 0
        var s = 0
        var t = 0
        for (let i = 0; i < this.orderLines.length; i++) {
            if (this.orderLines[i].name === "citron") {
                c = 1
            } else if (this.orderLines[i].name === "tomate") {
                t = 1
            } else if (this.orderLines[i].name === "Sucre") {
                s = 1
            } else if (this.orderLines[i].name === "Huile d'olive") {
                h = 1
            }
        }
        const diferrentTYPE = c+t+s+h 
        console.log("le nombre de types de produits different contenus dans le panier : "+diferrentTYPE)
    }

}