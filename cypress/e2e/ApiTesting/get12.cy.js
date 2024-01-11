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
        //1)Set the url
        const pathParam1 = "/api";
        const pathParam2 = "/v1";
        const pathParam3 = "/employees";

        //2)Set the expected data
        cy.fixture("dummyTestData").as("expectedData");

        //3)Send the get request
        cy.request({
            method: "GET",
            url: `${pathParam1}${pathParam2}${pathParam3}`,
        }).then((response) => {
            
            //4)Do Assertions
            //Assert that Status code is 200
            expect(response.status).to.eq(this.expectedData.statusCode);

            //Assert that There are 24 employees
            expect(response.body.data).to.have.length(this.expectedData.numOfEmployees)

            //Assert that "Tiger Nixon" and "Garrett Winters" are among the employees
            expect(response.body.data.map((item) => item.employee_name)).to.include.members(this.expectedData.namesOfExpectedEmployees)
            
            //Assert that The greatest age is 66
            let listOfAges = response.body.data.map((item) => item.employee_age);
            listOfAges = listOfAges.sort((a, b) => a - b);
            expect(listOfAges[listOfAges.length - 1]).to.eq(this.expectedData.maxAge);

            //Assert that The name of the lowest age is "[Tatyana Fitzpatrick]"
            let theYoungestAge = listOfAges[0];
            let theYoungestEmployeeName = response.body.data.filter((item) => item.employee_age === theYoungestAge).map((item) => item.employee_name);
            expect(theYoungestEmployeeName).to.include(this.expectedData.nameOfTheYoungestEmployee);

            //Assert that Total salary of all employees is 6,644,770
            let totalSalary = response.body.data.reduce((sum, employee) => sum + employee.employee_salary, 0)
            expect(totalSalary).to.eq(this.expectedData.expectedTotalSalary);



            






        })

     
    });
        
});