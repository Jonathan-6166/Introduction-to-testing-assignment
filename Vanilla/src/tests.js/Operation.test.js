import {describe, it, expect } from 'vitest';
import { addTwoNumbers } from '../src/functions/Operation';




describe('addTwoNumbers'), () => {
    it("should add two numbers", () => {
        const a = 1;
        const b = 2;
        
        expect(addTwoNumbers(a, b)).toBe(3)
       })
}
