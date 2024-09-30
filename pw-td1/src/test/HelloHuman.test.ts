import{test,expect}from "bun:test"
import { helloHuman } from "../hello-funcs";
import { type Human } from "..//types";

test("ce test permetde verifier les resultat",()=>{
    const jeanDoe : Human ={
        Firstname: "peter",
        lastname: "Doe",
        birthyear: 2000
    } 
    const now = new Date().getFullYear();  // Obtenir l'année en cours
    const age: number = now - jeanDoe.birthyear
    const result : string = helloHuman(jeanDoe)
    expect(result).toBe("Hello," + jeanDoe.Firstname + " " + jeanDoe.lastname + " You are " + age + " years old.")
})
test("helloHuman should return error message for missing firstname", () => {
    const invalidHuman: Human = {
        Firstname: "",
        lastname: "Doe",
        birthyear: 1980
    };
    const result = helloHuman(invalidHuman);
    expect(result).toBe("il moque d'information");
});