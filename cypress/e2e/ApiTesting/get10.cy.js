/*
    Given
        https://gorest.co.in/public/v1/users/5899610
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that Response body is not null
    And
        Assert that id is 5899610
    And 
        Assert that email is "verma_rameshwar@baumbach.example"
    And
        Assert that gender is "male"
    And 
        Assert that status is "active"
    And 
        Assert that name is "Sanka Asan"
*/
describe("GET Request Method", () => {
    it("should verify response body details", function () {
        //1)Set the url
        const pathParam1 = "/public"
        const pathParam2 = "/v1"
        const pathParam3 = "/users"
        const pathParam4 = "/5899610"
   
        //2)Set the expected data
        cy.fixture("goRestUniqueTestData").as("expectedData");

        //3)Send the get request
        cy.request({
            method: "GET",
            url: `${pathParam1}${pathParam2}${pathParam3}${pathParam4}`,
        }).then((response) => {
            const actualData = response.body.data;
            //4)Do Assertions
            //Assert that Status code is 200
            expect(response.status).to.eq(this.expectedData.statusCode)
            //Assert that Response body is not null
            expect(response.body).to.not.be.null;
            //Assert that id is 5899619
            expect(actualData).to.have.property("id", this.expectedData.id);//property methodu hem "id"nin var olup olmadigini hem de degerinin ikinci parametrede verilen degere esit olup olmadigini kontrol eder.
            //Assert that email is "verma_rameshwar@baumbach.example"
            expect(actualData).to.have.property("email", this.expectedData.email);
            //Assert that gender is "male"
            expect(actualData).to.have.property("gender", this.expectedData.gender);
            //Assert that status is "active"
            expect(actualData).to.have.property("status", this.expectedData.status);
            //Assert that name is "Sanka Asan"
            expect(actualData).to.have.property("name", this.expectedData.name);
        })
    })

    it("should verify response body details", function () {
        //1)Set the url
        const pathParam1 = "/public"
        const pathParam2 = "/v1"
        const pathParam3 = "/users"
        const pathParam4 = "/5899610"
   
        //2)Set the expected data
        cy.fixture("goRestUniqueTestData").as("expectedData");

        //3)Send the get request
        cy.request({
            method: "GET",
            url: `${pathParam1}${pathParam2}${pathParam3}${pathParam4}`,
        }).then((response) => {
            const actualData = response.body.data;
            //4)Do Assertions
            //Assert that Status code is 200
            expect(response.status).to.eq(this.expectedData.statusCode)
            //Assert that Response body is not null
            expect(response.body).to.not.be.null;
            expect(actualData).to.include({
                id: this.expectedData.id,
                email: this.expectedData.email,
                gender: this.expectedData.gender,
                status: this.expectedData.status,
                name: this.expectedData.name,
            })

        })
    })
})