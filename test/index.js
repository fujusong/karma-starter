const Code = require('../src/index')

describe('index.js: ', () => {
  it('checkNum() should work fine.', () => {
    expect(Code.checkNum(1)).toBe(true)
    expect(Code.checkNum('1')).toBe(false)
  })
})

describe('index.js: ', () => {
  it('checkString() should work fine.', () => {
    expect(Code.checkString("aaa")).toBe(true)
    expect(Code.checkString(2)).toBe(false)
    expect(Code.checkString(' ')).toBe(true)
  })
})