/*
        Given
            https://restful-booker.herokuapp.com/booking?firstname=Sally&lastname=Jackson
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
	  		Among the data there should be someone whose firstname is "Sally" and last name is "Jackson"
*/
describe("GET Request Method", () => {
    it("Status Code, Status Text, Response Time, Response Body, Query Params", () => {
        
        //1)Set the url
        const pathParam = "/booking";
        const queryParam = {
            firstname: "Susan",
            lastname: "Wilson"
        }

        //2)Set the payload

        //3)Send the GET Request
        cy.request({
            method: "GET",
            url: pathParam, //bu kisim endpoint'e path paramlari ekler.
            qs: queryParam //bu kisim endpoint'e query paramlari ekler.
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
            //Among the data there should be someone whose firstname is "Susan" and last name is "Wilson"
            const responseBody = Array.isArray(response.body) ? response.body : [response.body];
            expect(response.body).to.deep.include.members([{ bookingid: 4 }]);
        })
    })
})

// 1) Tekrar olmayacak
// 2) Mumkun oldugu kadar kisa kod yazilmali
// 3) Yazdigimiz code okunur olmali, bir  roman gibi bizim code'umuza bakan anlayabilmeli
// 4) Data ile Ana code birbirinden ayrilmali; 
      //i)Data database' de olur,
      //ii)Ana code'lar application'un icinde olur
      //iii)Application'daki code'lar database'e gider datayi alir ve kullanir.
      
