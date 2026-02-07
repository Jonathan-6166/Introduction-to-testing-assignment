import {it, expect, describe} from 'vitest';
import {isPalindrome} from '../functions/palindrome';

describe('isPalindrome', () => {
    it("should check if a string is a palindrome", ()=>{
        const str = "racecar";
        
        expect(isPalindrome(str)).toBe(true);
        
        const str2 = "hello";
        
        expect(isPalindrome(str2)).toBe(false);
    
    
    
    })
})