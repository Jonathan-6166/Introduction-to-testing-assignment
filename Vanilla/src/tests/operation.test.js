import {describe, it, expect} from 'vitest'; 
import {addTwoNumbers} from '../functions/Operation';

describe('addTwoNumbers', () => {
    it("should add two positive numbers", ()=>{
        const a = 2;
        const b = 3;
        expect(addTwoNumbers(a, b)).toBe(5);
    
    })
})