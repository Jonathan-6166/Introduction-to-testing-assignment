import {it, describe, expect} from 'vitest'
import {findMax} from '../functions/max'

describe('findMax', () => {
    it("should return the largest number", () => {
        const arr = [1, 2, 3, 4, 5];

        expect(findMax(arr)).toBe(5);

        const arr2 = [10, 20, 30, 40, 50];

        expect(findMax(arr2)).toBe(50);
    

    })

})