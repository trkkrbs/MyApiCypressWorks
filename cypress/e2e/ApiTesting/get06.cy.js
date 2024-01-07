/*      
    Given
        https://restful-booker.herokuapp.com/booking/4
    When
        User sends GET Request to the Url
    Then
         HTTP Status Code should be 200
    And
        Status text is OK
    And 
        Response time is less than 300 ms
    And
        Response format should be "application/json"
    And
        First name is Susan
    And
        Last name is Brown
    And
        Total price is 678
    And
        Deposit paid is false
    And
        Check-in date is "2020-07-26"
    And
        Check-out date is "2020-08-12" 
    And
        Additional needs Breakfast
	  	
 */
describe("GET Request Method", () => {
    it("Using multiple path params", () => {

        //1)Set the url
        const pathParam1 = "/booking";
        const pathParam2 = "/4";

        //2)Set the payload

        //3)Send the GET Request
        cy.request({
            method: "GET",
            url: `${pathParam1}${pathParam2}`
        }).then((response) => {
            
            //4)Do Assertions
             //HTTP Status Code should be 200
             expect(response.status).to.eq(200);
             //Status text is OK
             expect(response.statusText).to.eq("OK");
             //Response time is less than 1200 ms
             expect(response.duration).to.be.lessThan(1200);
             //Response format should be "application/json"
             expect(response.headers["content-type"]).to.include("application/json");
            //First name is Susan
            expect(response.body.firstname).to.eq("Sally");
            //Lasst name is Brown
            expect(response.body.lastname).to.eq("Jones");
            //Total price is 678
            expect(response.body.totalprice).to.eq(371)
            //Deposit paid is false
            expect(response.body.depositpaid).to.be.false;
            //Check-in date is "2020-07-26"
            expect(response.body.bookingdates.checkin).to.eq("2018-03-03")
            //Check-out date is "2020-08-12"
            expect(response.body.bookingdates.checkout).to.eq("2021-12-19")
            //Additional needs Breakfast
            // expect(response.body.additionalneeds).to.eq("Breakfast");


        })
        
    })
})