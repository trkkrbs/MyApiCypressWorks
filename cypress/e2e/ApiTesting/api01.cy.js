/*
Given
       https://automationexercise.com/api/productsList
Request Method: GET
Response Code: 200
Response JSON: All products list
*/

/*
        Given
            https://automationexercise.com/api/productsList
        When
            User send a request to the URL
        Then
             HTTP Status Code should be 200
        And
            Status text is OK
        And 
            Response time is less than 300 ms
		And
		    Response format should be "application/json"
	  	And
	  		The response JSON should contain a list of all products
*/

describe('Retrieve Products List from API', () => {
    it('should get the list of all products', () => {
      // Given 
      const apiUrl = 'https://automationexercise.com/api/productsList';
  
      // When
      cy.request(apiUrl).as('apiResponse');
  
      // Then
      cy.get('@apiResponse').then((response) => {
        // Check response code
        expect(response.status).to.eq(200);
  
        // Check response JSON contains a list of products
        expect(response.body).to.have.property('products').to.be.an('array');
        // Add more specific assertions based on the structure of your response JSON
      });
    });
  });