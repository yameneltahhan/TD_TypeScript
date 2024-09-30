import type { Planet, Starship } from "..";


export function calculateFlightDurationFromEarth(Starship : Starship ,Planets : Planet) : string {
   const distance : number = Planets.distanceFromEarth*1000000
   const speed : number = Starship.speed
   const temps : number = distance / speed
   var dayHour: number = temps % 24 
   var day: number = Math.floor(temps / 24)
   var year =0
    while (day - 365 > 0){
        year = year + 1
        day = day - 365
    }
        if(year>0){
            return "Le vaisseau " + Starship.ref + " faut du temps pour aller de la Terre à " + Planets.name + " " + temps + "heurre,  c'est t'as dire il a besoin " + year + " année, " + day + " jour et " + dayHour + " heurre pour arrivée à " + Planets.name
        }
    return "Le vaisseau " + Starship.ref +" faut du temps pour aller de la Terre à " +Planets.name+" "+temps+"heurre,  c'est t'as dire il a besoin "+day+" jour et "+dayHour+" heurre pour arrivée à "+Planets.name
}