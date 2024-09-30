import { test, expect } from "bun:test";
import { helloWorld } from "../hello-funcs";

test("helloWorld doivent envoyer 'Hello, World!'", () => {
    const result = helloWorld();
    expect(result).toBe("Hello, World!");
});
