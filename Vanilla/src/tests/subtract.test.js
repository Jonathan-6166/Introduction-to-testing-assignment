import {it, expect, describe} from 'vitest';
import {subTwoNumbers} from '../functions/subtract';

describe('subTwoNumbers', () => {
    it("should subtract two positive numbers", ()=>{
        const a = 10;
        const b = 3;
        expect(subTwoNumbers(a, b)).toBe(7);

        const a2 = 10;
        const b2 = 8;
        expect(subTwoNumbers(a2, b2)).toBe(2);
    
    
    })
})