import {it, expect, describe} from 'vitest';
import {reverseString} from '../functions/reverseString';

describe('reverseString', () => {
    it("should reverse a string", ()=>{
        const str = "TechyJaunt";
        expect(reverseString(str)).toBe("tnuaJyhceT");

        const str2 = "Hello World";
        expect(reverseString(str2)).toBe("dlroW olleH");
    
    })
})