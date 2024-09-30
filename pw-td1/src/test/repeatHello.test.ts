import { test, expect } from "bun:test";
import { helloyou, repeatHelloYou } from "../hello-funcs";

test("repeter la présentatiion 3 fois",()=>{
    const result = repeatHelloYou(3, "John")
    const expected = "Hello, John\nHello, John\nHello, John\n"
    expect(result).toBe(expected)
});
test("repeatHelloYou should return error message for negative number", () => {
    const result = repeatHelloYou(-1, "John")
    expect(result).toBe("Error: le nombre de répition doit etre superieur de 0")
});
test("pas de nom pour le repeter",()=>{
    const result : string = repeatHelloYou(5,"")
    expect(result).toBe("impossibe de repéter parce que on n'a pas le nom")
})