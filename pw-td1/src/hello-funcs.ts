import { type Human } from "./types";

export function helloWorld(): string {
    return "Hello, World!";
}
export function helloyou(name: string): string {
    if (name === "") {
        return "erreur le nom est vide!"
    }
    return "Hello, " + name


}

export function helloHuman(Human: Human): string {
    const now = new Date().getFullYear();  // Obtenir l'année en cours
    const age: number = now - Human.birthyear
    if (Human.Firstname === "" || Human.lastname === "" || Human.birthyear === null) {
        return "il moque d'information"
    }
    if (age < 0) {
        return "erreur de mettre l'année"
    }
    return "Hello," + Human.Firstname + " " + Human.lastname + " You are " + age + " years old."

}


export function repeatHelloYou(n: number, nom: string): string {
    let result = "";
    if (n <= 0) {
        return "Error: le nombre de répition doit etre superieur de 0";
    }
    if (helloyou(nom) === "erreur le nom est vide!") {
        return "impossibe de repéter parce que on n'a pas le nom"
    }
    for (var i = 0; i < n; i++) {
        result += helloyou(nom) + "\n"
    }

    return result
}










