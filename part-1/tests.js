import {expect} from 'chai'
import Functions from '../part-1/functions.js'

describe('Functions.month()', () => {
  it('should be a function', () => {
    expect(Functions.month).to.be.a('function')
  })

  it('should return the name of the month for a given Date object', () => {
    let date = new Date(2017, 5, 19)
    expect(Functions.month(date)).to.equal('June')
  })

  it('should return name of month as a string', () => {
    let christmas = new Date(2017, 11, 25)
    expect(Functions.month(christmas)).to.be.a('string')
  })

  it('should throw an error when given invalid input', () => {
    expect(function() {
      let invalid = new Date(2017, 'a', 16)
      Functions.month(invalid)
    }).to.throw(Error, 'invalid input')
  })
})
