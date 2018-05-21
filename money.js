const PRECISION = 3
const EXPONENT = (10 ** PRECISION)

class Money {
    constructor (amount, currencyCode) {
       const decimalasStr = amount.toString().split('.')[1]
       if (decimalasStr && decimalasStr.length> PRECISION) {
           throw new Error('Maximum Money precision is' + PRECISION)
       }
       
       this._amount = amount * EXPONENT
       this.currencyCode = currencyCode
      
       plus (other) ;{
          this.checkCurrencyCodes(other)
          return new Money ((this._amount + other._amount)/ EXPONENT, this.currencyCode)
       }

       minus (other) ;{
           this.checkCurrencyCodes(other) 
           return new Money ((this._amount - other._amount)/ EXPONENT, this.currencyCode)
       }

       times (number) ;{
           return new Money ((this._amount * number)/ EXPONENT, this.currencyCode)
       }

       checkCurrencyCodes (other) ;{
           if (this.currencyCode !== other.currencyCode) {
               throw new Error('Currency Codes do not match')
           }
       }
    }
}

class Bank {
    constructor ()
}

export default Money