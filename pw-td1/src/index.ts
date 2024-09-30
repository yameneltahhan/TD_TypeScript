import { helloWorld } from "./hello-funcs";
import { helloyou } from "./hello-funcs";
import { helloHuman } from "./hello-funcs";
import { type Human } from "./types";
import { repeatHelloYou } from "./hello-funcs";
//etape 3
const message = helloWorld();
console.log("Hello World!");
console.log(message);

//etape 4
const mes = helloyou("john");
console.log(mes)

// étape 5
const johnDoe :Human = {
    Firstname :"John",
    lastname : "Doe",
    birthyear : 1980
}
const messageJohn : string = helloHuman(johnDoe)
console.log(messageJohn)

//etape 6
const reapete : string = repeatHelloYou(5,"CHESS")
console.log(reapete)

//étapes 7
try {
    const message = repeatHelloYou(-1, "John");  // Test avec un nombre négatif
    console.log(message);
} catch (error) {
    console.error("Error in repeatHelloYou:", error);
}


const erreurhelloyou = helloyou("");
console.log(erreurhelloyou);
const erreurAGE: Human = {
    Firstname: "theo",
    lastname: "DING",
    birthyear: 2027
}
const problemeAge: string = helloHuman(erreurAGE)
console.log(problemeAge)
const erreurrepeat: string = repeatHelloYou(5, "")
console.log(erreurrepeat)