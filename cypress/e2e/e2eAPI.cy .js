import ApiData from '../fixtures/api.json';

describe('API Testing with Cypress', () => {
  beforeEach(() => {
    cy.fixture("login").as("userData")
  })
  it('GET - read', () => {
    cy.request(`${ApiData.apiUrl}/posts/1`).then((response) => {
      // Assert status code
      expect(response.status).to.eq(200);

      // Assert properties on the response body
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('title');
      expect(response.body).to.have.property('body');
    });
  });
  it('POST - login', () => {
    cy.request('POST', `${ApiData.apiUrl}/posts`, {
      title: 'foo',
      body: 'bar',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('title', 'foo');
      expect(response.body).to.have.property('body', 'bar');
      expect(response.body).to.have.property('userId', 1);
    });
  });
  it('PUT - update a resource', () => {
    cy.request('PUT', `${ApiData.apiUrl}/posts/1`, {
      id: 1,
      title: 'updated title',
      body: 'updated body',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'updated title');
      expect(response.body).to.have.property('body', 'updated body');
    });
  });
  it('DELETE - delete a resource', () => {
    cy.request('DELETE', `${ApiData.apiUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});





