import { getPrecent } from "../../utils/getPrecent";

describe ( "test for getPrecent function", () => {
    it('get typeof === number',
        () => {
            expect(typeof (getPrecent(30, 200))).toBe(typeof (60))
        }),
        it('get 30% from 200',
            () => {
                expect(getPrecent(30, 200)).toBe(60)
            })
})