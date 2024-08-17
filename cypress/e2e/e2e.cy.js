import LoginPage from '../pageObject/login.js';

describe('login user', () => {
  beforeEach(() => {
    cy.visit("/login")
    cy.fixture("login").as("userData")
  })

  it("login Valid", function () {
    LoginPage.login(this.userData.validuser.email, this.userData.validuser.password)
    LoginPage.msgLogedUser.should("be.visible")
  })
  it("login Incorrect userName", function () {
    LoginPage.login(this.userData.noreguser.email, this.userData.validuser.password)
    LoginPage.msgInvalidUser.should("be.visible")
  })
  it("login Incorrect password", function () {
    LoginPage.login(this.userData.validuser.email, this.userData.noreguser.password)
    LoginPage.msgInvalidUser.should("be.visible")
  })
  it("login Incorrect invalid credentials", function () {
    LoginPage.login(this.userData.noreguser.email, this.userData.noreguser.password)
    LoginPage.msgInvalidUser.should("be.visible")
  })

})






