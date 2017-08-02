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

describe.only('Functions.reverseSentence()', () => {
  it('should be a function', () => {
    expect(Functions.reverseSentence).to.be.a('function')
  })

  it('returns a given string with the words in reverse order', () => {
    expect(Functions.reverseSentence("The cat jumped over the dog.")).to.equal('dog. the over jumped cat The')
  })

  it('returns a single word unchanged', () => {
    expect(Functions.reverseSentence('Fabulous!')).to.equal('Fabulous!')
  })

  it('treats any series of non-space characters as a word', () => {
    expect(Functions.reverseSentence('Hello, world!')).to.equal('world! Hello,')
  })

  it('throws an error when given invalid input', () => {
    expect(function() {
      Functions.reverseSentence(12345)
    }).to.throw(Error, 'invalid input')
  })
})
