/// <reference types="cypress" />

it('Test API Delete User (DELETE)', () => {
  cy.request({
    method: 'DELETE',
    url: 'https://reqres.in/api/users/2',
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  }).then((response) => {
    expect(response.status).to.eq(204)
  })
})