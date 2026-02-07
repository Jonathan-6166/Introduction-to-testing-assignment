import {describe, it, expect} from 'vitest'; 
import {addTwoNumbers} from '../functions/add';

describe('addTwoNumbers', () => {
    it("should add two positive numbers", ()=>{
        const a = 2;
        const b = 3;
        expect(addTwoNumbers(a, b)).toBe(5);

        const a2 = 2;
        const b2 = 8;
        expect(addTwoNumbers(a2, b2)).toBe(10);
    
    
    })
})