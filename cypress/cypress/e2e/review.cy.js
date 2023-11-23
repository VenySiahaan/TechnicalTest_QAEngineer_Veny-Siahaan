/* 
Nama  : Veny Siahaan
Freelance QA
*/

//Test Case Positive
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('Veny Siahaan')
    cy.wait(2000)
    cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('082273835159')
    cy.wait(2000)
    cy.get(':nth-child(1) > div > .--x-77').click()
    cy.wait(2000)
    cy.get('.-im-88').click()
    cy.wait(2000)
    cy.get('#DatePicker0-label').click().type("11/20/2023")
    cy.wait(2000)
    cy.get('.css-224').click()
    cy.wait(4000)
  })
})

//Test Case Negative Do not fill in the Full name field (Question 1)
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('082273835159')
    cy.wait(2000)
    cy.get(':nth-child(1) > div > .--x-77').click()
    cy.wait(2000)
    cy.get('.-im-88').click()
    cy.wait(2000)
    cy.get('#DatePicker0-label').click().type("11/20/2023")
    cy.wait(2000)
    cy.get('.css-224').click()
    cy.wait(2000)
  })
})


//Test Case Negative Do not fill in the Phone Number text field (Question 2)
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('Veny Siahaan')
    cy.wait(2000)
    cy.get(':nth-child(1) > div > .--x-77').click()
    cy.wait(2000)
    cy.get('.-im-88').click()
    cy.wait(2000)
    cy.get('#DatePicker0-label').click().type("11/20/2023")
    cy.wait(2000)
    cy.get('.css-224').click()
    cy.wait(2000)
  })
})

//Test Case Negative Do not fill in the option (Question 3)
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('Veny Siahaan')
    cy.wait(2000)
    cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('082273835159')
    cy.wait(2000)
    cy.get('.-im-88').click()
    cy.wait(2000)
    cy.get('#DatePicker0-label').click().type("11/20/2023")
    cy.wait(2000)
    cy.get('.css-224').click()
    cy.wait(2000)
  })
})

//Test Case Negative Do not fill in the option and not input textfild in other (Question 3 option 3)
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('Veny Siahaan')
    cy.wait(2000)
    cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('082273835159')
    cy.wait(2000)
    cy.get('.-ni-67 > .-a-79 > .-hE-80').click()
    cy.get('.-iP-85 > .-_F-60').type
    cy.wait(2000)
    cy.get('.-im-88').click()
    cy.wait(2000)
    cy.get('#DatePicker0-label').click().type("11/20/2023")
    cy.wait(2000)
    cy.get('.css-224').click()
    cy.wait(2000)
  })
})

//Test Case Negative Do not fill in the rate (Question 4)
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('Veny Siahaan')
    cy.wait(2000)
    cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('082273835159')
    cy.wait(2000)
    cy.get('.-ni-67 > .-a-79 > .-hE-80').click()
    cy.get('.-iP-85 > .-_F-60').type('Currently')
    cy.wait(2000)
    cy.get('#DatePicker0-label').click().type("11/20/2023")
    cy.wait(2000)
    cy.get('.css-224').click()
    cy.wait(2000)
  })
})

//Test Case Negative Do not fill in the date (Question 5)
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('Veny Siahaan')
    cy.wait(2000)
    cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('082273835159')
    cy.wait(2000)
    cy.get('.-ni-67 > .-a-79 > .-hE-80').click()
    cy.get('.-iP-85 > .-_F-60').type('Currently')
    cy.wait(2000)
    cy.get('.-im-88').click()
    cy.wait(2000)
    cy.get('.css-224').click()
    cy.wait(4000)
  })
})

//Test Case Negative Do not use all fields given on the form (Question 1, 2, 3, 4, 5)
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.get('.css-224').click()
    cy.wait(2000)
  })
})

//Test Case Positive Select the Copyright infringement Option on the question 
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.get('.css-232').click()
    cy.wait(2000)
    cy.get('#Phishing').click()
    cy.wait(2000)
    cy.get('.css-224').click()
    cy.wait(2000)
  })
})

//Test Case Positive Select the other and fill text in the comments 
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.get('.css-232').click()
    cy.wait(2000)
    cy.get('#Other').click()
    cy.wait(2000)
    cy.get('.-_F-60').click().type('Fraud')
    cy.wait(2000)
    cy.get('.css-224').click()
    cy.wait(2000)
  })
})