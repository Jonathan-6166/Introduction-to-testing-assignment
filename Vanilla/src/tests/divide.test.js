import {it, expect, describe} from 'vitest';
import {divTwoNumbers} from '../functions/divide';

describe('divTwoNumbers', () => {
    it("should divide two positive numbers", ()=>{
        const a = 10;
        const b = 2;
        expect(divTwoNumbers(a, b)).toBe(5);

        const a2 = 10;
        const b2 = 0;
        expect(divTwoNumbers(a2, b2)).toBe(Infinity);
    
    })
})