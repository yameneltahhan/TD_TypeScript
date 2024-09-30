import { test, expect } from "bun:test";
import { helloyou } from "../hello-funcs";

test("teste de verifier pour la fonction repond la bonne nom",()=>{
    const result = helloyou("Jhon")
    expect(result).toBe("Hello, Jhon");
})
test("helloyou retourne un erreur quand le nom est vide", () => {
    const result = helloyou("");
    expect(result).toBe("erreur le nom est vide!");
});


