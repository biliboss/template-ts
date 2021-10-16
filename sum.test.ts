import * as sum from "./sum"
// @ponicode
describe("sum.sum", () => {
    test("0", () => {
        let callFunction: any = () => {
            sum.sum(0, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            sum.sum(0, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            sum.sum(-100, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            sum.sum(-100, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            sum.sum(0, -5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            sum.sum(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
