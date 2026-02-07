import {it, expect, describe} from 'vitest';
import {mulTwoNumbers} from '../functions/multiply';

describe('mulTwoNumbers', () => {
    it("should multiply two positive numbers", ()=>{
        const a = 10;
        const b = 3;
        expect(mulTwoNumbers(a, b)).toBe(30);
    
        const a2 = 10;
        const b2 = 0;
        expect(mulTwoNumbers(a2, b2)).toBe(0);
    })
})