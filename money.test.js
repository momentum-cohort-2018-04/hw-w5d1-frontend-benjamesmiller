//* Given a Money object and the same currency code as that money,
// it should return the same amount of money.
test('If currency codes are equal return original ammount', () => {
    const oneDollar = new Money (1, 'USD')
    const twoDollar = new Money (1, 'USD')
    expect(() => {
        expect(oneDollar.plus(twoDollar).currencyCode).toBe('===')
        expect(oneDollar.amount).toBe(twoDollar.amount)
    })
}
)
//* Given a Money object and the currency code of USD,
// it should return the correct amount of money in USD.

//* Given a Money object with the currency code of USD and 
//any other currency code to convert to, it should return 
//the correct amount of money.

//* Given a Money object and a currency code to convert to,
// neither of which are in USD, it should return the correct
// amount of money.