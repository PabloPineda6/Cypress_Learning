describe ('Simple test with cypress using true and false', () => {
    it('True should be True', () => {
        expect(true).to.equal(true)
    })
    it('True should not be False', () => {
        expect(true).not.to.equal(false)
    })
    it('False should be False', () => {
        expect(false).to.equal(false)
    })
})
describe ('Simple test with cypress using numbers', () => {
    it('4 should not be 1', () => {
        expect(4).not.to.equal(1)
    })
    it('5 should be 5', () => {
        expect(5).to.equal(5)
    })
})