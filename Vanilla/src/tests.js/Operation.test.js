import {describe, it, expect } from 'vitest'
import { addTwoNumbers } from '../functions/Operation';


describe('addTwoNumbers'), () => {
    it("should add two positive numbers", () => {
        const a = 6;
        const b = 6;

        expect(addTwoNumbers(a, b)).toBe(12);

    })
    
}
