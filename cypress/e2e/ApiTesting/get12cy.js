/*
    Given
        https://dummy.restapiexample.com/api/v1/employees
    When
        User send GET Request to the URL
    Then
        Status code is 200
    And
        There are 24 employees
    And
        "Tiger Nixon" and "Garrett Winters" are among the employees
    And
        The greatest age is 66
    And
        The name of the lowest age is "[Tatyana Fitzpatrick]"
    And
        Total salary of all employees is 6,644,770
    */

describe("GET Request Method", () => {

    it("should verify status code, number of employees, employee names, the oldest and the youngest employees, salary", function () {
        //i)Set the url
        const pathParam1 = "/api";
        const pathParam2 = "/v1";
        const pathParam3 = "/employees";

        //ii)Set the expected data
        cy.fixture().as("expectedData");
        
     
    });
        
});