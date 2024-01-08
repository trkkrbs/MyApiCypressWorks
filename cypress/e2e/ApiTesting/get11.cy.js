/*
    Given
        https://restful-booker.herokuapp.com/booking/2
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that firstname is Mark
    And
        Assert that lastname is Ericsson
    And 
        Assert that total price is 217
    And
        Assert that deposit paid is true
    And 
        Assert that checkin date is "2023-06-28"
    And
        Assert that checkin date is "2023-07-28"
*/
describe("GET REquest Method", () => {
    it("", function () {
        //1)Set the url
        const pathParam1 = "/booking";
        const pathParam2 = "/2";

        //2)Set the expected data
        cy.fixture("bookingUniqueTestData").as("expectedData")

        //3)Send the get request
        cy.request({
            method: "GET",
            url: `${pathParam1}${pathParam2}`,
        }).then((response) => {
            
            const actualData = response.body;

            //4)Do Assertions
            //Assert that Status code is 200
            expect(response.status).to.eq(this.expectedData.statuscode);
            //Assert that firstname is Mark
            expect(actualData.firstname).to.eq(this.expectedData.firstname);
            //Assert that lastname is Ericsson
            expect(actualData).to.have.property("lastname", this.expectedData.lastname);
            //Assert that total price is 217 and depositpaid is true
            expect(actualData).to.include({
                totalprice: this.expectedData.totalprice,
                depositpaid: this.expectedData.depositpaid,
            })
            //Assert that checkin date is "2023-06-28"
            expect(actualData.bookingdates.checkin).to.eq(this.expectedData.bookingdates.checkin);
            //Assert that checkin date is "2023-07-28"
            expect(actualData.bookingdates.checkout).to.eq(this.expectedData.bookingdates.checkout);
        })
    })  
})