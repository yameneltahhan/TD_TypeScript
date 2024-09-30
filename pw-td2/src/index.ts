
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { calculateFlightDurationFromEarth } from './utils/flightCalculator';
import { cart } from './classes/Cart';
import {  Citron, Huile, Sucre, Tomate } from './classes/products';

//étape 1
export class Starship {

    ref: string;
    speed: number;
    status: StarshipStatus;
    id: string;
    constructor(ref: string, speed: number, id?: string) {
        this.ref = ref
        this.speed = speed
        this.status = StarshipStatus.PARKED
        //étape 2
        if (id) {
            if (validator.isUUID(id, 4)) {
                this.id = id;
            } else {
                throw new Error("L'id fourni n'est pas un UUID valide.");
            }
        } else {
            // Si aucun id n'est fourni, on génère automatiquement un UUID
            this.id = uuidv4();
        }
    }

    takeOff() {
        if (this.status !== StarshipStatus.PARKED) {
            throw new Error("Le vaisseau ne peut décoller que s'il est stationné.")
        }
        this.status = StarshipStatus.TAKING_OFF
    }
    park() {
        if (this.status !== StarshipStatus.LANDING) {
            throw new Error("Le vaisseau ne peut pas que si il est en cours d'atterrissage ")
        }
        this.status = StarshipStatus.PARKED
    }
    fly() {
        if (this.status !== StarshipStatus.TAKING_OFF) {
            throw new Error("Le vaisseau ne peut pas sauf si il est en en cours de décollage ")
        }
        this.status = StarshipStatus.FLYING
    }
    land() {
        if (this.status !== StarshipStatus.FLYING) {
            throw new Error("Le vaisseau ne peut pas sauf si il est en vol ")
        }
        this.status = StarshipStatus.LANDING
    }


}


enum StarshipStatus {
    PARKED = "stationné",
    TAKING_OFF = "en cours de décollage",
    FLYING = "en vol",
    LANDING = "en cours d'atterrissage"
}
// sans id
var prometheusf = new Starship("Prometheus", 100000)
//avec un id
var yamel = new Starship("Yamel", 250000,"5653d70d-5d56-4e17-b5f0-c7d594c9a52a")

console.log(prometheusf)
prometheusf.takeOff()
console.log(prometheusf)
console.log(yamel)
//jete un erreur
yamel.fly()

//etape 3
export type Planet = {
    name : string,
    distanceFromEarth : number
}
export const Planets : Planet[]=[]
//met des objets dans la list planete
Planets.push(
    { name:  "Mercure", distanceFromEarth : 77 },
    { name: "Vénus", distanceFromEarth: 41 },
    { name: "Mars", distanceFromEarth: 78 },
    { name: "Jupiter", distanceFromEarth: 628 },
    { name: "Saturne", distanceFromEarth: 1277 },
    { name: "Uranus", distanceFromEarth: 2721 },
    { name: "Neptune", distanceFromEarth: 4351 }
)


// par ordre croissant selon la distance de chaque planète à la Terre,
const sortedByDistance = Planets.slice().sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
console.log("Trié par distance :", sortedByDistance)
//par ordre alphabétique croissant,
const sortedByNameAsc = Planets.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log("Trié par nom (croissant) :", sortedByNameAsc)
//par ordre alphabétique décroissant.
const sortedByNameDesc = Planets.slice().sort((a, b) => b.name.localeCompare(a.name));
console.log("Trié par nom (décroissant) :", sortedByNameDesc)
//moyenne
const totalDistance = Planets.reduce((acc, planet) => acc + planet.distanceFromEarth, 0)
const moyenne = totalDistance / Planets.length
console.log("la moyenne est : "+moyenne)

const Mars : Planet = Planets[2]
const Saturne :  Planet = Planets[4]
//execute les résultats etape 4 qui trouve dans la fichier fligtCalculator
const DurationMarsWithPrometheusf : string = calculateFlightDurationFromEarth(prometheusf,Mars)
const DurationSaturnWithPrometheusf: string = calculateFlightDurationFromEarth(prometheusf, Saturne)
const DurationMarsWithYamel: string = calculateFlightDurationFromEarth(yamel, Mars)
const DurationSaturnWithYamel : string= calculateFlightDurationFromEarth(yamel, Saturne)
console.log(DurationMarsWithPrometheusf)
console.log(DurationSaturnWithPrometheusf)
console.log(DurationMarsWithYamel)
console.log(DurationSaturnWithYamel)


//excute étapes 5
const mycart = new cart
//ajouter des produits dans mon paniere
mycart.add( new Citron(2))
mycart.add(new Huile(1.5))
mycart.add(new Sucre(0.5))
mycart.add(new Tomate(1.5))
mycart.add(new Citron(5))
mycart.add(new Sucre(3))
//pris de produit
console.log("le prix de 5 unite de citron est : " + mycart.calculateAmountByProduct(new Citron(5)))
console.log("le prix de 5 kg de tomate est : " + mycart.calculateAmountByProduct(new Tomate(5)))
//console.log("le prix de 5 kg de sucre est : " + mycart.calculateAmountByProduct(new Sucre(5)))
//console.log("le prix de 5 littre de huile est : " + mycart.calculateAmountByProduct(new Huile(5)))


// facture
const details = mycart.displayDetails();
console.log(details);
//le orix total de produit dans la panier
console.log("Montant total :", mycart.calculateAmount());
mycart.NombreOutile()











//question au prof
/*const Montant = mycart.calculateAmount
console.log("Montant : " + Montant)*/
